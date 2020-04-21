import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Products/Item'
import Header from './Products/Header'
import FloatingButton from './Products/FloatingButton'
import { loadProducts, deleteProducts } from 'src/action/Seller/Dashboard'
import {
    Container,
    View,
    Text
} from 'native-base'
import { ScrollView, RefreshControl } from 'react-native'

function mapStateToProps(state) {
    return {
        sellerData: state.sellerData
    };
}



class ProductsContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selected: [],
            edit: false,

        }
        this.changeEditStatus = this.changeEditStatus.bind(this)
    }

    changeEditStatus() {
        this.setState({ edit: !this.state.edit })
    }

    _checkItemChecked(val) {
        return this.state.selected.includes(val.id)

    }

    deleteItems() {
        const { selected } = this.state
        this.props.deleteProducts(selected)
    }

    _itemSelected(item) {
        var { selected } = this.state;
        const index = selected.indexOf(item);
        if (index > -1) {
            selected.splice(index, 1);
        } else {
            selected.push(item)
        }

        this.setState({ selected: selected })
    }



    render() {
        const products = this.props.sellerData.products

        return (
            <Container style={{ flex: 1 }}>
                <ScrollView refreshControl={
                    <RefreshControl
                        refreshing={this.props.sellerData.products.loading}
                        onRefresh={() => this.props.loadProducts()}
                        title="Loading..."
                    />
                }
                >
                    <Header edit={this.state.edit} changeEditStatus={() => this.changeEditStatus()} deleteItems={() => this.deleteItems()} />

                    {
                        products.data && products.data.map((value, key) => (
                            <Item item={value} {...this.props} key={key} edit={this.state.edit} checked={this._checkItemChecked(value)} _itemSelected={(item) => this._itemSelected(item)} />
                        ))
                    }






                </ScrollView>
            </Container >
        );
    }
}

export default connect(
    mapStateToProps, { loadProducts, deleteProducts }
)(ProductsContainer);