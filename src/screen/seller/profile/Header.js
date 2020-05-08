import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Left, Button, Icon, Body, Right } from 'native-base'
import theme from 'src/style/theme/default'
function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

class ProfileHeader extends Component {
    render() {
        return (
            <Header style={{ backgroundColor: theme.headerbg, padding: 5, height: 50, paddingBottom: 20 }} androidStatusBarColor={theme.headerbg}>

                {!this.props.FirstTime &&
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.navigate('SellerDashboard')}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                }
                <Body></Body>
                <Right>

                </Right>
            </Header>

        );
    }
}

export default connect(
    mapStateToProps,
)(ProfileHeader);