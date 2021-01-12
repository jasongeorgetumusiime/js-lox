import Token from './Token'

class scanner {
  constructor(source) {
    this.source = source
    this.start = 0
    this.current = 0
    this.line = 1
    this.tokens = [];
  }

  isAtEnd = () => this.current >= this.source.length
  
  scanTokens = () => {
    while(!isAtEnd()) {
      this.start = this.current
      this.scanTokens()
    }
    tokens.push(new Token(EOF, "", null, line))
    return tokens
  }
}