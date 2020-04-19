import React, { PureComponent } from "react";
import { connect } from "react-redux";
import SrollDashboard from "./SrollDashboard";
import { fetchCurrentUser } from "src/action";

class ScrollableConatiner extends PureComponent {
    render() {
        return <SrollDashboard {...this.props} />;
    }
}

const mapStateToProps = ({ }) => {
    return {};
};

export default connect(
    mapStateToProps,
    { fetchCurrentUser }
)(ScrollableConatiner);
