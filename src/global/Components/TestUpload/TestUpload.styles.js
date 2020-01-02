import { css } from '@emotion/core';
import Theme from 'Theme';

export default css`
	height: 200px;
	width: 200px;
	background-color: ${Theme.colours.white};
	border: 2px dashed rgb(187, 186, 186);
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	font-size: 16px;
    cursor: pointer;

    :hover {
        background-color: ${Theme.colours.lightGrey};
    }

    img {
        opacity: 0.3;
        height: 64px;
        width: 64px;
    }

    input {
        display: none;
    }
`;
