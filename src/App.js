import logo from './logo.svg';
import './App.css';
import User from './User';
// import Home from './components/Home';
import HomeContainer from "./containers/HomeContainer"

function App() {
  return (
    <div className="App">
      {/* <h1>App Componets</h1> */}
      {/* <User data={{
        name: "jigo goyai",
        age: 21,
      }} /> */}
      <HomeContainer />
    </div>
  );
}

export default App;
