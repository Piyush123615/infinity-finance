
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dashboard from './component/pages/Dashboard';




function App() {
  return <div>
    <BrowserRouter>
    <Dashboard/>
    </BrowserRouter>
    
  </div>
          
}

export default App;
