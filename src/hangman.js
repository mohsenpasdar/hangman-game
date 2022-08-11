class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
    }
    calculateStatus() {
        const finished = this.word.every(char => this.guessedLetters.includes(char) || char === ' ')
    
        if (this.remainingGuesses < 1) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        }
    }
    get statusMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.remainingGuesses}`
        } else if (this.status === 'failed') {
            return `Nice try! The word was ${this.word.join('')}`
        } else if (this.status = 'finished') {
            return `Great work! You guessed the word!`
        }
    }
    get puzzle() {
        const puzzle = this.word.map(character => {
            return this.guessedLetters.includes(character) || character === ' ' ? character : "*"
        })
        return puzzle.join('')
    }
    makeGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)
    
        if (this.status !== 'playing') {
            return
        }
    
        if (isUnique) {
            this.guessedLetters.push(guess)
        } 
    
        if (isUnique && isBadGuess) {
            this.remainingGuesses--
        }
        this.calculateStatus()
    }
}

export { Hangman as default }