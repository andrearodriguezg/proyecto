import logo from './logo.svg';
import './App.css';
import { Home } from './componentes/home';
import { Login } from './componentes/Login';
import { Registrarse } from './componentes/Registrarse';
import { HomeUsuarioint } from './componentes/HomeUsuarioint';

function App() {
  return (
    <>
    <BrowserRouter> 
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Registrarse" element={<Registrarse/>}/>
      <Route path="/HomeUsuarioint" element={<HomeUsuarioint/>}/>
    
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
//<div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>