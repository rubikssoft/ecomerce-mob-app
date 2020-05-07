import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'native-base';
import Item from './SubCategoryItem'
import { ScrollView, TouchableOpacity, StyleSheet } from 'react-native'

function mapStateToProps(state) {
    return {

    };
}

const styles = StyleSheet.create({
    subcatbox: {

        height: 30,
        borderWidth: 0.5,
        borderColor: '#000',
        borderRadius: 5,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 13,
        color: '#fff'
    }
})
class SubCategory extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeCategory: ''
        }
        this.categorySelect = this.categorySelect.bind(this)
    }

    categorySelect(id) {
        const { activeCategory } = this.state
        var SubCategory = ''
        if (activeCategory !== id) {
            SubCategory = id
        }
        this.setState({ activeCategory: SubCategory })

        this.props.setSubCategory(SubCategory)

    }
    render() {
        const { data } = this.props;
        return (
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >

                <TouchableOpacity style={[styles.subcatbox, this.state.activeCategory === '' ? { backgroundColor: 'green' } : { backgroundColor: 'grey' }]} onPress={() => this.categorySelect('')}>
                    <Text style={styles.label}> All </Text>
                </TouchableOpacity>
                {
                    data.map((value, index) => (
                        <Item key={index} data={value} categorySelect={this.categorySelect} activeCategory={this.state.activeCategory} />
                    ))
                }

            </ScrollView >


        );
    }
}

export default connect(
    mapStateToProps,
)(SubCategory);