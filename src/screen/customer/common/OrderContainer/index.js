import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Order from "./Order";
import { fetchCurrentUser } from "src/action";

class OrderContainer extends PureComponent {
    render() {
        return <Order {...this.props} />;
    }
}

const mapStateToProps = ({ }) => {
    return {};
};

export default connect(
    mapStateToProps,
    { fetchCurrentUser }
)(OrderContainer);
