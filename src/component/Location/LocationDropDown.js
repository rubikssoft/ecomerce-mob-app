import React, { Component } from 'react';
import { connect } from 'react-redux';
import cities from './cities';
import SearchableDropdown from 'react-native-searchable-dropdown';
import {
    Text
} from 'react-native'
import { View } from 'native-base';
function mapStateToProps(state) {
    return {
        theme: state.theme

    };
}
class LocationDropDown extends Component {
    constructor() {
        super();

        this.state = {
            serverData: [],
            //Data Source for the SearchableDropdown
        };
    }
    render() {

        return (

            <View>
                <SearchableDropdown
                    onTextChange={text => console.log(text)}
                    //On text change listner on the searchable input
                    onItemSelect={item => alert(JSON.stringify(item))}
                    //onItemSelect called after the selection from the dropdown
                    containerStyle={{ padding: 5 }}
                    //suggestion container style
                    textInputStyle={{
                        //inserted text style
                        padding: 12,
                        borderWidth: 1,
                        borderColor: '#ccc',
                        backgroundColor: '#FAF7F6',
                    }}
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
                    }}
                    itemsContainerStyle={{
                        //items container style you can pass maxHeight
                        //to restrict the items dropdown hieght
                        maxHeight: '100%',
                    }}
                    items={cities}
                    //mapping of item array
                    defaultIndex={2}
                    //default selected item index
                    placeholder="Location"
                    //place holder for the search input
                    resetValue={true}
                    //reset textInput Value with true and false state
                    underlineColorAndroid="transparent"
                //To remove the underline from the android input
                />
            </View>
        );
    }
}

export default connect(
    mapStateToProps,
)(LocationDropDown);