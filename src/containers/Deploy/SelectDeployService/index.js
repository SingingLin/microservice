import { connect } from "react-redux";
import { updateDeployCollapseFlag, updateDeployCheckFlag, updateDeployAllCheckFlag, updateDeployInstances } from "redux/actions";
import DeployListComponent from "../components/DeployList";
import 'mock/deploy_data';
import 'mock/deployment_data';

const mapDispatchToProps = (dispatch) => {
    return {
        onCollapseFlagClick: (serviceId) => {
            dispatch(updateDeployCollapseFlag(serviceId))
        },
        onCheckFlagClick: (serviceId) => {
            dispatch(updateDeployCheckFlag(serviceId))
        },
        onAllCheckClick: (flag) => {
            dispatch(updateDeployAllCheckFlag(flag))
        },
        onInstanceCountChange: (count, serviceId) => {
            if (count !== undefined && count !== null) {
                dispatch(updateDeployInstances(count, serviceId))
            }
        }
    }
}

const mapStateToProps = (state) => {
    console.log('SelectDeployService state: ', state)
    return {
        data: filterList(state.deploy),
        tab: state.deploy.tab
    }
}

function filterList(data) {
    if (Object.keys(data.allList).length !== 0) {
        if (data.tab === 'n') {
            return data.allList.newObj;
        } else {
            return data.allList.updateObj
        }
    }
}

const SelectDeployService = connect(
    mapStateToProps,
    mapDispatchToProps
)(DeployListComponent)

export default SelectDeployService;