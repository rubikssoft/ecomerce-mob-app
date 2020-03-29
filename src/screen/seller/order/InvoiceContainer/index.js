import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Invoice from "./Invoice";
import { fetchCurrentUser } from "src/action";

class InvoiceContainer extends PureComponent {
    render() {
        return <Invoice {...this.props} />;
    }
}

const mapStateToProps = ({ }) => {
    return {};
};

export default connect(
    mapStateToProps,
    { fetchCurrentUser }
)(InvoiceContainer);
