import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setName();
    console.log('form submitted!!')
    if (Number(score) <= 5 && comment.length <= 10){
      alert("please provide a comment explaining why the experience was poor")
    }
  }
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState('');
  return (
       <div className="App">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div className="Field">
              <label htmlFor='name'>Name</label>
              <input  id="name"
              type="text" 
              placeholder="Name" 
              name="name" value={name} 
              onChange={e => setName(e.target.value)}></input>
              </div>
              <button disabled={!name} type="submit">Submit</button>
          </fieldset>
      </form>
      <form>
        <fieldset>
          <h2>Feedback form</h2>
          <div className='field'>
            <label>Score: {score}</label>
            <input 
            type="range" 
            min='0' max="10" 
            value={score} 
            onChange={e => setScore(e.target.value)}/>

          </div>
          <button type='submit'>Submit</button>
          <div className='Field'>
            <label>Comments</label>
            <textarea value={comment} onChange={e => setComment(e.target.value)}>
              comment
            </textarea>

          </div>

        </fieldset>
      </form>

    
    </div>
  );
}

export default App;
