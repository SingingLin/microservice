import React from 'react';
import jarFileIcon from "assets/images/jar.svg";
import warFileIcon from "assets/images/war.svg";
import { Line } from 'rc-progress';

const FileCardComponent = ({ files }) => (
    <>
        {renderFiles(files)}
    </>
);


function renderFiles(files) {
    if (files.length > 0) {
        return (
            <div className={'upload-group__filelist'}>
                <ul>
                    {files.map((item, i) => (
                        <li key={'1'} className={'upload-group__filelist__item ' + getErrorBg(item)}>
                            <div className={'upload-group__filelist__item__img'}><img src={getFileImg(item.file.name)} alt="uploadIcon" /></div>
                            <div className={'upload-group__filelist__item__info'}>
                                <h3 className={'upload-group__filelist__item__info__file-name'}>{item.file.name}</h3>
                                {/* <div className={'upload-group__filelist__item__info__message'}> */}
                                {/* <EuiButtonIcon
                                        color={item.progressData == 100 ? 'success' : 'danger'}
                                        // onClick={() => this.cancelBtn()}
                                        iconType={getIconType(item.progressData, item)}
                                        aria-label="Next"
                                        disabled={item.progressData == 100 ? true : false}
                                    /> */}
                                {/* </div> */}
                                <Line prefixCls="upload-group__filelist__item__info" percent={item.progressData} trailWidth="2" strokeWidth="2" strokeColor="#48bdff" />
                                <span>{item.file.size}bytes {getUploadMsg(item.progressData, item)}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

function getFileImg(type) {
    if (type.indexOf('jar') !== -1) {
        return `${jarFileIcon}`;
    } else {
        return `${warFileIcon}`;
    }
}

function getUploadMsg(progress, file) {
    if (progress < 100) {
        return 'Uploading... ' + progress + '%';
    } else {
        let msg;
        if (file.hasOwnProperty('status')) {
            if (file.status.hasOwnProperty('errorMsg')) {
                msg = file.status.errorMsg
            } else {
                msg = 'Completed';
            }
        }
        return msg;
    }
}


function getErrorBg(file) {
    let className;

    if (file.hasOwnProperty('status')) {
        if (file.status.hasOwnProperty('errorMsg')) {
            className = 'upload-group__filelist__item--failed';
        } else {
            className = 'upload-group__filelist__item--success';
        }
    }

    return className;
};

// function getIconType(progress, file) {
//     let iconType;
//     if (progress < 100) {
//         iconType = 'cross';
//     } else {
//         if (file.hasOwnProperty('status')) {
//             if (file.status.hasOwnProperty('errorMsg')) {
//                 iconType = 'alert';
//             } else {
//                 iconType = 'check';
//             }
//         }
//     }

//     return iconType;
// }

export default FileCardComponent;