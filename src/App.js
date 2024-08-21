
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './component/navigation/Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'


function App() {
  return <div>

    <Footer/>

    <BrowserRouter>
    <Dashboard/>
    </BrowserRouter>
    

  </div>
          
}

export default App;
