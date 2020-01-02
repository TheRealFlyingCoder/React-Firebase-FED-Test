import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useStateValue } from '~/StateProvider';

import meta from './Login.meta';
import FirebaseAuthModule, { SignOut } from '~/global/Utils/FirebaseAuthModule';
export const metaConfig = meta;

const Styles = css`
	text-align: center;
	padding: 40px;

	h1 {
		margin-top: 0;
	}
`;

export default () => {
  const [globalState, setGlobalState] = useStateValue();
  
	return (
		<div css={Styles}>
			<h1>Login</h1>
			{globalState.User ? (
				<>
					<p>Your are now signed in as, {globalState.User.displayName}!</p>
					<button onClick={SignOut}>Sign-out</button>
				</>
			) : (
				<FirebaseAuthModule />
			)}
		</div>
	);
};
