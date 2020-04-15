import { connect } from "react-redux";
import { getApiGetServices } from "redux/actions";
import DeployListComponent from "../components/DeployList";
import 'mock/deploy_data';

const mapDispatchToProps = (dispatch) => {
    return {
        onClicktest: () => {
            console.error('test')
            dispatch(getApiGetServices())
        }
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.msData.newList
    }
}

const DeployService = connect(
    mapStateToProps,
    mapDispatchToProps
)(DeployListComponent)

export default DeployService;