import React, { PureComponent } from "react";
import { connect } from "react-redux";
import ProductDetails from "./ProductDetails";
import { fetchCurrentUser } from "src/action";

class ProductDetailsContainer extends PureComponent {
    render() {
        return <ProductDetails {...this.props} />;
    }
}

const mapStateToProps = ({ }) => {
    return {};
};

export default connect(
    mapStateToProps,
    { fetchCurrentUser }
)(ProductDetailsContainer);
