import React, { useState } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import meta from './Dashboard.meta';
import Styles from './Dashboard.styles';
import FileUpload from '~/global/Components/FileUpload';

export const metaConfig = meta;

export default () => {

	return (
		<div css={Styles}>
      <h1>Dashboard</h1>
      <div className="modules">
        <FileUpload />
        <FileUpload />
        <FileUpload />
        <FileUpload />
        <FileUpload />
        <FileUpload />
      </div>
		</div>
	);
};
