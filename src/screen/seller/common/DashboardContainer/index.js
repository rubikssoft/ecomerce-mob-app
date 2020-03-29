import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import { fetchCurrentUser } from "src/action";

class DashboardContainer extends PureComponent {
    render() {
        return <Dashboard {...this.props} />;
    }
}

const mapStateToProps = ({ }) => {
    return {};
};

export default connect(
    mapStateToProps,
    { fetchCurrentUser }
)(DashboardContainer);
