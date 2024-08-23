
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import Dashboard from './component/pages/Dashboard';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'


function App() {
  return <div>

    

    <BrowserRouter>
    <Dashboard/>
    </BrowserRouter>
    

  </div>
          
}

export default App;
