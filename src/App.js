import React,{useState} from "react"
import data from './data'
import './App.css';
import List from './List'
function App() {
  const[people,setPeople] = useState(data);
  return (
    <main>
    <section className="container">
     <h2> {people.length} Birthdays Today 📅  </h2>
     <h1>🤡  🍰 🎂 🎈  🎁</h1>
     <List people={people}/>
     <button onClick={()=>setPeople([])}>Clear All</button>
    </section>
    </main>
  );
}

export default App;
