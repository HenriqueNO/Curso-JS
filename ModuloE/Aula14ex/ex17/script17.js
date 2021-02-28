function tabuada(){
    var num = document.getElementById('num')
    var tabuada = document.getElementById('tabr')
    
    if (num.value.length == 0){
        window.alert('Por favor, digite um número!')
    }else{
        let n = Number(num.value)
        tabuada.innerHTML = ''
        for(var c = 0; c <= 10; c++){
            var item = document.createElement('option')
            item.text= `${n} x ${c} = ${n*c}`
            tabuada.appendChild(item)
        }
    }

}