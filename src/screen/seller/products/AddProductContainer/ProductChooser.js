import React, { Component } from 'react';
import { connect } from 'react-redux';

import Headers from "../../../../component/Seller/Header";
import { Ionicons } from '@expo/vector-icons';
import UnitBox from './components/unit'
import { loadProducts, _addTemplateProduct } from '../../../../action/Seller/Products'

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
    CardItem,
    CheckBox
} from 'native-base'
import { TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native'
let { height } = Dimensions.get("window");

const styles = StyleSheet.create({
    listButton: {

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
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between'
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
    values: {
        flex: 0.5,
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center'
    }

})

function mapStateToProps(state) {
    return {
        sellerAddProducts: state.sellerAddProducts
    };
}


class ProductChooser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selected: []
        }
    }

    componentDidMount() {
        const category = this.props.navigation.state.params
        const subcategory = this.props.navigation.state.params
        this.props.loadProducts(category, subcategory)
    }

    _saveToServer() {
        const { selected } = this.state;
        const category = this.props.navigation.state.params
        const subcategory = this.props.navigation.state.params

        this.props._addTemplateProduct(category, subcategory, selected)
    }

    _addToSelected(item) {
        var { selected } = this.state;
        const index = selected.indexOf(item);
        if (index > -1) {
            selected.splice(index, 1);
        } else {
            selected.push(item)
        }

        this.setState({ selected: selected })

    }
    _checkItemChecked(val) {
        return this.state.selected.includes(val)

    }


    render() {

        const { products } = this.props.sellerAddProducts

        return (
            <Container style={{ backgroundColor: "white" }}>
                <Headers leftmenu={{ path: 'SubCategoryChooser', icon: 'md-arrow-dropleft' }} routes={this.props.navigation} locationSelect={true} activeSellerView={false} {...this.props} />
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
                                    <Text style={styles.optionHeading}>Step 3 </Text>
                                    <Text style={styles.optionSubHeading}>Select Products</Text>


                                </View>
                            </CardItem>
                        </Card>

                        <Separator />
                        <ScrollView>


                            <List>


                                {products.data.map((value, key) => (
                                    <ListItem key={key}>
                                        <TouchableOpacity style={styles.listButton} onPress={() => this._addToSelected(value.id)}>
                                            <View style={styles.buttonInfo}>
                                                <Text style={styles.values}> {value.name} </Text>
                                                <Text style={styles.values}> {value.price} </Text>
                                                <View style={[{ flexDirection: 'column', flex: 0.4 }]}>
                                                    {value.unit.map((val, index) => (
                                                        <UnitBox item={val} key={index} />
                                                        // <Text key={key}>{val.name}</Text>
                                                    ))}
                                                </View>
                                                <View style={[{ flexDirection: 'row', flex: 0.2 }]}>
                                                    <CheckBox checked={this._checkItemChecked(value.id)} onPress={() => this._addToSelected(value.id)} />
                                                </View>
                                            </View>



                                        </TouchableOpacity>

                                    </ListItem>
                                )


                                )}

                            </List>

                            {products.loading &&
                                <View>
                                    <Text>Loading</Text>
                                </View>
                            }


                        </ScrollView>

                    </Content>
                </View>

                <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0, paddingBottom: 50, backgroundColor: '#7f1925', height: 70, justifyContent: 'space-between' }}>


                    <View style={{ height: 60, flexDirection: 'row', padding: 10, alignItems: 'flex-end' }}>

                        <TouchableOpacity style={{ flex: 0.5, backgroundColor: '#fff', borderRadius: 5, alignItems: 'center', padding: 10, marginLeft: 'auto' }}>
                            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>ADD</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Container >
        );

    }
}

export default connect(
    mapStateToProps, { loadProducts, _addTemplateProduct }
)(ProductChooser);