import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setActiveSeller } from 'src/action';
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
    navigateToItemList(item) {
        this.props.navigation.navigate('ItemList');
        this.props.setActiveSeller(item)
    }
    render() {
        const { item, key } = this.props;
        console.log(item)
        return (
            <TouchableOpacity onPress={() => this.navigateToItemList(item)}>
                <Card style={{ height: 100 }}>
                    <CardItem>

                        <Body>

                            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                <Thumbnail
                                    source={{
                                        uri: item.img
                                    }}
                                    style={{ flex: 0.2 }}

                                />
                                <View style={styles.itemBody}>
                                    <Text style={styles.name}>{key} {item.name}</Text>
                                    <Text style={styles.place}>{item.place}</Text>
                                    <Text style={styles.category}>{item.category}</Text>
                                    <Text style={styles.phone}>{item.phone}</Text>
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
        padding: 3
    }, sellerImage: {
        width: 100,
        height: 100,
        flex: 0.4,
        borderRadius: 10
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
    },
    titleChange: {
        color: '#fff', fontWeight: 'bold', textAlign: 'center', fontSize: 12
    }

})

export default connect(
    mapStateToProps, { setActiveSeller }
)(SellerItem);