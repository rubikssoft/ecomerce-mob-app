import React, { PureComponent } from "react";
import { connect } from "react-redux";
import AddProduct from "./AddProduct";
import ChooseMethod from "./ChooseMethod"
// import { fetchCurrentUser } from "src/action";

class AddProductContainer extends PureComponent {
    render() {
        return <ChooseMethod {...this.props} />;
    }
}

const mapStateToProps = ({ }) => {
    return {};
};

export default connect(
    mapStateToProps,
)(AddProductContainer);
