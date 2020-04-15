import React from 'react';
import TitleComponent from "common/Title";
// import DeployListComponent from "./components/DeployList";
import DeployStrategyComponent from "./components/DeployStrategy";
import DeployService from "./DeployService";
import "./_deploy.scss";

export class Deploy extends React.Component {
    render() {
        return (
            <>
                <TitleComponent titleName={'Deploy'} />
                <div className={'basic-box-group deploy-group'}>
                    <DeployService></DeployService>
                    <DeployStrategyComponent></DeployStrategyComponent>
                </div>
            </>
        )
    }
}