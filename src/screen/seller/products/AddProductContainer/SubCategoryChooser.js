import React, { Component } from 'react';
import { connect } from 'react-redux';

import Headers from "../../../../component/Seller/Header";
import { Ionicons } from '@expo/vector-icons';

import { loadSubCategories } from '../../../../action/Seller/Products'

import {
    View,
    Text,
    List,
    ListItem,
    Separator,
    Container,
    Content,
    Right,
    Card,
    CardItem
} from 'native-base'
import { TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native'
let { height } = Dimensions.get("window");

const styles = StyleSheet.create({
    listButton: {
        height: 20,
        marginLeft: 10,

        flex: 1,
        alignItems: 'flex-start',
        flexDirection: 'row'
    },
    optionHeading: {
        fontSize: 12,
        fontWeight: 'bold',
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
    },
    headingCardItem: {
        flex: 1
    },
    headerButtonInfo: {
        flexDirection: 'column',
        marginLeft: 10,

    }, optionSubHeading: {
        fontSize: 12,
        color: '#000'
    },

})

function mapStateToProps(state) {
    return {
        sellerAddProducts: state.sellerAddProducts
    };
}


class SubCategoryChooser extends Component {

    componentDidMount() {
        const { category } = this.props.navigation.state.params
        this.props.loadSubCategories(category)
    }

    render() {

        const { subcategories } = this.props.sellerAddProducts
        const { category } = this.props.navigation.state.params
        return (
            <Container style={{ backgroundColor: "white" }}>
                <Headers leftmenu={{ path: 'CategoryChooser', icon: 'md-arrow-dropleft' }} routes={this.props.navigation} locationSelect={true} activeSellerView={false} {...this.props} />
                <View
                    style={{
                        height: height - 10,
                        marginTop: 10
                    }}
                >
                    <Content>

                        <Card style={styles.headingCard}>
                            <CardItem style={styles.headingCardItem}>
                                <View style={styles.headerButtonInfo}>
                                    <Text style={styles.optionHeading}>Step 2 </Text>
                                    <Text style={styles.optionSubHeading}>Select a Sub-Category</Text>

                                </View>
                            </CardItem>
                        </Card>

                        <Separator />
                        <ScrollView>


                            <List>


                                {subcategories.data.map((value, key) => (
                                    <ListItem key={key}>
                                        <TouchableOpacity style={styles.listButton} onPress={() => this.props.navigation.navigate('ProductChooser', {
                                            category: category,
                                            subcategory: value
                                        })}>
                                            <View style={styles.buttonInfo}>
                                                <Text style={styles.optionHeading}> {value.name}</Text>
                                            </View>
                                            <Right style={styles.buttonNav}>
                                                <Ionicons name="md-arrow-round-forward" size={20} color="green" />
                                            </Right>


                                        </TouchableOpacity>

                                    </ListItem>
                                )


                                )}

                            </List>

                            {subcategories.loading &&
                                <View>
                                    <Text>Loading</Text>
                                </View>
                            }


                        </ScrollView>

                    </Content>
                </View>
            </Container >
        );

    }
}

export default connect(
    mapStateToProps, { loadSubCategories }
)(SubCategoryChooser);