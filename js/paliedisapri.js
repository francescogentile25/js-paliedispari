const userWord = prompt('iserisci una parola e ti dirò se è palindorma')
// console.log (userWord)

palindorma(userWord)



function palindorma (userWord){
    const splitWord=userWord.split('')
    // console.log(splitWord)
    const splitWordUnit= splitWord.join()
    // console.log(splitWordUnit)
    const reverseWord=(splitWord.reverse())
    // console.log(reverseWord)
    const reverseWordUnit= reverseWord.join()
    // console.log(reverseWordUnit)
    if(splitWordUnit=== reverseWordUnit ){
        console.log('La parola è palindroma')
    }else{
        console.log('La parole non è palindroma')
    }

}


// se la proala spezzettata è uguale alla parola spezzetatta e capavolta allora è palindroma

//spezzare parola  FATTO
// memorizzare parola spezzata e capovolta 
// confrotnare valori 