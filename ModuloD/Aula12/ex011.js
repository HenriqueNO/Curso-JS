var idade = 15
console.log(`Você tem ${idade} anos.`)
if (idade < 16){ // idade menor que 16 anos
    console.log('não vota.')
}else if(idade < 18 || idade > 65){ // idade menor que 18 anos, mas maior que 16
        console.log('voto opcional.')
    }else if(idade >= 18){ // idade maior que 18 anos
        console.log('voto obrigadorio.')
    }