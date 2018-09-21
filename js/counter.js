var contador = 0;
function cuenta(){
    
 
if(contador){
    window.location.href = "http://google.com.do"; 
}else{
 
    
    document.getElementById("contador").innerHTML  = "Redireccionando en " + fin_contador + " Seg";
    
        fin_contador = fin_contador - 1;
}
 
 
}
 
function ini(){
 
cuenta();
setInterval("cuenta()",1000);
 
 
}