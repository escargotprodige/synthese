@{%

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

%}

@lexer lexer

main -> object:+ #{% id %}

object ->
	"***" %space %object %space %sqstring %space "***" %space
	categories
	
	#{% function(d) {return {_id: d[1].split(' ')[1], categories: d[4]}} %}
	
categories ->
	category #{% extractObject %}
	| categories category #{% extractPairs %}
	
category ->
	"===" %space %name %space %properties %space "===" %space
	pairs
	#{% function(d) {return {name: d[1][0], value: d[4]}} %}

pairs -> 
	pair #{% extractObject %}
	| pairs pair #{% extractPairs %}

pair -> 
	%name "=" value %space #{% function(d) {return {name: d[0][0], value: d[2]}} %}
	#| name "(" int ")=" value _ {% function(d) {return {list: d[0][0].join(''), value: d[4], idx: d[2]}} %}

group -> "(" pair ("," pair ):* ")" #{% extractObjects %}

value -> 
	%number #{% id %}
	| group #{% id %}
	| %name 
	| null #{% (d)=> "" %}
	| %name %sqstring

@{%

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

%}