let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

function addExcitement(theWordArray, expressHere) {
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        /*
            If the current word's place (not index) in the array
            is evenly divisible by 3, add an exclamation point
            to the end of the word and then concatenate it to
            `buildMeUp`.

            Otherwise, just concatenate the word itself.
         */
        let j = i + 1;
        if (j % 3 === 0) {
            buildMeUp += `${sentence[i]}${expressHere} `
        } else {
            buildMeUp += `${sentence[i]} `
        }
        console.log(buildMeUp)
        // Print buildMeUp to the console
    }
}

addExcitement(sentence, "?")