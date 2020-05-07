import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, TouchableOpacity, Image, Modal, TouchableWithoutFeedback } from 'react-native'
import { View, Text, CheckBox, Card, CardItem, Body, Button, Thumbnail } from 'native-base'
import EditProduct from './Edit'
class Item extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalView: false
        }
    }
    modalToggle() {
        this.setState({ modalView: !this.state.modalView })
    }
    render() {
        const { item, edit, checked } = this.props;
        return (

            <View>

                <TouchableOpacity

                    style={styles.item} onPress={() => this.modalToggle()}>

                    <View style={[styles.column, { flex: 0.7, flexDirection: "row", alignItems: 'center', justifyContent: 'flex-start', fontSize: 10 }]}>

                        <Thumbnail source={{ uri: item.img }} />
                        <Text style={{ fontWeight: 'bold', textTransform: 'uppercase' }}> {item.name}

                        </Text>
                    </View>

                    <Text style={[styles.column]}> {item.category}/{item.sub_category}</Text>

                    <Text style={[styles.column, { fontWeight: 'bold' }]}> {item.price} </Text>
                    {edit &&
                        <View style={[styles.column, styles.checkbox, { flex: 0.3 }]}>
                            <CheckBox checked={checked} onPress={(val) => this.props._itemSelected(item.id)} />
                        </View>


                    }
                </TouchableOpacity >
                {/* <View>{this.addProductModal()}
                </View> */}
                <View>
                    {this.editProductModal()}
                </View>

            </View>

        );
    }

    editProductModal() {
        const { item } = this.props
        return (
            <Modal
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1
                }}
                visible={this.state.modalView}
                transparent={true}
                onRequestClose={() => this.modalToggle()}
            >
                <TouchableWithoutFeedback
                    style={{ flex: 1 }}
                    onPress={() => {
                        this.modalToggle();
                    }}
                >

                    <View style={{ flex: 1, backgroundColor: "#0007" }}>
                        <View

                            onStartShouldSetResponder={() => {
                                return true;
                            }}
                        >
                            <Card
                                style={{
                                    marginTop: '20%',
                                    marginLeft: 20,
                                    marginRight: 20
                                }}
                            >
                                <CardItem header>
                                    <Body>

                                        {/* <View><Text>Edit modal</Text></View> */}

                                        <EditProduct
                                            data={item}

                                            closeEditModal={() => {
                                                this.setState({ modalView: false })
                                                this.props.fetchProductData()

                                            }} />
                                    </Body>
                                </CardItem>
                            </Card>
                        </View>
                    </View>

                </TouchableWithoutFeedback>
            </Modal>
        );
    }

}


const styles = StyleSheet.create({

    item: {
        height: 100,
        borderBottomColor: '#000',
        borderBottomWidth: 0.5,
        padding: 4,
        flexDirection: 'row',
        paddingBottom: 5,
        alignItems: 'center'
    },
    column: {
        flex: 0.5, color: '#fff', textAlign: 'center', padding: 5, textAlign: 'center', color: '#000', fontSize: 14
    },
    checkbox: {
        alignItems: 'center'
    }
})

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Item)
