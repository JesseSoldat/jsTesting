/* keep this line for cq processing (issue #19) */
import Modash from './Modash';

// ./node_modules/.bin/babel-node Modash.test.js


//const string = 'there was on catchm and that was CATCH-22'; //FAIL
const string = 'there was one catch and that was CATCH-22'; //PASS

const actual = Modash.truncate(string, 19);
const expected = 'there was one catch...';

if(actual !== expected) {
	console.log(`[FAIL] Expected \'truncate()\' to return '${expected}', got '${actual}'`);
	//[FAIL] Expected 'truncate()' to return 'there was one catch...', got 'there was o          n catchm...'

} else {
	console.log('[PASS] `truncate()`.');
}
