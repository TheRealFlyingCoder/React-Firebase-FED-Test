import { css } from '@emotion/core';
import Theme from 'Theme';

const AppStyles = css`
	text-align: center;
	.modules {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
		& > div {
			width: 40%;
			margin: 10px;
			padding: 10px;
			border: 1px black dashed;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
	}
`;

export default AppStyles;
