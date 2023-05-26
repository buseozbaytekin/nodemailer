import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [email, setEmail] = useState("");

  const handleSubmit = e => {
    //console.log("selll")
    e.preventDefault();

    axios.post("http://localhost:8600/api/sendemail", {
      email: email,
    })
    .then((response) => {
      console.log(response);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="card">
          <form action="" method="post" onSubmit={handleSubmit}>
            <label>Mail Adresi:</label>
            <input
                type="text" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
          </form>
         <button onClick={handleSubmit}>Gönder</button>
        </div>
      </header>
    </div>
  );
}

export default App;
