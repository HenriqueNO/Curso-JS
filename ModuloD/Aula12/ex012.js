var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são extamente ${hora} horas`)
if(hora < 6){
    console.log('É de madrugada, tenha uma boa madrugada.')
}else if(hora < 12){
    console.log('É de manhá, tenha um bom dia!')
}else if(hora <= 18){
    console.log('É de tarde, tenha uma boa tarde!')
}else if(hora <= 23){
    console.log('É de noite, tenha uma boa noite!')
}