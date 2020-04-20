import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import {
    View,
    Text,
    Right
} from 'native-base'
import { StyleSheet, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
    titleColumn: {
        flex: 0.5, color: '#fff', fontWeight: 'bold', textAlign: 'center', padding: 5, textAlign: 'center'
    }, button: {

        width: 100,
        borderColor: '#000',
        padding: 10,
        borderWidth: 0.5,
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center'


    },
    buttonRight: {
        alignItems: 'center',
        position: 'absolute', right: 5, bottom: 5
    },
    buttontext: {
        fontSize: 15,
        paddingLeft: 3,
        color: '#fff'
    }
})

export class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            edit: false
        }
    }
    render() {

        const { edit } = this.props;

        return (
            <View>
                <View style={{ flex: 1, flexDirection: 'row', height: 50, padding: 5, alignItems: 'flex-end' }}>
                    <View style={styles.buttonRight}>
                        {!edit &&
                            <FontAwesome.Button name="edit" backgroundColor="#3b5998" style={[styles.button]} onPress={() => this.props.changeEditStatus()}>
                                <Text style={[styles.buttontext]}>
                                    Edit
                                </Text>
                            </FontAwesome.Button>
                        }

                        {edit &&
                            <FontAwesome.Button name="trash" backgroundColor="#3b5998" style={[styles.button]}>
                                <Text style={[styles.buttontext, { borderColor: 'red' }]}>
                                    Delete
                        </Text>
                            </FontAwesome.Button>
                        }


                    </View>



                    {edit &&
                        <FontAwesome.Button name="chevron-left" backgroundColor="#3b5998" style={[styles.button]} onPress={() => this.props.changeEditStatus()}>
                            <Text style={[styles.buttontext]}>
                                Back
                        </Text>
                        </FontAwesome.Button>
                    }
                </View>
                <View style={{ flexDirection: 'row', backgroundColor: '#013d6f', height: 50, color: '#fff', padding: 10 }}>
                    <Text style={[styles.titleColumn]}> Items </Text>
                    <Text style={[styles.titleColumn]}> Category </Text>
                    <Text style={[styles.titleColumn,]}> Price </Text>

                    {edit &&
                        <Text style={[styles.titleColumn,]}> Price </Text>
                    }


                </View>

            </View >





        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
