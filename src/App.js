//import logo from './logo.svg';
import './App.css';
import BoatsApi from './boatdApi';
import { useState } from 'react';
import NewExpence from './components/NewExpence';

function App() {

  const expencesArray = [
    {title: "title", amount: "44", date:"33"}
  ]

  const [expences, setExpences] = useState(expencesArray)

  const updateExpenceData = (expence) => {
      console.log("test", expence);
      expences.push(expence);

      setExpences([...expences, expence])
  }

  return (
    <div className="App">
      <BoatsApi />
      <NewExpence updateExpenceData = {updateExpenceData} />
      <hr />
      {expences.map((data) => {
        return (
          <>
            {data.title}<br />
            {data.amount}<br />
            {data.date}<hr />
          </>
        )
      })}
      
    </div>
  );
}

export default App;
