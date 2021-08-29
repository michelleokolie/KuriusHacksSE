import './App.css';
import Admin from './components/Admin/Admin';

// import Landing from './components/Landing/Landing';
// import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing />
      {/* Can't be rendered until routing is fixed */}
      {/* <Admin /> */}
    </div>
  );
}

export default App;
