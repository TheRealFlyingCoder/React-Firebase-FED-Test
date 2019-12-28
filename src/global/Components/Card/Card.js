import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';

import Styles from './Card.styles';

export default ({ children }) => {
	return (
		<div css={Styles}>
			<div className="inner-card">{children}</div>
		</div>
	);
};
