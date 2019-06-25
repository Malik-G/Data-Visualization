//works with fruitCollection.html

let grapeCount = 50
let bananaCount = 40
let appleCount = 20

let grapeWidth = ((grapeCount/100)*100).toString()
let bananaWidth = ((bananaCount/100)*100).toString()
let appleWidth = ((appleCount/100)*100).toString()

$('#grape').css("width", grapeWidth + "%")
$('#grape').css("height", "50px")
$('#grape').css("background-color", "purple")
$('#grape p').html(`<p> Grapes - ${grapeCount} </p>`)

$('#banana').css("width", bananaWidth + "%")
$('#banana').css("height", "50px")
$('#banana').css("background-color", "goldenrod")
$('#banana p').html(`<p> Bananas - ${bananaCount} </p>`)

$('#apple').css("width", appleWidth + "%")
$('#apple').css("height", "50px")
$('#apple').css("background-color", "red")
$('#apple p').html(`<p> Apples - ${appleCount} </p>`)
