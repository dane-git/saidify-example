// create data to become self-addressing
import {saidify, verify} from "saidify";

const myData = {
  a: 1,
  b: 2,
  d: '',
};
const label = 'd';
const said = saidify(myData, label); // defaults to Blake3-256 and JSON
console.log(`SAID is: ${said}`);



// verify self addressing identifier
const computedSAID = 'ELLbizIr2FJLHexNkiLZpsTWfhwUmZUicuhmoZ9049Hz';
const doesVerify = verify(myData, computedSAID);
console.log(`SAID verifies: ${doesVerify}`);
