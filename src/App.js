import "./App.css";
import Header from './components/Header';
import logo from './assets/logo.svg';
import Profile from './pages/Profile';


function App() {
  return (
    <div className="Main">
     <Header logo={logo}/>
     {/* <Profile userName='octocat'/> */}
    </div>
  );
}

export default App;
