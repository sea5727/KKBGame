import React , {Component} from 'react';
import {Alert, Text, View, TextInput, Button, StyleSheet} from 'react-native'; 
import * as FileSystem from 'expo-file-system';
import MyUtil from '../Utils/Utility'

const style = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
    },
    inputContainer : {
        alignItems : 'center',
        justifyContent : 'center',
        flexDirection : 'row',
        height : '20%',

    },
    textNickLabel : {
        fontSize : 30,
    },
    textNickInput : {
        width : '50%',
        borderBottomWidth : 1,
    }

})
class AccountScreen extends Component{
    constructor(){
        super()
        this.state = {
            nickname : '',
        }
    }
    async _onPress(targetId){
        console.log('===============================')
        console.log('버튼을 눌렀습니다 ', targetId);
        const {goBack} = this.props.navigation;
        const {nickname} = this.state;
        if(nickname.length > 0){
            let exist = false;
            let dir = true;
            let ret = false;
            exist = await MyUtil.IsConfExist();
            if(!exist){
                dir = await MyUtil.MakeConfDir();    
            }
            if(dir) {
                ret = await MyUtil.WriteConfFile(nickname);
            }
            console.log(`exist:${exist}, dir:${dir}, ret:${ret}`);
            if(ret) goBack();
            else Alert.alert('닉네임 저장 실패');
        }
        
    }
    render(){
        
        return(
            <View style={style.container}>
                <View style={style.inputContainer}>
                    <Text style={style.textNickLabel}>닉네임 </Text>
                    <TextInput
                        style={style.textNickInput}
                        autoFocus={true}
                        placeholder="닉네임을 입력하세요!."
                        onChangeText={(nickname) => {
                            if (nickname.length <= 40)
                                this.setState({ nickname })
                        }}
                        value={this.state.nickname}
                    />
                    <Button title="확인"
                        onPress={this._onPress.bind(this, 'btnOK')} />
                </View>

            </View>

        );
    }
}

export default AccountScreen;
