import React, { useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useStateValue } from '~/StateProvider';
import { initConfig, uiConfig } from '~/configuration/firebaseConfig';

import { retrieveUserOrganisation } from './FirebaseDatabaseModule';

export default () => {
	const [globalState, setGlobalState] = useStateValue();

	if (globalState.initialised) return null;

	//Initialise firebase authentication
	if (firebase.apps.length === 0) {
		firebase.initializeApp(initConfig);
		firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
	}

	const authenticateUser = () => {
		return new Promise(function(resolve, reject) {
			firebase.auth().onAuthStateChanged(function(user) {
				if (user) {
					resolve(user);
				}
			});
		});
	};

	authenticateUser().then(user => {
		setGlobalState({
			User: user,
			initialised: true,
		});

		retrieveUserOrganisation(user, org => {
			setGlobalState(prevState => {
				return {
					...prevState,
					Org: org,
				};
			});
		});
	});

	return null;
};

export const SignOut = () => {
	firebase.auth().signOut();
};

export const AuthLogin = () => {
	const [loading, setLoading] = useState(true);

	const uiShown = () => {
		setLoading(false);
	};

	const Styles = css`
		min-height: 100px;
	`;

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
