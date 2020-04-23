import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dimensions, TouchableOpacity, StyleSheet } from 'react-native'
import SkeletonContent from "react-native-skeleton-content";

import {
    Container,
    View,
    Card,
    CardItem,
    Text,
    Content
} from 'native-base'

import Headers from "../../../component/Seller/Header";

import CustomerCard from "./components/CustomerCard"
import OrderProducts from "./components/OrderProducts"

let { width } = Dimensions.get("window");


const styles = StyleSheet.create({
    normalText: {
        fontSize: 12,
        color: '#000'
    },
    bigText: {
        fontSize: 18,
        color: '#000'
    }
})


class OrderDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            order: []
        }
    }

    componentDidMount() {
        this.setState({
            order: this.props.navigation.state.params.order,
            loading: false
        })
    }

    render() {
        const { order, loading } = this.state
        console.log(order)
        return (



            <Container style={{ backgroundColor: "white" }}>
                <Headers routes={this.props.navigation} leftmenu={{ path: 'SellerDashobard', icon: 'md-arrow-dropleft' }} {...this.props} />





                <SkeletonContent
                    containerStyle={{ flex: 1 }}
                    isLoading={loading}
                    layout={[
                        { key: "id1", width: width, height: 100, marginBottom: 6 },
                        { key: "id2", width: width, height: 100, marginBottom: 6 },
                        { key: "id3", width: width, height: 100, marginBottom: 6 },
                        { key: "id4", width: width, height: 100, marginBottom: 6 },

                    ]}
                >


                    <CustomerCard order={order} />

                    <OrderProducts order={order}  {...this.props} />






                    <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0, backgroundColor: '#7f1925', height: 70, justifyContent: 'space-between' }}>


                        <View style={{ height: 60, flexDirection: 'row', padding: 10, alignItems: 'center', justifyContent: 'space-between' }}>
                            <TouchableOpacity style={{ flex: 0.5, backgroundColor: '#fff', borderRadius: 5, alignItems: 'center', height: 40, paddingTop: 10, margin: 5 }}  >
                                <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'red' }}>Cancel</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ flex: 0.5, backgroundColor: '#fff', borderRadius: 5, alignItems: 'center', height: 40, paddingTop: 10, margin: 5 }}  >
                                <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'green' }}>Ready</Text>
                            </TouchableOpacity>

                        </View>


                    </View>
                </SkeletonContent>

            </Container>

        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails)
