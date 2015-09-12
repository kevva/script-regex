'use strict';
var test = require('ava');
var scriptRegex = require('./');

test('match script tags', function (t) {
	var fixtures = [
		'<script>console.log(\'asd\')</script>',
		'<script src="index.js">console.log(\'asd\')</script>'
	];

	fixtures.forEach(function (el) {
		t.ok(scriptRegex().test(el), el);
	});

	t.end();
});

test('do not match script tags', function (t) {
	var fixtures = [
		'<script>console.log(\'asd\')',
		'<scriptt>console.log(\'asd\')</script>'
	];

	fixtures.forEach(function (el) {
		t.ok(!scriptRegex().test(el), el);
	});

	t.end();
});
