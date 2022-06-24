//import logo from './logo.svg';
import './App.css';


import AppRouter from './components/routes/AppRouter';
import MainHeader from './components/header/MainHeader'
import Layout from './components/layout/Layout';

function App() {
 return (
    <div className="App">
        {/* <MainHeader /> */}
        <Layout>
          <AppRouter />
        </Layout>
        
    </div>
  );
}

export default App;
