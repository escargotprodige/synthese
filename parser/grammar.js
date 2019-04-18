// Generated automatically by nearley, version 2.16.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }


const moo = require('moo')

let lexer = moo.compile({
  '***': '***',
  '===': '===',
  '=': '=',
  '(': '(',
  ')': ')',
  ',': ',',
  object: 'Property dump for object',
  space: {match: /\s+/, lineBreaks: true},
  sqstring: /'(?:\\["\\]|[^\n"\\])*'/,
  name: {match: /[a-zA-Z_]+/, type: moo.keywords({
    properties: 'properties'
  })},
  number: /-?(?:[0-9]|[1-9][0-9]+)(?:\.[0-9]+)?(?:[eE][-+]?[0-9]+)?\b/
})




function extractPair(kv, output) {
    if(kv.name) { output[kv.name] = kv.value; }
}

function extractPairs(d) {extractPair(d[1],d[0]); return d[0] }

function extractObject(d) {let output = {}; extractPair(d[0], output); return output; }

function extractObjects(d) {
    let output = {};

    extractPair(d[1], output);

    for (let i in d[2]) {
        extractPair(d[2][i][1], output);
    }

    return output;
}

var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "main$ebnf$1", "symbols": ["object"]},
    {"name": "main$ebnf$1", "symbols": ["main$ebnf$1", "object"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "main", "symbols": ["main$ebnf$1"]},
    {"name": "object", "symbols": [{"literal":"***"}, (lexer.has("space") ? {type: "space"} : space), (lexer.has("object") ? {type: "object"} : object), (lexer.has("space") ? {type: "space"} : space), (lexer.has("sqstring") ? {type: "sqstring"} : sqstring), (lexer.has("space") ? {type: "space"} : space), {"literal":"***"}, (lexer.has("space") ? {type: "space"} : space), "categories"]},
    {"name": "categories", "symbols": ["category"]},
    {"name": "categories", "symbols": ["categories", "category"]},
    {"name": "category", "symbols": [{"literal":"==="}, (lexer.has("space") ? {type: "space"} : space), (lexer.has("name") ? {type: "name"} : name), (lexer.has("space") ? {type: "space"} : space), (lexer.has("properties") ? {type: "properties"} : properties), (lexer.has("space") ? {type: "space"} : space), {"literal":"==="}, (lexer.has("space") ? {type: "space"} : space), "pairs"]},
    {"name": "pairs", "symbols": ["pair"]},
    {"name": "pairs", "symbols": ["pairs", "pair"]},
    {"name": "pair", "symbols": [(lexer.has("name") ? {type: "name"} : name), {"literal":"="}, "value", (lexer.has("space") ? {type: "space"} : space)]},
    {"name": "group$ebnf$1", "symbols": []},
    {"name": "group$ebnf$1$subexpression$1", "symbols": [{"literal":","}, "pair"]},
    {"name": "group$ebnf$1", "symbols": ["group$ebnf$1", "group$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "group", "symbols": [{"literal":"("}, "pair", "group$ebnf$1", {"literal":")"}]},
    {"name": "value", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "value", "symbols": ["group"]},
    {"name": "value", "symbols": [(lexer.has("name") ? {type: "name"} : name)]},
    {"name": "value", "symbols": []},
    {"name": "value", "symbols": [(lexer.has("name") ? {type: "name"} : name), (lexer.has("sqstring") ? {type: "sqstring"} : sqstring)]}
]
  , ParserStart: "main"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
