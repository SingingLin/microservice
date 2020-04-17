import React from 'react';
import { connect } from "react-redux";
// import { deployTab } from "redux/actions";
import DeployStrategy from "../components/DeployStrategy";

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onTabClick: (status) => {
//             dispatch(deployTab(status))
//         }
//     }
// }

const mapStateToProps = (state) => {
    console.log('DeployService state: ', state)
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
    // mapDispatchToProps
)(DeployStrategy)

export default DeployMs;