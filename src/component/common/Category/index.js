import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Icon } from 'native-base';
import { StyleSheet, TouchableOpacity } from 'react-native'
import SubCategory from './SubCategory'
import ItemList from '../ItemList'

import { loadProducts } from "src/action/CategoryAction";


function mapStateToProps(state) {
    return {

    };
}

class Index extends Component {



    constructor(props) {
        super(props)
        this.state = {
            categoryVisble: false,
            itemsLoading: true,
            subcategory_id: '',
            items: []
        }

        this.toggleSubCategory = this.toggleSubCategory.bind(this)
    }

    async  _loadItems() {
        const { seller, data } = this.props;
        const { subcategory_id, itemsLoading } = this.state
        const seller_id = seller.activeSeller.seller_id
        const category_id = data.id

        var post_data = {
            seller_id, category_id
        }
        if (subcategory_id != '')
            var post_data = {
                ...post_data,
                subcategory_id

            }


        await this.props.loadProducts(post_data).then(e => {
            this.setState({ items: e, itemsLoading: false })
        })

    }
    async setSubCategory(subcategory_id) {

        console.log(subcategory_id)
        await this.setState({ subcategory_id: subcategory_id })
        this._loadItems()

    }
    toggleSubCategory() {
        //console.log('toggle called')
        this.setState({ categoryVisble: !this.state.categoryVisble })
        this._loadItems()
    }
    render() {
        const { items, itemsLoading } = this.state
        return (
            <View style={styles.categoryRow}>
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between' }} onPress={() => this.toggleSubCategory()} >
                    <Text style={styles.categoryName}>{this.props.data.name}</Text>



                    <Icon name={!this.state.categoryVisble ? "arrow-down" : "arrow-up"} style={[styles.downarrow, { fontSize: 15, marginLeft: 5 }]} />


                </TouchableOpacity>
                {this.state.categoryVisble &&
                    <View>
                        <SubCategory data={this.props.data.subcategory} setSubCategory={(e) => this.setSubCategory(e)} style={{ marginLeft: 10 }} />

                        {!itemsLoading && <ItemList items={items} />}
                    </View>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    categoryRow: {
        marginTop: 10,
        marginBottom: 10,

        flexDirection: 'column',


    },
    categoryName: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#000',
        marginLeft: 10,
        marginBottom: 5,
        textTransform: 'uppercase'

    },
    downarrow: {
        marginRight: 10
    }

});
export default connect(
    mapStateToProps, { loadProducts }
)(Index);