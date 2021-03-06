import { css } from '@emotion/core';
import Theme from 'Theme';

export default css`
	height: ${Theme.height.header};
	width: 100%;
	background-color: ${Theme.colours.black};
	position: fixed;
	top: 0;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: ${Theme.layer.header};
	.logo {
		display: flex;
		align-items: center;
		margin-left: 15px;
		text-decoration: none;
		img {
			max-width: 50px;
		}

		h3 {			
			margin-left: 15px;
			color: ${Theme.colours.white}
		}
	}

	.auth {
		padding-right: 20px;

		a {
			color: ${Theme.colours.white};
			text-decoration: none;
		}
	}
`;
