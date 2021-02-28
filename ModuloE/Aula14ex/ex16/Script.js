function contar(){
    var ini = document.getElementById('ini')
    var fi = document.querySelector('input#fim')
    var pa = document.querySelector('input#pas')
    var cont = document.querySelector('div#cont')
    
    if (ini.value.length == 0 || fi.value.length == 0){
        alert('ERRO: Faltam dados!')
    }else{
        var inicio = Number(ini.value)
    var fim = Number(fi.value)
    var passo = Number(pa.value)
    cont.innerHTML= 'Contando... '
    
    if (passo = 0){
        alert('ERRO: Impossivel contar, passo igual a zero sendo considerado 1.')
        res.innerHTML = 'Impossivel contar!'
        passo = 1
    }

    if(inicio < fim){        // Contando de forma crescente
        for(inicio;inicio < (fim +1); inicio += passo){
            cont.innerHTML += `${inicio} \u{1f449}`
        }

    }else if(inicio > fim){ // Contando de forma decrescente
        for(inicio; (inicio+1) > (fim); inicio -= passo){
            cont.innerHTML += `${inicio} \u{1f449}`
        }  
    }
    res.innerHTML += `\u{1f3c1}`
    }
}