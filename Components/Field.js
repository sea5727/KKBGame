import React, {Component} from 'react';
import { View , Text , StyleSheet} from 'react-native';

let styles = StyleSheet.create({
    draw : {
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : 'white',
        width : '20%',
        height : '40%',
    }
});

class Field extends Component{
     constructor(props){
         super(props);
     }
    render(){
        return(
            <View style={this.props.style}>
                <Text>Field</Text>
                <View style={styles.draw}><Text>K</Text></View>
            </View>
        );
    }
}

export default Field;