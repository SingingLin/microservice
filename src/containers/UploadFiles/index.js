import React from 'react';
import TitleComponent from "./components/Title";
import SelectFiles from "./SelectFiles";
import UPloadFilesInfo from "./UploadFilesInfo";
import "./_upload.scss";

export class UploadFiles extends React.Component {

    componentDidMount() { }

    render() {
        return (
            <div>
                <TitleComponent></TitleComponent>

                <div className={'upload-group'}>
                    
                    <div className={'upload-group__filepicker'}>
                        <SelectFiles></SelectFiles>
                    </div>

                    <div className={'upload-group__filelist'}>
                        <UPloadFilesInfo></UPloadFilesInfo>
                    </div>

                </div>
            </div>
        );
    }
}
