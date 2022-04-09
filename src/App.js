import logo from './logo.svg';
import './App.css';
import User from './User';
import Home from './components/Home';
// import Home from './components/Home';
import HomeContainer from "./containers/HomeContainer"
import HeaderController from './containers/HeaderController';

function App() {
  return (
    <div className="App">
      <HeaderController />
      <HomeContainer />
      {/* <Home /> */}
    </div>
  );
}

export default App;
