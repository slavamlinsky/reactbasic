import logo from './logo.svg';
import './App.css';

import Ccomponent from './Ccomponent';
import Testform from './Testform';


function App() {
  return (
    <div className="App">
      <header className="App-header">

        
      <Ccomponent/>

      <Testform/>  

        
        

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
        
      </header>
    </div>
  );
}

export default App;
