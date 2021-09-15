/** 
*  @param 缓存操作  
* 
**/
export default{
    setStorage(key,data){
        if(typeof key!=='string'&&typeof data!=='string'){
            return;
        }
        localStorage.setItem(key,data);
    },
    getStorage(key){
        if(typeof key!=='string'&&typeof data!=='string'){
            return;
        }
        return localStorage.getItem(key);
    },
    removeStorage(key){
        if(typeof key!=='string'&&typeof data!=='string'){
            return;
        }
        localStorage.removeItem(key);
    }
}