import React, {Component} from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import Field from '../Components/Field';
import KKB from '../Components/KKB';

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
        alignItems : 'center',
        justifyContent : 'center',
    },
    myField : {
        flex : 2,
        backgroundColor : 'blue',
        alignItems : 'center',
        justifyContent : 'center',
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
                <KKB style={styles.enemy}></KKB>
                <Field style={styles.enemyField}></Field>
                <Field style={styles.myField}></Field>
                <KKB style={styles.my}></KKB>
            </View>
        );
    }
}

export default GameScreen;
