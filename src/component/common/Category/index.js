import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text,Icon } from 'native-base';
import { StyleSheet, TouchableOpacity } from 'react-native'
import SubCategory from './SubCategory'
import ItemList from '../ItemList'

const items = [
    {
        id: 1,
        name: 'Rice 1',
        category: 'Raice',
        price: 50,
        unit: ['gm', 'kg'],

    },
    {
        id: 2,
        name: 'Rice 2',
        category: 'Raice',
        price: 20,
        unit: ['gm', 'kg'],

    },
    {
        id: 3,
        name: 'Rice 6',
        category: 'Raice',
        price: 20,
        unit: ['gm', 'kg'],

    },
    {
        id: 4,
        name: 'Rice 3',
        category: 'Raice',
        price: 20,
        unit: ['gm', 'kg'],

    },
    {
        id: 5,
        name: 'Rice 4',
        category: 'Raice',
        price: 20,
        unit: ['gm', 'kg'],

    }
]

function mapStateToProps(state) {
    return {

    };
}

class Index extends Component {
    constructor(props){
        super(props)
        this.state={
            categoryVisble:false
        }
        this.toggleSubCategory =this.toggleSubCategory.bind(this)
    }
    toggleSubCategory (){
        //console.log('toggle called')
        this.setState({categoryVisble:!this.state.categoryVisble})
    }
    render() {

        return (
            <View style={styles.categoryRow}>
                <View style={{ flexDirection:'row',alignItems:'center'}}>
                <Text style={styles.categoryName}>{this.props.data.name}</Text>
                <TouchableOpacity onPress={()=>this.toggleSubCategory()}>
                <Icon  name="arrow-down" style={{fontSize: 15,marginLeft:5}}/>
                </TouchableOpacity>
                
                </View>
                {this.state.categoryVisble && 
                <View>
                    <SubCategory data={this.props.data.subCategories}  style={{marginLeft:10}}/>
                    <ItemList items={items}/>
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
        marginLeft:10,
        marginBottom:5,
        
    }

});
export default connect(
    mapStateToProps,
)(Index);