import React from 'react';
import './App.css';
import Accordion from './components/Accordion';
// const items = [{
//   title: 'What can my goal be?',
//   content:'a goal can be what you want your outcome to be in what you are focusing on',
// },{
//   title: 'What car are we driving',
//   content: 'jeep wrangler'
// },{
//   title: 'what job am i getting this year?',
//   content:'a high paying job $150, 000'
// }
// ];

function App() {
  return (
    <div className="App">
     <h1>Accordion</h1>
     <Accordion title='How to access your ID'>
      <p>Go to your profile</p>
     </Accordion>
     <Accordion title='How to Log out'>
      <p>Click the x  at the top right</p>
     </Accordion>

    </div>
  );
}

export default App;
