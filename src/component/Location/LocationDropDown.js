import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import cities from './cities';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { setuplocation, loadSellers } from "src/action/LocationAction";
import { View, Button } from 'native-base';
function mapStateToProps(state) {
    return {
        location: state.location.location,
        category: state.category.category,
        common: state.common

    };
}
class LocationDropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serverData: [],
            //Data Source for the SearchableDropdown
        };
    }

    handleChange(item) {
        this.props.setuplocation(item);
        var payload = {
            location: item,
            category: this.props.category,
            limit: 100,
            offset: 0
        }
        //   this.props.loadSellers(payload)
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
                    items={this.props.common.locations}
                    //mapping of item array
                    defaultIndex={this.props.location.id}
                    //default selected item index
                    placeholder="Location"
                    //place holder for the search input
                    resetValue={false}
                    //reset textInput Value with true and false state
                    underlineColorAndroid="transparent"
                //To remove the underline from the android input
                />

                {/* <Button primary={true} style={styles.Button}>

                   
                </Button> */}


            </View >
        );
    }
}

export default connect(
    mapStateToProps, { setuplocation, loadSellers }
)(LocationDropDown);


const styles = StyleSheet.create({
    Button: {
        maxWidth: 300
    }
});