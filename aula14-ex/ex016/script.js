
var inicio = document.getElementById ('ini')
var fim = document.getElementById ('fm')
var passo = document.getElementById ('intervalo')
var res = document.getElementById('res')


function contar(){
   if (inicio.value.length == "" || fim.value.length == "" || passo.value.length == ""){
        //alert ("[ERRO]impossível contar! FALTAM DADOS")
        res.innerHTML = "Impossivel contar!"
       
    
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number (inicio.value)
        var f = Number (fim.value)
        var p = Number (passo.value)
        if ( p <= 0){
            alert ('Passo inválido considerando passo: 1')
            p = 1
        }
       
        if (i < f ){
            // Contagem crescente
            var cont = i
             
            while (cont < f) {
             cont = cont + p;
             res.innerHTML += `${cont} `
                }
            
            } else {
                // Contagem decrescente 
                var cont = i
                while (cont > f ){
                    cont = cont - p
                    res.innerHTML += `${cont} `
                }

        }

              
    } 
}   