import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import meta from './Login.meta';
import FirebaseAuthModule from '../components/FirebaseAuthModule';
export const metaConfig = meta;

const Styles = css`
  text-align: center;
  padding: 40px;

  h1 {
    margin-top: 0;
  }
`;

export default () => {
  return (
    <div css={Styles}>
      <h1>Login</h1>
      <FirebaseAuthModule />
    </div>
  );
};
