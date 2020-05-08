import React, { Component } from 'react';
import { connect } from 'react-redux';
import Headers from "../../../../component/Seller/Header";
import { Ionicons } from '@expo/vector-icons';
import {
    Container,
    View,
    Text,
    Content,
    List,
    ListItem,
    Right
} from 'native-base'

import {
    Dimensions, TouchableOpacity, StyleSheet
} from 'react-native';

let { height } = Dimensions.get("window");

const styles = StyleSheet.create({
    listButton: {
        height: 50,
        marginLeft: 10,

        flex: 1,
        alignItems: 'flex-start',
        flexDirection: 'row'
    },
    optionHeading: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000'
    },
    optionSubHeading: {
        fontSize: 12,
        color: '#000'
    },
    buttonInfo: {
        flexDirection: 'column',
        flex: 0.9
    },
    buttonNav: {
        textAlign: 'right',
        alignItems: 'flex-end',
        flex: 0.1
    }
})

class ChooseMethod extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Container style={{ backgroundColor: "white" }}>
                <Headers leftmenu={{ path: 'SellerDashboard', icon: 'md-arrow-dropleft' }} routes={this.props.navigation} locationSelect={true} activeSellerView={false} {...this.props} />
                <View
                    style={{
                        height: height - 10,
                        marginTop: 10
                    }}
                >
                    <Content>
                        <List>
                            <ListItem>
                                <TouchableOpacity style={styles.listButton} onPress={() => this.props.navigation.navigate('CategoryChooser')}>
                                    <View style={styles.buttonInfo}>
                                        <Text style={styles.optionHeading}> Product Template</Text>
                                        <Text style={styles.optionSubHeading}> Create with pre-defined product template</Text>
                                    </View>
                                    <Right style={styles.buttonNav}>
                                        <Ionicons name="md-arrow-round-forward" size={28} color="green" />
                                    </Right>


                                </TouchableOpacity>

                            </ListItem>
                            {/* <ListItem>
                                <TouchableOpacity style={styles.listButton} onPress={() => this.props.navigation.navigate('CustomProduct')}>
                                    <View style={styles.buttonInfo}>
                                        <Text style={styles.optionHeading}>Custom Product</Text>
                                        <Text style={styles.optionSubHeading}>Create your own custom product </Text>
                                    </View>
                                    <Right style={styles.buttonNav}>
                                        <Ionicons name="md-arrow-round-forward" size={28} color="green" />
                                    </Right>
                                </TouchableOpacity>

                            </ListItem> */}

                        </List>
                    </Content>

                </View>
            </Container>
        );
    }
}

const mapStateToProps = ({ }) => {
    return {};
};

export default connect(
    mapStateToProps,
)(ChooseMethod);