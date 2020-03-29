import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Orders from "./Orders";
import { fetchCurrentUser } from "src/action";

class OrdersContainer extends PureComponent {
    render() {
        return <Orders {...this.props} />;
    }
}

const mapStateToProps = ({ }) => {
    return {};
};

export default connect(
    mapStateToProps,
    { fetchCurrentUser }
)(OrdersContainer);
