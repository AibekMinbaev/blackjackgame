let sum = 0
let array = [] 
let blackjack = false 
let isalive = false   

let message = ""
let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el") 
let userEl = document.getElementById("user-el")


let user = {
    name : "Aibek", 
    money: 1000,
} 
userEl.textContent = "User: " + user.name  +" " +  user.money + "$"




function start(){
    if (isalive=== false){
        sum = 0 
        array = []
        let fnum = getRandom() 
        let snum = getRandom() 
        sum += fnum + snum 
        array.push(fnum)
        array.push(snum)
        isalive = true 
        renderGame() 
    }
    
}

function renderGame(){
    if (isalive===true){
    if (sum < 21){
        message = "You are still in the game. Do you want another card?"
    }else if(sum === 21){
        message = "You got a BlackJack"
        blackjack = true
        isalive = false  
    }else{
        message = "You are out of the game"
        isalive = false 
    } 

    let ln = array.length
    let str = "Cards: "  
    for (let i=0;  i < ln; i++){
        str += array[i] + " "
    }
    cardsEl.textContent =  str
    sumEl.textContent = "Sum:  " + sum 
    messageEl.textContent = message 
    }
}


function getRandom(){
    let num = Math.floor(Math.random()*13)+1 // 0,1,2,3,4,5,6,7,8
                                          // 1,2,3,4,5,6,7,8,9 
    if(num > 10){
        return 10
    }else if(num === 1){
        return 11
    }return num                      
     
}


function newCard(){
    if(isalive === true){  
        let new_card = getRandom() 
        sum += new_card
        array.push(new_card)
        renderGame()
    }
}






