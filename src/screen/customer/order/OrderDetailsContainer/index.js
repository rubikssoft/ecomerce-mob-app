import React, { PureComponent } from "react";
import { connect } from "react-redux";
import OrderDetails from "./OrderDetails";
import { fetchCurrentUser } from "src/action";

class OrderDetailsContainer extends PureComponent {
    render() {
        return <OrderDetails {...this.props} />;
    }
}

const mapStateToProps = ({ }) => {
    return {};
};

export default connect(
    mapStateToProps,
    { fetchCurrentUser }
)(OrderDetailsContainer);
