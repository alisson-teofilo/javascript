
function verificar(){
   var data = new Date ()
   var ano = data.getFullYear()
   var fano = document.getElementById ('txtano')
   var res = document.querySelector ('div#res')
   var img = document.getElementById ('imagem')
   
   
   if (fano.value.length == 0 || fano.value > ano){
       alert ('Verifique os dados e tente novamente')
    } 
    else {
       var fsex = document.getElementsByName ('radsex')
       var idade = ano - Number (fano.value)
       genero = ''
       if (fsex[0].checked){
           genero = 'Homem'

           if ( idade >= 0 && idade < 10){
               img.src = 'criança-m.jpeg'

           } else if ( idade < 21){
               img.src = 'jovem-m.jpeg'

           } else if (idade < 60){
               img.src= 'adulto-m.jpeg'

           }else {
               img.src = 'idoso-m.jpeg'

           }
        }
        
        else if (fsex[1].checked){
            genero = 'Mulher'
             if (idade >= 0 && idade < 10){
                img.src = 'criança-f.jpeg'

            } else if ( idade < 21){
                 img.src = 'jovem-f.jpeg'

            } else if (idade < 60){
                img.src ='adulto-f.jpeg'
            } else {
                img.src= 'idoso-f.jpeg'
            }
           
            
    
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}


