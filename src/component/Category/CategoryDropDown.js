import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import categories from './categories';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { setupcategory } from "src/action/CategoryAction";
import { loadSellers } from "src/action/LocationAction"
import { View, Button } from 'native-base';
function mapStateToProps(state) {
    return {
        category: state.category.category,
        location: state.location.location,

    };
}


class CategoriesDropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serverData: [],
            //Data Source for the SearchableDropdown
        };
    }
    handleChange(item) {
        this.props.setupcategory(item);
        var payload = {
            location: this.props.location,
            category: item,
            limit: 100,
            offset: 0
        }
        this.props.loadSellers(payload)
    }
    render() {

        return (

            <View style={styles.outerView}>


                <SearchableDropdown
                    onTextChange={text => console.log(text)}
                    //On text change listner on the searchable input
                    // onItemSelect={item => alert(JSON.stringify(item))}
                    onItemSelect={(item) => this.handleChange(item)}
                    //onItemSelect called after the selection from the dropdown
                    containerStyle={{ padding: 5 }}
                    //suggestion container style
                    textInputStyle={{
                        //inserted text style
                        padding: 12,
                        borderWidth: 1,
                        borderColor: '#ccc',
                        backgroundColor: this.props.bgcolor,
                        color: '#fff',
                        borderRadius: 10,
                        fontWeight: 'bold',
                        width: 150,
                        textAlign: 'center',
                        borderBottomColor: '#fff',
                        borderBottomWidth: 0.5,

                    }}
                    placeholderTextColor="#fff"

                    itemStyle={{
                        //single dropdown item style
                        padding: 10,
                        marginTop: 2,
                        backgroundColor: '#FAF9F8',
                        borderColor: '#bbb',
                        borderWidth: 1,

                    }}
                    itemTextStyle={{
                        //single dropdown item's text style
                        color: '#222',
                        textAlign: 'center'
                    }}
                    itemsContainerStyle={{
                        //items container style you can pass maxHeight
                        //to restrict the items dropdown hieght
                        maxHeight: 200,

                    }}
                    items={categories}
                    //mapping of item array
                    defaultIndex={this.props.category.id}
                    //default selected item index
                    placeholder="Category"
                    //place holder for the search input
                    resetValue={false}
                    //reset textInput Value with true and false state
                    underlineColorAndroid="transparent"
                //To remove the underline from the android input
                />



            </View >
        );
    }
}

export default connect(
    mapStateToProps, { setupcategory, loadSellers }
)(CategoriesDropDown);


const styles = StyleSheet.create({
    Button: {
        maxWidth: 300
    }
});