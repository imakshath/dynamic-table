import React from 'react';
import axios from 'axios';
import Button from '../button/Button';
import './FileUploader.scss';

export default function FileUploader({ onComplete }) {
    const [selectedFile, setSelectedFile] = React.useState();

    const fileUploadeHandler = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const onClickHandler = () => {
        const data = new FormData();
        data.append('file', selectedFile);
        axios.post(`${process.env.REACT_APP_SERVER_URL}/upload`, data, {})
        .then(res => {
            readTextFile(selectedFile); 
        });
    };

    const readTextFile = file => {
		const reader = new FileReader();
        reader.onload = function(){
            const result = reader.result.substring(0, 200).split('\n');
            onComplete(result);
        };
        reader.readAsText(selectedFile);
	};

    return (
        <div className="file-upload-wrapper">
            <div className="item input-file-wrapper">
                {/* <label htmlFor="file-input">Upload file</label> */}
                <input name="file-input" type="file" onChange={fileUploadeHandler} />
            </div>
            <div className="item button-wrapper">
                <Button disabled={!selectedFile} onClick={onClickHandler}>Upload</Button>
            </div>
        </div>
    );
}