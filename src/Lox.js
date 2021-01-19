import { readFile } from 'fs';
import { createInterface } from 'readline'

class Lox {

  hadError = false; // need to remove these global variables

  run = (source) => {
    const tokens = [...source]
    console.log(tokens);
  }

  runFile = (scriptPath) => {
    readFile(scriptPath, (err, data) => {
      if (err) throw err;
      run(data.toString())
    })
  }

  recursiveEval = function (rl) {
    rl.question('js-lox >> ', function (line) {
      if (line == 'exit')
        return rl.close();
      run(line)
      hadError = false;
      recursiveEval(rl);
    });
  };

  runPrompt = () => {
    const rl = createInterface({
      input: process.stdin,
      output: process.stdout
    });
    recursiveEval(rl);
  }

  main = (args) => {
    if (args.length > 2) {
      console.log("Usage: js-lox [script]")
      process.exit(65)
    } else if (args.length == 1) {
      runFile(args[0])
    } else {
      runPrompt()
    }
  }

  report = (line, where, message) => {
    console.error(`[line ${line}] Error ${where}: ${message}`);
    hadError = true;
  }

  error = (line, message) => {
    report(line, "", message)
  } 
}