import React, {Component} from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container : {
       flex: 1, 
    },
    enemy : {
        flex : 1,
        flexDirection : 'row',
    },
    enemyField : {
        flex : 2,
        backgroundColor : 'red',
    },
    myField : {
        flex : 2,
        backgroundColor : 'blue',
    },
    my: {
        flex : 1,
        flexDirection : 'row',
    },

});
class GameScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <View style={styles.enemy}>
                    <View><Text>적_가위</Text></View>
                    <View><Text>적_바위</Text></View>
                    <View><Text>적_보</Text></View>
                </View>
                <View style={styles.enemyField}></View>
                <View style={styles.myField}></View>
                <View style={styles.my}>
                    <View><Text>나_가위</Text></View>
                    <View><Text>나_바위</Text></View>
                    <View><Text>나_보</Text></View>
                </View>

            </View>
        );
    }
}

export default GameScreen;
