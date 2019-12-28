import React, { useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import { uiConfig, initConfig } from '../config';

firebase.initializeApp(initConfig);

const Styles = css`
	min-height: 100px;
`;

export default () => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const uiShown = () => {
		setLoading(false);
    };
    
    firebase.auth().onAuthStateChanged(
        (user) => {
            setUser(user || false)
            if(user) {
                setLoading(false);
            }
        }
    );

	const config = {
		...uiConfig,
		callbacks: {
			uiShown: uiShown,
		},
	};

	return (
		<div css={Styles}>
			{loading && <div id="loader">Loading...</div>}
			{user === false && (
                <>
                    <StyledFirebaseAuth uiConfig={config} firebaseAuth={firebase.auth()} />
                </>
            )}
            {user && (
                <>
                    <p>Your are now signed in as, {firebase.auth().currentUser.displayName}!</p>
                    <a onClick={() => firebase.auth().signOut()}>Sign-out</a>       
                </>     
            )}
		</div>
	);
};
