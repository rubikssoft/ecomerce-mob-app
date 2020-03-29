import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Products from "./Products";
import { fetchCurrentUser } from "src/action";

class ProductsContainer extends PureComponent {
    render() {
        return <Products {...this.props} />;
    }
}

const mapStateToProps = ({ }) => {
    return {};
};

export default connect(
    mapStateToProps,
    { fetchCurrentUser }
)(ProductsContainer);
