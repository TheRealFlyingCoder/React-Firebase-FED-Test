import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
/** @jsx jsx */
import { jsx, Global } from '@emotion/core';
import firebase from 'firebase';

import routes from './routes';
import AppStyles from './App.styles';
import { StateProvider } from './StateProvider';
import Layout from '~/global/Layout';
import Meta from '~/configuration/meta';
import { initConfig } from '~/configuration/firebaseConfig';
import FirebaseAuthModule from '~/global/Utils/FirebaseAuthModule';

export default function App() {
	const initialState = {
		initialised: false,
		User: null,
		Org: null,
	};

	return (
		<StateProvider initialState={initialState}>
			<FirebaseAuthModule />
			<Router>
				<Switch>
					{routes.map(route => {
						const { Component, metaConfig, exact, path, layoutType } = route;
						return (
							<Route
								key={path}
								exact={exact}
								path={path}
								render={props => {
									return (
										<>											
											<Meta metaConfig={metaConfig} />
											<Global styles={AppStyles} />
											<Layout type={layoutType}>
												<Component {...props} />
											</Layout>
										</>
									);
								}}
							/>
						);
					})}
				</Switch>
			</Router>
		</StateProvider>
	);
}
