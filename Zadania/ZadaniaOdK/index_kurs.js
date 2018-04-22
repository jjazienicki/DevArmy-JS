function sentence(txt) {

    var arrayOfWords = txt.split(" ");
     return arrayOfWords;

}
console.log(
    sentence("Mój tekst!")
);

function maskEmail(email) {

    var maskedEmail = email.replace("@" , "at");
     return maskedEmail;

}
console.log(
    maskEmail("kkwiatkowski87@gmail.com")
);

function vowelOut(sentence) {
  var arrayVowel = ["a", "ą", "e", "ę", "o", "ó", "u", "y", "i"];
  
    for (var i = 0; i < arrayVowel.length; i++) {
        var vowelSplit = sentence.split(arrayVowel[i])
        var vowelWithout = vowelSplit.join("");
        sentence = vowelWithout;
    }
 
  

  return sentence;
}

console.log(vowelOut("ala ma kota"));


