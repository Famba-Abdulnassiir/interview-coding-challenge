let words =  ["abc", "car", "ada", "racecar", "cool"];

function firstPalindrome (){

    for (let word of words){
        //Convert it to Lowercase and remove non-alphanumerics
        const cleanWord = word.replace(/[a-zA-Z0-9]/g, '').toLocaleLowerCase();

       const  newWord = cleanWord.split("").reverse().join("");

        if(cleanWord === newWord){
            return word;

        }
    }
    
    return  null
    

}

console.log(firstPalindrome ());
