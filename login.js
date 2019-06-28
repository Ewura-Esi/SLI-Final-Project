function validate(){
    var uname = document.getElementById('input_username');
    var pass = document.getElementById('id');

    if(uname.value.trim() == ''){
        document.getElementById('usernameid').innerHTML = '**please input username';
        return false;
    }
    if(( uname.value.length < 3)|| (uname.value.length > 20)){
    document.getElementById('usernameid').innerHTML = '**please input  username between 3 and 20';
   return false; 
    }
    if(!isNaN(uname.value)){
     document.getElementById('usernameid').innerHTML = '**please enter characters only';
     return false;
     }
    if(pass.value.trim() == ''){
    document.getElementById('idnum').innerHTML = '**please input your id_no';
    return false;
    }
    if(( pass.value.trim().length < 3)|| (pass.value.length >= 8)){
    document.getElementById('idnum').innerHTML = '**please input  Id_number between 3 and 8';
   return false; 
    }
    if(isNaN(pass.value)){
    document.getElementById('idnum').innerHTML = 'id should contain  digits';
    return false;
 }
}
