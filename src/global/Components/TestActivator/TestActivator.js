import React, { useState } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useStateValue } from '~/StateProvider';
import { openOrganisationTest } from '~/Global/Utils/FirebaseDatabaseModule';

import Styles from './TestActivator.styles';

export default () => {
	const [testCode, setCode] = useState(null);
	const [loading, setLoading] = useState(false);
	const [globalState, setState] = useStateValue();

	const generateTest = async() => {
		setLoading(true);
		const code = await openOrganisationTest(globalState.Org.name, '12345', 'DSFOIJ');
		setCode(code);
		setLoading(false);
	};

	return globalState.Org ? (
		<div css={Styles}>
			<h4>Test Activator Module</h4>
			{testCode ? (
				<div className="result">
					<h2>{testCode}</h2>
					<p>Please share this code with your testee</p>
				</div>
			) : (
				<div className="generate">
					{loading && <p>Loading....</p>}
					<button onClick={generateTest}>Generate a code</button>
				</div>
			)}
		</div>
	) : (
		<div css={Styles}>
			<h4>Test Activator Module</h4>
			<p>You are unable to use this feature, as you have no organisation, or tests listed against your account</p>
		</div>
	);
};
