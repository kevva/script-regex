import test from 'ava';
import m from './';

test('match script tags', t => {
	const fixtures = [
		'<script>console.log(\'asd\')</script>',
		'<script src="index.js">console.log(\'asd\')</script>'
	];

	for (const x of fixtures) {
		t.true(m().test(x));
	}
});

test('do not match script tags', t => {
	const fixtures = [
		'<script>console.log(\'asd\')',
		'<scriptt>console.log(\'asd\')</script>'
	];

	for (const x of fixtures) {
		t.false(m().test(x));
	}
});
