import React, { PureComponent } from "react";
import { connect } from "react-redux";
import EditProduct from "./EditProduct";
import { fetchCurrentUser } from "src/action";

class EditProductContainer extends PureComponent {
    render() {
        return <EditProduct {...this.props} />;
    }
}

const mapStateToProps = ({ }) => {
    return {};
};

export default connect(
    mapStateToProps,
    { fetchCurrentUser }
)(EditProductContainer);
