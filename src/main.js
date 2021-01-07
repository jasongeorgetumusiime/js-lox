export const main = (args) => {
  if(args.length > 2) {
    console.log("Usage: js-lox [script]")
  } else if (args.length == 1) {
    runFile(args[0])
  } else {
    runPrompt()
  }
}
