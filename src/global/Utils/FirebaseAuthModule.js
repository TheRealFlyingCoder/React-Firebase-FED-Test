import React, { useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useStateValue } from '~/StateProvider';
import { initConfig, uiConfig } from '~/configuration/firebaseConfig';

import { retrieveOrganisation } from './FirebaseDatabaseModule';

const Styles = css`
	min-height: 100px;
`;

export default () => {
	const [globalState, setGlobalState] = useStateValue();
	const [checked, setChecked] = useState(false);

	//Initialise firebase authentication
	if (firebase.apps.length === 0) {
		firebase.initializeApp(initConfig);
		firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
	}

	const unSub = firebase.auth().onAuthStateChanged(user => {
		if (!checked) {
			setGlobalState({
				User: user,
			});
			setChecked(true);
			if(user) {
				debugger;
				retrieveOrganisation(user, org => {
					debugger;
					setGlobalState(prevState =>{
						return {
							...prevState,
							org: org
						}
					});
				})
			}			
		} else {
			unSub();
		}
	});
	return null;
};

export const SignOut = () => {
    firebase.auth().signOut();
}

export const AuthLogin = () => {
	const [loading, setLoading] = useState(true);

	const uiShown = () => {
		setLoading(false);
	};

	const config = {
		...uiConfig,
		callbacks: {
			uiShown: uiShown,
		},
	};

	return (
		<div css={Styles}>
			{loading && <div id="loader">Loading...</div>}
			<StyledFirebaseAuth uiConfig={config} firebaseAuth={firebase.auth()} />
		</div>
	);
};
