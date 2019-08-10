import React, {Component} from 'react';
import { View , Text, StyleSheet } from 'react-native';
import { Ionicons , FontAwesome } from '@expo/vector-icons';

const styles = StyleSheet.create({

});

class KKB extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <View style={this.props.style}>
                <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                    <FontAwesome size={120}name="hand-rock-o"/>
                </View>
                <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                    <FontAwesome size={120}name="hand-scissors-o"/>
                </View>
                <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                    <FontAwesome size={120}name="hand-paper-o"/>
                </View>
            </View>
        );
    }
}

export default KKB;