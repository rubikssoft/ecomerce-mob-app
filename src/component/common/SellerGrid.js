import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

import SellerItem from './SellerItem';
import { Row } from 'native-base';
import SkeletonContent from "react-native-skeleton-content";


function mapStateToProps(state) {
    return {
        sellers: state.seller.sellers,
        loading: state.seller.sellerLoading,
    };
}



const styles = StyleSheet.create({
    sellerGrid: {
        margin: 0,
        flex: 1,
        flexDirection: 'column',
        alignContent: 'space-around'

    }
})


class SellerGrid extends Component {
    render() {

        return (
            <View style={styles.sellerGrid}>

                <SkeletonContent
                    containerStyle={{ flex: 1 }}
                    isLoading={this.props.loading}
                    layout={[
                        { key: "1", width: 600, height: 100, marginBottom: 6 },
                        { key: "2", width: 600, height: 100, marginBottom: 6 },
                        { key: "3", width: 600, height: 100, marginBottom: 6 },
                        { key: "4", width: 600, height: 100, marginBottom: 6 },
                        { key: "5", width: 600, height: 100, marginBottom: 6 },
                        { key: "6", width: 600, height: 100, marginBottom: 6 },
                        { key: "7", width: 600, height: 100, marginBottom: 6 },
                        { key: "8", width: 600, height: 100, marginBottom: 6 },

                    ]}
                >
                    <ScrollView>


                        {this.props.sellers.map((item, key) =>
                            <SellerItem item={item} key={key} {...this.props} />
                        )
                        }
                    </ScrollView>

                </SkeletonContent>


            </View>


        );
    }
}


export default connect(
    mapStateToProps,
)(SellerGrid);