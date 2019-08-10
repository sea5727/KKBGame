import * as FileSystem from 'expo-file-system';
let cacheFile = FileSystem.documentDirectory + 'KKBGame/config.json'

export default {
    DocumentDirecctory : FileSystem.documentDirectory + 'KKBGame',
    ConfigureFileName : 'config.json',
    ConfigureFile : cacheFile,
    IsConfExist : async function IsConfExist(){
        let ret = false;
        try{
            let {exists, isDirectory} = await FileSystem.getInfoAsync(this.ConfigureFile);
            console.log('설정파일이 있습니까?', exists);
            if(exists && !isDirectory){
                ret =  true;
            }
        }
        catch(exception){
            console.log('exception : ' , exception);
        }
        finally{
            return ret;
        }
    },
    IsNicknameExist : async function IsNicknameExist(){
        console.log('IsNicknameExist? path:', this.ConfigureFile);
        let ret = false;
        try{
            result = await FileSystem.readAsStringAsync(this.ConfigureFile);
            console.log('파일 읽기 성공?', result);
        }
        catch(exception){
            console.log('exception : ' , exception);
        }
        finally{
            return ret;
        }
    },
    MakeConfDir : async function MakeConfDir(){
        let result = false;
        try{
            let {exists} = await FileSystem.getInfoAsync(this.DocumentDirecctory);
            console.log('설정을 위한 폴더가 있습니까?', exists);
            if(!exists) {
                result = await FileSystem.makeDirectoryAsync(this.DocumentDirecctory);
                console.log('디렉터리를 만들었습니까?', result);
                result = true;
            } else {
                result = true;
            }
        }
        catch(exception){
            console.log('MakeConfDir exception : ', exception);
        }
        finally{
            return result;
        }
                    // FileSystem.getInfoAsync(MyUtil.ConfigureFile).then((Fileinfo) => {
            //     console.log(MyUtil.ConfigureFile, 'fileinfo:', Fileinfo);
            // })
            // FileSystem.getInfoAsync(MyUtil.DocumentDirecctory).then((Fileinfo) => {
            //     if(Fileinfo.exists == false){
            //         FileSystem.makeDirectoryAsync(MyUtil.DocumentDirecctory).then((ret) => {
            //             console.log('makeDirectoryAsync ret' , ret);
            //         })
            //     }
            //     console.log(MyUtil.DocumentDirecctory, 'fileinfo:', Fileinfo);
            // })
    },
    WriteConfFile : async function WriteConfFile(contents){
        let result = false;
        try{
            var write = await FileSystem.writeAsStringAsync(this.ConfigureFile, contents);
            console.log('설정 파일 쓰기 성공?', write);
            result = true;
        }
        catch(exception){
            console.log(exception);
        }
        finally{
            return result;
        }
    },
    DeleteConfFile : async function DeleteConfFile(){
        let result = false;
        try{
            let isExist = await this.IsConfExist();
            if(isExist){
                let deleteresult = await FileSystem.deleteAsync(this.ConfigureFile)
                console.log('파일 삭제 성공?', deleteresult);
                result = true;
            }
        }
        catch(exception){
            console.log(exception);
        }
        finally{
            return result;
        }
        

    }


    

}