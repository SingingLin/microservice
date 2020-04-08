import { connect } from "react-redux";
import { fetchFiles } from "redux/actions";
import FilePickerComponent from "../components/FilePicker";

const mapDispatchToProps = (dispatch) => {
    return {
        onFileChange: (files) => {

            let filesArr = Array.prototype.slice.call(files);
            filesArr = filesArr.map((file, index) => {
                return { index: file.name + Date.now() + index, file }
            })

            dispatch(fetchFiles(filesArr))
        }
    }
}

const SelectFiles = connect(
    null,
    mapDispatchToProps
)(FilePickerComponent)

export default SelectFiles;