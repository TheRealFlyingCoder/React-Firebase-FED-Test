import React, { useState } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useStateValue } from '~/StateProvider';
import { UploadFiles } from '~/global/Utils/FirebaseStorageModule';

import Styles from './FileUpload.styles';
import Upload from '~/assets/upload.svg';

export default () => {
    const [uploadStatusMap, setMap] = useState({});
    const [globalState, setState] = useStateValue();
	const inputRef = React.createRef();

	const openFileDialog = () => {
		inputRef.current.click();
	};

	const handleDrop = e => {
		e.preventDefault();
		handleUpload(Array.from(e.dataTransfer.files));
    };
    
    const handleUpload = files => {
        const statusMap = {};
        const prefix = globalState.User.uid;
        files.forEach(file => (statusMap[file.name] = 0))
        setMap(statusMap);
        UploadFiles(files, prefix, (file, snapshot) => {
            setMap(prevMap => {
                return {
                    ...prevMap,
                    [file.name]: snapshot ? Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                        : -1,
                };
            });
        });
    };

	return (
		<div>
            <h4>Upload Module</h4>
			<div css={Styles} onClick={openFileDialog}>
				<img alt="upload" src={Upload} />
				<input
					ref={inputRef}
					onChange={e => handleUpload(Array.from(e.target.files))}
					onDrop={handleDrop}
					type="file"
				/>
				<span>Upload your test</span>
			</div>
			<div>
				{Object.keys(uploadStatusMap).map(key => {
					const isValid = uploadStatusMap[key] >= 0;
					return (
						<p>
							{key} {isValid ? `${uploadStatusMap[key]}%` : 'Failed Upload'}
						</p>
					);
				})}
			</div>
		</div>
	);
};
