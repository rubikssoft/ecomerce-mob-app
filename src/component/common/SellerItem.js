import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native'

import {
    Thumbnail, Card, CardItem, Body
} from 'native-base'

function mapStateToProps(state) {
    return {
        location: state.location.location
    };
}

class SellerItem extends Component {

    constructor(props) {
        super(props)
        //console.log(this.props.location);

    }
    render() {
        const { item } = this.props;
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('ItemList')}>
                <Card>
                    <CardItem>

                        <Body>

                            <View style={{ flexDirection: 'row' }} >
                                <Image
                                    source={{
                                        uri: "https://www.rubikssoft.com/assets/img/rubikssoft.jpeg"
                                    }}
                                    style={styles.sellerImage}
                                />
                                <View style={styles.itemBody}>
                                    <Text style={styles.name}>{item.name}</Text>
                                    <Text style={styles.place}>{item.place}</Text>
                                    <Text style={styles.category}>{item.category}</Text>
                                    <Text style={styles.phone}>{item.phone}</Text>
                                    <Text >{this.props.location.name}</Text>
                                </View>

                            </View>
                        </Body>

                    </CardItem>

                </Card>

            </TouchableOpacity>

        );
    }
}

const styles = StyleSheet.create({
    sellerItem: {
        flex: 0.5,
        borderColor: '#000',
        borderWidth: 0.3,
        padding: 10
    }, sellerImage: {
        width: 100,
        height: 100,
        flex: 0.5
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    place: {
        fontSize: 13,
        color: '#000',
    }, category: {
        fontSize: 13,
        color: '#000',
    }, phone: {
        fontSize: 13,
        color: '#000',
    }, itemBody: {
        padding: 15
    }

})

export default connect(
    mapStateToProps,
)(SellerItem);