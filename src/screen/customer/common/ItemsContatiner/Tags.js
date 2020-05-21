import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'native-base';
import theme from 'src/style/theme/default'

import { changeTag } from 'src/action/TagActions'

import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native'


const styles = StyleSheet.create({
    tagButtom: {
        borderRadius: 5,
        borderColor: '#fff',
        borderWidth: 0.6,
        padding: 5,
        height: 25,
        margin: 8
    },
    tagText: {
        fontSize: 12,
        color: '#fff'

    },
    active: {
        backgroundColor: theme.headerbg
    }
})

function mapStateToProps(state) {
    return {
        activeTag:state.tag.activeTag,
        tags:state.common.tags,
        seller:state.seller
    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

class Tags extends Component {

    constructor(props) {

        super(props)



    }
    render() {
        const { activeTag,tags } = this.props;

        return (
            <View style={{ height: 40, backgroundColor: 'grey', flexDirection: 'row' }}>
                <ScrollView horizontal={true}
                    decelerationRate={0}
                    snapToInterval={200} //your element width
                    snapToAlignment={"center"}>
                      <TouchableOpacity style={[styles.tagButtom, activeTag == '' && styles.active]} onPress={()=>this.props.changeTag('')} >
                            <Text style={styles.tagText}> All </Text>
                        </TouchableOpacity>
                      {tags.map((value, key) => (
                        <TouchableOpacity style={[styles.tagButtom, activeTag == value && styles.active]} key={key} onPress={()=>this.props.changeTag(value)} >
                            <Text style={styles.tagText}>{value}</Text>
                        </TouchableOpacity>
                    ))

                    }

                </ScrollView>


            </View>
        );
    }
}

export default connect(
    mapStateToProps, { changeTag }
)(Tags);