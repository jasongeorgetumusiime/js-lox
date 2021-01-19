import Token from './Token'
import { error } from './Lox'

class Scanner {
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

  advance = () => {
    this.current++
    return this.source[this.current - 1]
  }

  addToken = (tokenType, literal) => {
    text = this.source.slice(this.start, this.current)
    tokens.push(new Token(tokenType, text, literal, line));
  }

  addToken = (tokenType) => {
    this.addToken(tokenType, null)
  }

  match = (expected) => {
    if(this.isAtEnd) return false
    if(source[this.current] != expected) return false

    this.current++
    return true
  }

  peek = () => {
    if(isAtEnd) return '\0'
    return source[this.current]
  }

  scanToken = () => {
    c = advance()
    switch(c) {
      case '(': addToken(LEFT_PAREN); break;
      case ')': addToken(RIGHT_PAREN); break;
      case '{': addToken(LEFT_BRACE); break;
      case '}': addToken(RIGHT_BRACE); break;
      case ',': addToken(COMMA); break;
      case '.': addToken(DOT); break;
      case '-': addToken(MINUS); break;
      case '+': addToken(PLUS); break;
      case ';': addToken(SEMICOLON); break;
      case '*': addToken(STAR); break;
      case '!': addToken(match('=') ? BANG_EQUAL : BANG); break;
      case '=': addToken(match('=') ? EQUAL_EQUAL : EQUAL); break;
      case '<': addToken(match('=') ? LESS_EQUAL : LESS); break;
      case '>': addToken(match('=') ? GREATER_EQUAL : GREATER); break;
      case '/':
        if(this.match('/')) {
          while(peek() != '\n' && !this.isAtEnd()) this.advance();
        } else {
          this.addToken(SLASH)
        }
        break;
      case ' ':
      case
      default:
        error(line, "Unexpected character.")
        break;
    }
  }
}

