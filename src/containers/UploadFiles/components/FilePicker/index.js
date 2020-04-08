import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import uploadimg from 'assets/images/filepicker.svg';

const FilePickerComponent = ({ onFileChange }) => (
    <div className={'upload-group__filepicker--border'}>

        <Dropzone
            accept="application/java-archive, .jar, .war"
            onDrop={acceptedFiles => {
                onFileChange(acceptedFiles);
            }}>
            {({ getRootProps, getInputProps }) => (
                <div className={'upload-group__filepicker__dragarea'} {...getRootProps()}>
                    <input {...getInputProps()} />
                    <div className={'upload-group__filepicker__dragarea--img'}>
                        <img src={uploadimg} />
                    </div>
                    <p>Drag or drop some files here, or click to select files.</p>
                </div>
            )}
        </Dropzone>

        {/* <input
            type="file"
            id="filepicker"
            data-target="file-uploader"
            // accept="application/java-archive, .jar, .war"
            multiple="multiple"
            onChange={(event) => onFileChange(event)}
        /> */}
    </div>
);

FilePickerComponent.prototype = {
    onFileChange: PropTypes.func.isRequired
}

export default FilePickerComponent;