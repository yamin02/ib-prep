(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={"question":" <div class='specificatio'> <p class=\"p1\">Let \\(f(x) = 8x + 3\\) ad \\(g(x) = 4x\\), fo \\(x \\i \\mathbb{R}\\).<p> <div>  <div class='questio' style='paddig-left: 20px; paddig-ight: 20px;'> <p class=\"p1\">Wite dow \\(g(2)\\).<p> <div class='maks'>[1]<div> <div class='questio_pat_label'>a.<div> <div> <div class='questio' style='paddig-left: 20px; paddig-ight: 20px;'> <p class=\"p1\">Fid \\((f \\cic g)(x)\\).<p> <div class='maks'>[2]<div> <div class='questio_pat_label'>b.<div> <div> <div class='questio' style='paddig-left: 20px; paddig-ight: 20px;'> <p class=\"p1\">Fid \\({f^{ - 1}}(x)\\).<p> <div class='maks'>[2]<div> <div class='questio_pat_label'>c.<div> <div> ","markschems":" <div class='question' style='padding-left: 20px;'> <p class=\"p1\"><span class=\"Apple-converted-space\">\\(g(2) = 8\\) &nbsp; &nbsp;</span><strong><em>A1 <span class=\"Apple-converted-space\">&nbsp; &nbsp; </span>N1</em></strong></p> <p class=\"p1\"><strong><em>[1 mark]</em></strong></p> <div class='question_part_label'>a.</div> </div> <div class='question' style='padding-left: 20px;'> <p class=\"p1\">attempt to form composite (in any order) <span class=\"Apple-converted-space\">&nbsp; &nbsp; </span><strong><em>(M1)</em></strong></p> <p class=\"p2\"><span class=\"s1\"><em>eg</em>\\(\\,\\,\\,\\,\\,\\)\\(f(4x),{\\text{ }}4 \\times (8x + 3)\\)</span></p> <p class=\"p1\"><span class=\"s2\">\\((f \\circ g)(x) = 32x + 3\\) &nbsp; &nbsp;&nbsp;</span><strong><em>A1 <span class=\"Apple-converted-space\">&nbsp; &nbsp; </span>N2</em></strong></p> <p class=\"p1\"><strong><em>[2 marks]</em></strong></p> <div class='question_part_label'>b.</div> </div> <div class='question' style='padding-left: 20px;'> <p class=\"p1\">interchanging \\(x\\) and \\(y\\) (may be seen at any time) <span class=\"Apple-converted-space\">&nbsp; &nbsp; </span><strong><em>(M1)</em></strong></p> <p class=\"p2\"><span class=\"s1\"><em>eg</em></span>\\(\\,\\,\\,\\,\\,\\)\\(x = 8y + 3\\)</p> <p class=\"p1\"><span class=\"s2\">\\({f^{ - 1}}(x) = \\frac{{x - 3}}{8}\\,\\,\\,\\,\\,\\left( {{\\text{accept }}\\frac{{x - 3}}{8},{\\text{ }}y = \\frac{{x - 3}}{8}} \\right)\\)&nbsp;<span class=\"Apple-converted-space\">&nbsp; &nbsp; </span></span><strong><em>A1 <span class=\"Apple-converted-space\">&nbsp; &nbsp; </span>N2</em></strong></p> <p class=\"p1\"><strong><em>[2 marks]</em></strong></p> <div class='question_part_label'>c.</div> </div> ","topic0":"Topic 2 - Functions and equations","topic1":"2.1","topic2":"Concept of function \\(f:x \\mapsto f\\left( x \\right)\\) .","ReferenceCode":"16M.1.sl.TZ1.1"}
},{}],2:[function(require,module,exports){
const paperJson = require('./paper1/ib0.json');


var pp = paperJson.question
$("#next").click(function (e) { 
    e.preventDefault();
    document.querySelector('.question').innerHTML = paperJson.question ;
});

$.get('./txt/ib24.txt', function(data) {
    // do_something_with(data);
    document.querySelector('.question').innerHTML = data ;
 }, 'text');



},{"./paper1/ib0.json":1}]},{},[2]);
