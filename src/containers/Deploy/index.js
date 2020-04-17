import React, { Component } from 'react';
import { connect } from "react-redux";
import { getApiGetServices } from "redux/actions";
import TitleComponent from "common/Title";
import DeployTab from "./DeployTab";
import DeployService from "./DeployService";
import DeployMs from "./DeployMs";
import "./_deploy.scss";

class Deploy extends Component {

    componentDidMount() {
        this.getApi();
    }

    getApi = () => {
        this.props.onClicktest();
    }

    render() {
        return (
            <>
                <TitleComponent titleName={'Deploy'} />
                <div className={'basic-box-group deploy-group'}>
                    <div className={'basic-box-item deploy-group__list'}>
                        <h3>部署清單</h3>
                        <div className={'basic-box-panel deploy-group__list__form'}>
                            <DeployTab />
                            <DeployService></DeployService>
                            <DeployMs />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onClicktest: () => {
            dispatch(getApiGetServices())
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Deploy)