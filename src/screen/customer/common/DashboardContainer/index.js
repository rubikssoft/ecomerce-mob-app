import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import { fetchCurrentUser } from "src/action";
import { StyleSheet, Text, SafeAreaView } from 'react-native';

class DashboardContainer extends PureComponent {
    render() {
        return (
            // <SafeAreaView style={styles.container}>
            <Dashboard {...this.props} />
            // </SafeAreaView>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
const mapStateToProps = ({ }) => {
    return {};
};

export default connect(
    mapStateToProps,
    { fetchCurrentUser }
)(DashboardContainer);
