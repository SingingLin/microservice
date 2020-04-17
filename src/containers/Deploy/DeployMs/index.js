import { connect } from "react-redux";
import { fetchDeployApi } from "redux/actions";
import DeployBtnComponent from "../components/DeployBtn";

const mapDispatchToProps = (dispatch) => {
    return {
        onBtnClick: () => {
            dispatch(fetchDeployApi(reqData))
        }
    }
}

let reqData = [];

const mapStateToProps = (state) => {
    if (Object.keys(state.deploy.allList).length !== 0) {
        console.log('DeployMs: ', state.deploy)
        reqData = [];
        state.deploy.allList.newObj.data.forEach(_item => {
            if (_item.checkFlag) {
                reqData.push({
                    "serviceId": _item.serviceId,
                    "deploymentId": _item.deployment.deploymentId,
                    "strategy": "default",
                    "instancesCount": _item.deployment.instancesCount
                })
            }
        })
        console.log('reqData: ', reqData)
    }

    return {
        count: filterList(state.deploy)
    }
}

function filterList(data) {
    if (Object.keys(data.allList).length !== 0) {
        if (data.tab === 'n') {
            let count = 0;
            data.allList.newObj.data.forEach(_item => {
                if (_item.checkFlag) {
                    count++;
                }
            })
            return count;
        } else {
            let count = 0;
            data.allList.updateObj.data.forEach(_item => {
                if (_item.checkFlag) {
                    count++;
                }
            })
            return count;
        }
    }
}

const DeployMs = connect(
    mapStateToProps,
    mapDispatchToProps
)(DeployBtnComponent)

export default DeployMs;