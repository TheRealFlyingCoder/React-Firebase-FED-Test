import { css } from '@emotion/core';
import Theme from 'Theme';

export default (isCard) => css`
	padding-top: ${Theme.height.header};
    min-height: calc(100vh - (${Theme.height.header} + ${Theme.height.footer}));
	width: 100%;
    display: flex;
	justify-content: center;
	${isCard ? 'align-items: center;' : ''}

	.inner-container {
		min-height: ${isCard ? 0 : Theme.height.containerMin};
		width: ${Theme.width[isCard ? 'card' : 'oneColumn']};
		max-width: ${Theme.width.oneColumnMax};
		padding: 15px;
		display: flex;
		flex-direction: column;
		background-color: ${Theme.colours.blackTransparent};
	}
`;
