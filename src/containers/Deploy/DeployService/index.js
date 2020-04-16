import { connect } from "react-redux";
import { updateDeployCollapseFlag, updateDeployCheckFlag, updateDeployAllCheckFlag } from "redux/actions";
import DeployListComponent from "../components/DeployList";
import 'mock/deploy_data';

const mapDispatchToProps = (dispatch) => {
    return {
        onCollapseFlagClick: (serviceId) => {
            console.log('updateDeployCollapseFlag')
            dispatch(updateDeployCollapseFlag(serviceId))
        },
        onCheckFlagClick: (serviceId) => {
            console.log('updateDeployCheckFlag')
            dispatch(updateDeployCheckFlag(serviceId))
        },
        onAllCheckClick: (flag) => {
            dispatch(updateDeployAllCheckFlag(flag))
        }
    }
}

const mapStateToProps = (state) => {
    console.log('DeployService state: ', state)
    return {
        data: filterList(state.deploy)
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

const DeployService = connect(
    mapStateToProps,
    mapDispatchToProps
)(DeployListComponent)

export default DeployService;