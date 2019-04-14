@builtin "whitespace.ne"
@builtin "string.ne"
@builtin "number.ne"

main -> object:+ {% function(d) {return d.flat()} %}

object ->
	"*** Property dump for object " sqstring " ***" newline
	category:*
	{% function(d) {return {object: d[1].split(' ')[1], categories: d[4]}} %}
	
category ->
	"=== " name " properties ===" __
	pair:*
	{% function(d) {return {name: d[1][0].join(''), properties: d[4]}} %}

pair -> 
	name "=" value _ {% function(d) {return {name: d[0][0].join(''), value: d[2]}} %}
	| name "(" int ")=" value _ {% function(d) {return {list: d[0][0].join(''), value: d[4], idx: d[2]}} %}

group -> "(" pair ("," pair ):* ")" {% function(d) {let output = [d[1]]; for (let i in d[2]){output.push(d[2][i][1])} return output} %}

value -> 
	decimal {% id %}
	| group {% id %}
	| name {% function(d) {return d[0][0].join('')} %}
	| null
	| name sqstring

name -> 
	[a-zA-Z]:+

newline -> "\r" "\n" | "\r" | "\n" {% function(d) {return null} %}

