import React, { Component } from 'react';
import { connect } from "react-redux";
import { deployTab } from "redux/actions";

class DeployTab extends Component {
    
    render() {
        return (
            <ul className={'tab-group'}>
                <li className={'tab' + (this.props.tabType === 'n' ? ' active' : '')} onClick={() => { this.props.onTabClick('n') }}><a>New</a></li>
                <li className={'tab' + (this.props.tabType === 'u' ? ' active' : '')} onClick={() => { this.props.onTabClick('u') }}><a>Update</a></li>
            </ul>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTabClick: (status) => {
            dispatch(deployTab(status))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        tabType: state.deploy.tab
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeployTab)