//import logo from './logo.svg';
import './App.css';


import AppRouter from './components/routes/AppRouter';
import MainHeader from './components/header/MainHeader'

function App() {
 return (
    <div className="App">
        <MainHeader />
        <AppRouter />
    </div>
  );
}

export default App;
