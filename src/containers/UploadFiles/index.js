import React from 'react';
import TitleComponent from "common/Title";
import SelectFiles from "./SelectFiles";
import UPloadFilesInfo from "./UploadFilesInfo";
import "./_upload.scss";

export class UploadFiles extends React.Component {

    componentDidMount() { }

    render() {
        return (
            <div>
                <TitleComponent titleName={'Upload your jar or war file'}></TitleComponent>

                <div className={'upload-group'}>
                    <UPloadFilesInfo></UPloadFilesInfo>
                    <SelectFiles></SelectFiles>
                </div>
            </div>
        );
    }
}
