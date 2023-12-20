const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// get length of alphabet interesting if we add characters
const alphabetLength = alphabet.length

/**
  * reset key if key > alphabetLength
  * @param {number} key
  * @returns {number}
**/
const resetAlphabetKey = (key) => {
  let currentKey = key

  while (currentKey > alphabetLength - 1) {
    currentKey -= alphabetLength
  }

  return currentKey
}

/**
  * encrypt letter with key
  * @param {string} input
  * @param {number} key
  * @returns {string}
**/
const encrypt = (input, key) => {
  const inputLowerCase = input.toLowerCase()

  const letterPosition = alphabet.indexOf(inputLowerCase)

  const newLetterPosition = resetAlphabetKey(letterPosition + key)

  return alphabet[newLetterPosition]
}

/**
  * encrypt input with key
  * @param {string} input
  * @param {number} key
  * @returns {string}
**/
const enigma = (input, key) => {
  const inputArray = input.split('')
  const newEncription = inputArray.map((character) => {
    lowerCaseRegex = /[a-z]/
    uperCaseRegex = /[A-Z]/

    switch (true) {
      case lowerCaseRegex.test(character):
        return encrypt(character, key)
      case uperCaseRegex.test(character):
        return encrypt(character, key).toUpperCase()
      default:
        return character
    }
  })

  return newEncription.join('')
}

console.log(enigma('Ceci est un test avec un z !', 2))
