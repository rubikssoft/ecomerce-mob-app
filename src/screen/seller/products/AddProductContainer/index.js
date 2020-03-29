import React, { PureComponent } from "react";
import { connect } from "react-redux";
import AddProduct from "./AddProduct";
import { fetchCurrentUser } from "src/action";

class AddProductContainer extends PureComponent {
    render() {
        return <AddProduct {...this.props} />;
    }
}

const mapStateToProps = ({ }) => {
    return {};
};

export default connect(
    mapStateToProps,
    { fetchCurrentUser }
)(AddProductContainer);
