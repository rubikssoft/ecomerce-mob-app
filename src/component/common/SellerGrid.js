import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import SellerItem from './SellerItem';
import { Row, Icon, Container } from 'native-base';
import SkeletonContent from "react-native-skeleton-content";


function mapStateToProps(state) {
    return {

    };
}



const styles = StyleSheet.create({
    sellerGrid: {
        margin: 0,
        flex: 1,
        flexDirection: 'column',
        alignContent: 'space-around'

    },
    refresh: {
        alignItems: 'center',
        marginTop: 30

    },
    center: {
        alignItems: 'center'
    }
})


class SellerGrid extends Component {
    render() {
        const { sellers, loading } = this.props
        return (
            <Container>

                <ScrollView>


                    {sellers.map((item, key) =>
                        <SellerItem item={item} key={key} {...this.props} />
                    )
                    }

                    {!sellers.length &&
                        <View style={styles.center}>
                            <Text>  no shopes found </Text>

                        </View>
                    }



                    <TouchableOpacity style={styles.refresh} onPress={() => this.props.fetchSellerData()}>
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
                                <Text>Load</Text>
                            </View>

                        </SkeletonContent>
                    </TouchableOpacity>

                </ScrollView>




            </Container>


        );
    }
}


export default connect(
    mapStateToProps,
)(SellerGrid);