import React, {useState} from 'react';
import './App.css';
import {add, person} from './typescript-examples/basics';
import tuple from './typescript-examples/tuples'
import person2 from './typescript-examples/enums';
import combine from './typescript-examples/unions';
import addAndHandle, {printResult} from './typescript-examples/functions'
import generateError from './typescript-examples/never'
import printEmployeeInformation, {e2} from './typescript-advanced/typeGuards'

add(5, 7, true);
console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

console.log(tuple.implicit);
console.log(tuple.explicit);
console.log(person2);

console.log(combine(1, 5))
console.log(combine('max', 'ann'))
addAndHandle(10, Math.random(), printResult);

printEmployeeInformation(e2);

function App() {
  const [text, setText] = useState('click me')
  return (
    <div className="App">
      <p>TypeScript Playground</p>
      <p>Open the terminal to see results</p>
      <button onClick={() => {setText("please don't click me again")
      setTimeout((() => setText("click me")),2000)}
      } >{text}</button>
      <br/>
      <button onClick={() => generateError("error has been generated", Math.floor(Math.random()*10))
      } >Throw Error</button>
    </div>
  );
}

export default App;
