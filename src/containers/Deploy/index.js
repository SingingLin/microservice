import React from 'react';
import TitleComponent from "common/Title";
import DeployListComponent from "./components/DeployList";
import DeployStrategyComponent from "./components/DeployStrategy";
import "./_deploy.scss";

export class Deploy extends React.Component {
    render() {
        return (
            <>
                <TitleComponent titleName={'Deploy'} />
                <div className={'basic-box-group deploy-group'}>
                    <DeployListComponent></DeployListComponent>
                    <DeployStrategyComponent></DeployStrategyComponent>
                </div>
            </>
        )
    }
}