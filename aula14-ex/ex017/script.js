function gerar (){
    var digiTXT = document.getElementById ('txtNum')
    var tabuTXT = document.getElementById ('tabu')
   

    if (digiTXT.value.length == ""){
        alert ("[ERRO!] Obrigatório digitar um número.")
    }
    else {
        var digitado = Number (digiTXT.value)
        tabuTXT.innerHTML = ''
        for (cont = 1;cont <= 10;cont ++ ){
          var item = document.createElement ('option')
          item.text= ` ${digitado} x ${cont}= ${digitado*cont}`
          //item.value =`tab ${cont}`
          tabuTXT.appendChild (item)
        
        
        }
       
    }
}