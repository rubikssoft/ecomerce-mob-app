import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Cart from "./Cart";


class CartContainer extends PureComponent {
    constructor(props){
        super(props);
        
       

    }
    render() {
        return <Cart {...this.props} />;
    }
}

const mapStateToProps = ({ }) => {
    return {};
};

export default connect(
    mapStateToProps
    ,
)(CartContainer);
