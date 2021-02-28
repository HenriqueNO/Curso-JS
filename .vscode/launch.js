function adicionar(){
    var numero = 1
    var lista = ''
    //let numadd = document.createElement('Option')
    let dados = [numero]
    if(numero.value.length == 0){
        window.alert('Por favor digite um número!')
    }else if(dados.indexOf(numero.value) === -1){
            alert('Número já adicionado, tente outro.')
    }else if(dados.indexOf(numero.value) !== -1){
        numadd.text = `O ${numero.value} valor foi adicionado.`
        lista.appendChild(numadd)
    }
}

adicionar()