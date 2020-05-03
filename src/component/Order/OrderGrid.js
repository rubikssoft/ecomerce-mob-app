import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Container, Icon, Spinner } from 'native-base'
import Item from './OrderGridItems'
import { ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import SkeletonContent from "react-native-skeleton-content";



const styles = StyleSheet.create({
    refresh: {
        alignItems: 'center',
        marginTop: 30

    },
    center: {
        alignItems: 'center'
    }
})
class OrderGrid extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        const { orders, loading } = this.props

        return (
            <Container>
                <ScrollView>
                    {orders && orders.map((item, key) =>
                        <Item order={item}  {...this.props} key={key} />
                    )

                    }

                    {!orders.length &&
                        <View style={styles.center}>
                            <Text>  no order found</Text>

                        </View>
                    }



                    <TouchableOpacity style={styles.refresh} onPress={() => this.props.fetchOrderData()}>
                        <SkeletonContent
                            containerStyle={{ flex: 1 }}
                            isLoading={loading}
                            layout={[
                                { key: "1", width: 600, height: 80, marginBottom: 6 },
                                { key: "2", width: 600, height: 80, marginBottom: 6 },
                                { key: "3", width: 600, height: 80, marginBottom: 6 },
                                { key: "4", width: 600, height: 80, marginBottom: 6 },
                                { key: "5", width: 600, height: 80, marginBottom: 6 },


                            ]}
                        >
                            <View style={[styles.center]}>
                                <Icon name="md-refresh" />
                                <Text>Refresh</Text>
                            </View>

                        </SkeletonContent>
                    </TouchableOpacity>

                </ScrollView>
            </Container>


        )
    }
}

const mapStateToProps = (state) => ({


})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(OrderGrid)
