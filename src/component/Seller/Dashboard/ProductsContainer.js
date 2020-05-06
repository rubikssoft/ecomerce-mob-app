import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Products/Item'
import Header from './Products/Header'
import FloatingButton from './Products/FloatingButton'
import { deleteProducts } from 'src/action/Seller/DashboardAction'
import {
    Container,
    View,
    Text
} from 'native-base'
import { ScrollView, RefreshControl } from 'react-native'

function mapStateToProps(state) {
    return {
        sellerData: state.sellerData,
        error: state.sellerError
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

    async deleteItems() {
        const seller_id = this.props.auth.user.id
        const { selected } = this.state
        await this.props.deleteProducts({ selected, seller_id }).then(e => {
            if (e) {
                this.props.loadProducts()
            }
        })
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
        const { products, loading, error } = this.props

        return (
            <Container style={{ flex: 1 }}>
                <ScrollView refreshControl={
                    <RefreshControl
                        refreshing={loading}
                        onRefresh={() => this.props.loadProducts()}
                        title="Loading..."
                    />
                }
                >
                    <Header edit={this.state.edit} changeEditStatus={() => this.changeEditStatus()} deleteItems={() => this.deleteItems()} />
                    {error.error && error.type == 'SELLER_DELETE_ERROR' &&
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text style={{ color: 'red', textAlign: 'center' }}>{error.msg}</Text>
                        </View>
                    }

                    {
                        products && products.map((value, key) => (
                            <Item item={value} {...this.props} key={key} edit={this.state.edit} checked={this._checkItemChecked(value)} _itemSelected={(item) => this._itemSelected(item)} fetchProductData={() => this.props.loadProducts()} />
                        ))
                    }






                </ScrollView>
            </Container >
        );
    }
}

export default connect(
    mapStateToProps, { deleteProducts }
)(ProductsContainer);