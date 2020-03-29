import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Seller from "./Seller";
import { fetchCurrentUser } from "src/action";

class SellerContainer extends PureComponent {
    render() {
        return <Seller {...this.props} />;
    }
}

const mapStateToProps = ({ }) => {
    return {};
};

export default connect(
    mapStateToProps,
    { fetchCurrentUser }
)(SellerContainer);
