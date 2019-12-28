import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import Styles from './Container.styles';

export default ({ children, isCard }) => {
	return (
		<div css={Styles(isCard)}>
			<div className="inner-container">
				{children}
			</div>
		</div>
	);
};
