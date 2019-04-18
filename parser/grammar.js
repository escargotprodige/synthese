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
  sqstring: {match: /'(?:\\["\\]|[^\n"\\])*'/, value: s => s.slice(1, -1)},
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
    {"name": "main", "symbols": ["main$ebnf$1"], "postprocess": id},
    {"name": "object", "symbols": [{"literal":"***"}, (lexer.has("space") ? {type: "space"} : space), (lexer.has("object") ? {type: "object"} : object), (lexer.has("space") ? {type: "space"} : space), (lexer.has("sqstring") ? {type: "sqstring"} : sqstring), (lexer.has("space") ? {type: "space"} : space), {"literal":"***"}, (lexer.has("space") ? {type: "space"} : space), "categories"], "postprocess": function(d) {return {_id: d[4].value, categories: d[8]}}},
    {"name": "categories", "symbols": ["category"], "postprocess": extractObject},
    {"name": "categories", "symbols": ["categories", "category"], "postprocess": extractPairs},
    {"name": "category", "symbols": [{"literal":"==="}, (lexer.has("space") ? {type: "space"} : space), "name", (lexer.has("space") ? {type: "space"} : space), (lexer.has("properties") ? {type: "properties"} : properties), (lexer.has("space") ? {type: "space"} : space), {"literal":"==="}, (lexer.has("space") ? {type: "space"} : space), "pairs"], "postprocess": function(d) {return {name: d[2], value: d[8]}}},
    {"name": "pairs", "symbols": ["pair"], "postprocess": extractObject},
    {"name": "pairs", "symbols": ["pairs", "pair"], "postprocess": extractPairs},
    {"name": "pair", "symbols": ["name", {"literal":"="}, "value", "_"], "postprocess": function(d) {return {name: d[0], value: d[2]}}},
    {"name": "group$ebnf$1", "symbols": []},
    {"name": "group$ebnf$1$subexpression$1", "symbols": [{"literal":","}, "pair"]},
    {"name": "group$ebnf$1", "symbols": ["group$ebnf$1", "group$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "group", "symbols": [{"literal":"("}, "pair", "group$ebnf$1", {"literal":")"}], "postprocess": extractObjects},
    {"name": "value", "symbols": [(lexer.has("number") ? {type: "number"} : number)], "postprocess": function(d) {return parseFloat(d[0].value)}},
    {"name": "value", "symbols": ["group"], "postprocess": id},
    {"name": "value", "symbols": ["name"], "postprocess": id},
    {"name": "value", "symbols": [], "postprocess": (d)=> ""},
    {"name": "value", "symbols": [(lexer.has("name") ? {type: "name"} : name), (lexer.has("sqstring") ? {type: "sqstring"} : sqstring)]},
    {"name": "name", "symbols": [(lexer.has("name") ? {type: "name"} : name)], "postprocess": (d)=> d[0].value},
    {"name": "_", "symbols": []},
    {"name": "_", "symbols": [(lexer.has("space") ? {type: "space"} : space)]}
]
  , ParserStart: "main"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
