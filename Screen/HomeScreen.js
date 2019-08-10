import React, {Component} from 'react';
import {Alert, StyleSheet, View , Button, Text} from 'react-native';
import MyUtil from '../Utils/Utility'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent : 'center',
    alignItems : 'center',
  },
  topContainer : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
  },
  btnContainer : {
    width : "100%",
    padding : 10,
    paddingHorizontal : "15%",
    backgroundColor : "yellow",
  }
})
class HomeScreen extends Component{
  constructor(props){
    super(props);
  }
  
  async _onPress(targetId){
    console.log('===============================')
    console.log('버튼을 눌렀습니다 ', targetId);

    if (targetId == 'btnStart') {
      const { navigate } = this.props.navigation;
      let nickname = '';
      let exist;
      exist = await MyUtil.IsConfExist();
      if (exist) {
        nickname = await MyUtil.IsNicknameExist();
      }
      if(nickname.length > 0){
        navigate('Account');
      } 
      else {
        navigate('Game');
      }
    }
    else if (targetId == 'btnAccount') {
      const { navigate } = this.props.navigation;
      navigate('Account');
    }
    else if (targetId == 'btnClear'){
      await MyUtil.DeleteConfFile();

    }
    else {
      Alert.alert(targetId);
    }


  }
  render() {
    
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
            <Text>Main Image Here</Text>
        </View>

        <View style={styles.btnContainer}>
          <Button onPress={this._onPress.bind(this, "btnStart")}
            title="START!"></Button>          
        </View>
        <View style={styles.btnContainer}>
          <Button onPress={this._onPress.bind(this, "btnAccount")}
            color="purple"
            title="이름 변경"></Button>          
        </View>
        <View style={styles.btnContainer}>
          <Button onPress={this._onPress.bind(this, "btnClear")}
            title="정보 초기화"></Button>          
        </View>
        <View style={styles.btnContainer}>
          <Button onPress={this._onPress.bind(this, "btnEnd")}
            color="red"
            title="END"></Button>          
        </View>
      </View>
    );
  }
}

export default HomeScreen;
