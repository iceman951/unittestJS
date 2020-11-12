class Code {
  showCode(code) {
    return this.code = code;
  }

  runCode(code) {
    return eval(code);
  }

  checkSize(code) {
    if (code.length > 100) return "Big code";
    else if (code.length <= 100 && code.length >= 1) return "Normal code";
    else return "it's not code";
  }

  hasForLoop(code) {
    if (code.includes("for")) return true;
    else return false;
  }

  hasWhileLoop(code) {
    if (code.includes("while")) return true;
    else return false;
  }

  codeConcatenate(code1, code2) {
    var result;
    result = code1.concat(code2);
    return result;
  }

  callCodeConcatenate(code1, code2) {
    var result = this.codeConcatenate(code1, code2);
    return result;
  }

  callHasForLoop(code) {
    var result = this.hasForLoop(code);
    return result;
  }

  callHasWhileLoop(code) {
    var result = this.hasWhileLoop(code);
    return result;
  }

  callRunCode(code) {
    var result =  this.runCode(code);
    return result;
  }
  
  callCheckSize(code) {
    var result = this.checkSize(code);
    return result;
  }
}

module.exports = Code;
