import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Items from "./Items";
import { fetchCurrentUser } from "src/action";

class ItemsContainer extends PureComponent {
    render() {
        return <Items {...this.props} />;
    }
}

const mapStateToProps = ({ }) => {
    return {};
};

export default connect(
    mapStateToProps,
    { fetchCurrentUser }
)(ItemsContainer);
