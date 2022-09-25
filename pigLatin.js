const button = document.querySelector("button")
const output = document.getElementById('output')
const userWord = document.getElementById("translatedWord")
let newWords = []

button.addEventListener("click",function(){
  let inputValue = document.querySelector("input").value.toLowerCase()
  let wordArray = inputValue.split(" ")
  output.style.display = "block"
  pigLatin(wordArray)
  userWord.innerText = newWords.join(" ")
})

function pigLatin(array){
let newWord 
 for (const word of array) {
    if(
        word[0] === 'a' || 
        word[0] === 'e' || 
        word[0] === 'i' ||
        word[0] === 'o' ||
        word[0] === 'u'   
      ){
      newWord = word + 'yay'
      newWords.push(newWord)
    } else {
      startsWithConstant(word)
    }
 }
}

function startsWithConstant(str){
  let newWord
  let vowels = ['a','e','i','o','u']
  for(let i = 0; i< str.length; i++){
    for(let j = 0 ;j< vowels.length;j++ ){
       if(str[i] === vowels[j]){
        let beginning = str.substring(0,i)
        let end = str.slice(i)
        newWord = end + beginning + "ay"
        newWords.push(newWord)
        return
       }
    }
   
  }
}