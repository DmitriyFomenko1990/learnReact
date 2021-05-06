import {addPost} from "../../../../Redux/profile-reducer";
import InputForm from "./InputForm";
import {connect} from "react-redux";

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (Textpost) => dispatch(addPost(Textpost))
    }
};
const InputFormContainer = connect(null, mapDispatchToProps)(InputForm);

export default InputFormContainer;