const cardArray = [ {
    name: 'burger',
    img: 'images/burger.png'
},
{
    name: 'fries',
    img: 'images/fries.png' 
},
{
    name: 'hotdog',
    img: 'images/hotdog.png'
},
{
    name: 'icecream',
    img: 'images/ice cream.png'

},
{
    name: 'milkshakes',
    img: 'images/milkshake.png'
},
{
    name: 'pizza',
    img: 'images/pizza.png'
},
{
    name: 'burger',
    img: 'images/burger.png'
},
{
    name: 'fries',
    img: 'images/fries.png' 
},
{
    name: 'hotdog',
    img: 'images/hotdog.png'
},
{
    name: 'icecream',
    img: 'images/ice cream.png'

},
{
    name: 'milkshakes',
    img: 'images/milkshake.png'
},
{
    name: 'pizza',
    img: 'images/pizza.png'
}
]
 
cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector ('#grid')
const resultDisplay = document.querySelector('#results')
let cardChoosen = []
let cardsChoosenId = []
let cardWon = []

function createBoard() {
    for (i=0; i<cardArray.length; i++) {
         const card = document.createElement('img')
         card.setAttribute( 'src', 'images/blank.png')
         card.setAttribute('data-id', i)
         card.addEventListener('click', flipCard)
         gridDisplay.appendChild(card)

    }

}
createBoard()

function checkMatch () {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChoosenId[0]
    const optionTwoId = cardsChoosenId[1]
   
if (optionOneId == optionTwoId){
    cards[optionOneId].setAttribute('src', 'images/blank.png')
    cards[optionTwoId].setAttribute('src', 'images/blank.png')
    alert('You have clicked the same image!')
}


   else if(cardChoosen[0] === cardChoosen[1]) {
        alert('You Found a Match')
        cards[optionOneId].setAttribute('src', 'images/white.jpg')
        cards[optionTwoId].setAttribute('src', 'images/white.jpg')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardWon.push(cardChoosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert ('Sorry try again!')
    }
    
    cardChoosen = []
    cardsChoosenId = []
    resultDisplay.innerHTML = cardWon.length
    
    

    if (cardWon.length == cardArray.length/2) {
        resultDisplay.innerHTML = 'Congratulations you found them all!'
    }

}

function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardChoosen.push(cardArray[cardId].name) 
    cardsChoosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardChoosen.length === 2){
        setTimeout(checkMatch, 500)
    }
}