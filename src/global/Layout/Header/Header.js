import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from 'react-router-dom';

import { useStateValue } from "~/StateProvider";
import Logo from '~/assets/FlyingCoder.png';
import Styles from './Header.styles';

export default () => {
	const [globalState, setGlobalState] = useStateValue();
	return (
		<div css={Styles}>
			<Link className="logo" to="/">
				<img src={Logo} alt="The Flying Coder's Logo"></img>
				<h3>Flying Coder's FED Test</h3>
			</Link>
			<div className="auth">
				{globalState.User ? (
					<Link to="/dashboard">Dashboard</Link>
				) : (
					<Link to="/login">Login</Link>
				)}
			</div>
		</div>
	);
};
