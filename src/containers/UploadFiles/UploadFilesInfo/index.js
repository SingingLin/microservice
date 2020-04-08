import { connect } from "react-redux";
import FileCardComponent from "../components/FileCard";

const mapStateToProps = (state) => {
    return {
        files: state.files
    }
}

const UPloadFilesInfo = connect(
    mapStateToProps,
    null
)(FileCardComponent)

export default UPloadFilesInfo;