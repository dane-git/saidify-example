// create data to become self-addressing
import {saidify, verify} from "saidify";
import {
  myData,
  label,
  myData1,
  label1,
  myData2,
  label2,
  myData3,
  label3 } from './data'



// console.log('test')
// const orig_said = myData[label]
// const [said, sad] = saidify(myData, label); // defaults to Blake3-256 and JSON
// console.log(`calc SAID is:\t ${said}`);
// console.log(`orig SAID is:\t ${orig_said}`)
// // console.log(`SAD is: ${sad}`);
// console.log(' VERIFIES?: ', said == orig_said)

console.log('test 1')
const orig_said1 = myData1[label1]
const [said1, sad1] = saidify(myData1, label1); // defaults to Blake3-256 and JSON
console.log(`calc SAID is:\t ${said1}`);
console.log(`orig SAID is:\t ${orig_said1}`)
// console.log(`SAD is: ${sad}`);
console.log('1 VERIFIES?: ', said1 == orig_said1)

console.log('\ntest 2')
const orig_said2 = myData2[label2]
const [said2, sad2] = saidify(myData2, label2); // defaults to Blake3-256 and JSON
console.log(`calc SAID is:\t ${said2}`);
console.log(`orig SAID is:\t ${orig_said2}`)
console.log('2 VERIFIES?: ', said2 == orig_said2)


// verify self addressing identifier
// const said2 = 'ELLbizIr2FJLHexNkiLZpsTWfhwUmZUicuhmoZ9049Hz'; // Computed from SAID reference implementation
// const doesVerify = verify(sad, orig_said);
// console.log(`SAID verifies: ${doesVerify}`);
