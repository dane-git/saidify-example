// create data to become self-addressing
import {saidify, verify} from "saidify";

const myData = {
  a: 1,
  b: 2,
  d: '',
};
const label = 'd';
const [said, sad] = saidify(myData, label); // defaults to Blake3-256 and JSON
console.log(`SAID is: ${said}`);
console.log(`SAD is: ${sad}`);



// verify self addressing identifier
const said2 = 'ELLbizIr2FJLHexNkiLZpsTWfhwUmZUicuhmoZ9049Hz'; // Computed from SAID reference implementation
const doesVerify = verify(sad, said2);
console.log(`SAID verifies: ${doesVerify}`);
