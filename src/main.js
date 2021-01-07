import { readFile } from 'fs';
import { createInterface } from 'readline'

const run = (source) => {

} 

const runFile = (scriptPath) => {
  readFile(scriptPath, (err, data) => {
    if (err) throw err;
    run(data.toString())
  })
}

const recursiveEval = function (rl) {
  rl.question('js-lox >> ', function (line) {
    if (line == 'exit')
      return rl.close();
    run(line)
    recursiveEval(rl);
  });
};

const runPrompt = () => {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout
  });
  recursiveEval(rl);
}

export const main = (args) => {
  if(args.length > 2) {
    console.log("Usage: js-lox [script]")
  } else if (args.length == 1) {
    runFile(args[0])
  } else {
    runPrompt()
  }
}
