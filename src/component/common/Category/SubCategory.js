import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'native-base';
import Item from './SubCategoryItem'
import {ScrollView} from 'react-native'

function mapStateToProps(state) {
    return {

    };
}


class SubCategory extends Component {

    constructor(props){
        super(props)
        this.state = {
            activeCategory:''
        }
        this.categorySelect = this.categorySelect.bind(this)
    }
    
    categorySelect(name){
        this.setState({activeCategory:name})
    }
    render() {
        const { data } = this.props;
        return (
            <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} >


            {data.map((value,index)=>(
                <Item  key={index} data={value} categorySelect={this.categorySelect}  activeCategory={this.state.activeCategory}/>
            ))}
             
            </ScrollView>

     
        );
    }
}

export default connect(
    mapStateToProps,
)(SubCategory);