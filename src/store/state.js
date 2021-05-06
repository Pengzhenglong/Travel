let  defaultCity  ='北京'
try{
    if(localStorage.city){
        defaultStatus=localStorage.city
    }
}catch(e){}
export  default{
        city: defaultCity

}