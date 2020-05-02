import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Items from "./Items";


class ItemsContainer extends PureComponent {
    constructor(props) {
        super(props);



    }
    render() {
        return <Items {...this.props} />;
    }
}

const mapStateToProps = ({ }) => {
    return {};
};

export default connect(
    mapStateToProps
    ,
)(ItemsContainer);
