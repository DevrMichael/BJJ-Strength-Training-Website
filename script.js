import myJson from './funfact.json' assert {type: 'json'}

function randomFact(){
    document.getElementById("oneData").innerHTML += myJson[Math.floor(Math.random() * Object.keys(myJson).length)]
}
randomFact();