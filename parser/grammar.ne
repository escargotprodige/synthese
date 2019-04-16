@builtin "whitespace.ne"
@builtin "string.ne"
@builtin "number.ne"

main -> object:+ {% function(d) {return d.flat()} %}

object ->
	"*** Property dump for object " sqstring " ***" newline
	categories
	{% function(d) {return {_id: d[1].split(' ')[1], categories: d[4]}} %}
	
categories ->
	category {% function (d) {let output = {}; extractPair(d[0], output); return output; }%}
	| categories category {% function(d) {const {name, value} = d[1]; d[0][name] = value; return d[0] } %}
	
category ->
	"=== " name " properties ===" __
	pairs
	{% function(d) {return {name: d[1][0].join(''), value: d[4]}} %}

pairs -> pair {% function (d) {let output = {}; const {name, value} = d[0]; output[name] = value; return output; }%}
	| pairs pair {% function (d) {let val = d[1].value; let name = d[1].name; d[0][name] = val; return d[0]} %} 

pair -> 
	name "=" value _ {% function(d) {return {name: d[0][0].join(''), value: d[2]}} %}
	#| name "(" int ")=" value _ {% function(d) {return {list: d[0][0].join(''), value: d[4], idx: d[2]}} %}

group -> "(" pair ("," pair ):* ")" {% extractObjects %}

value -> 
	decimal {% id %}
	| group {% id %}
	| name {% function(d) {return d[0][0].join('')} %}
	| null {% (d)=> "" %}
	| name sqstring

name -> 
	[a-zA-Z]:+

newline -> "\r" "\n" | "\r" | "\n" {% function(d) {return null} %}

@{%

function extractPair(kv, output) {
    if(kv.name) { output[kv.name] = kv.value; }
}

function extractObjects(d) {
    let output = {};

    extractPair(d[1], output);

    for (let i in d[2]) {
        extractPair(d[2][i][1], output);
    }

    return output;
}

%}