//import logo from './logo.svg';
import './App.css';
import BoatsApi from './boatdApi';
import { useState } from 'react';
import NewExpence from './components/NewExpence';
import UncontrolledExapleled from './components/controlled/uncontrolledExample';
import KeysDemo from './components/keys/keysDemo';
import DynamicStyleDemo from './components/dynamicstyle/DynamicStyleDemo'

function App() {

  const expencesArray = [
    {title: "title", amount: "44", date:"33"}
  ]

  const [expences, setExpences] = useState(expencesArray)

  const updateExpenceData = (expence) => {
      console.log("test", expence);
     // expences.push(expence);

      setExpences([...expences, expence])
  }

  return (
    <div className="App">
      <DynamicStyleDemo />
      <hr />
      <h2>Keys Demo</h2>
      <KeysDemo />
      <hr/>
      <UncontrolledExapleled />
      <hr/>
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
