
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import Dashboard from './component/pages/Dashboard';


import Visitor from './component/pages/Visitor';
import EmpDashboardHome from './component/pages/EmpDashboardHome';



function App() {
  return <div>

    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Visitor/>}/>
        <Route path='/dash/*' element={<EmpDashboardHome/>}/>
      </Routes>
    </BrowserRouter>
    

  </div>
          
}

export default App;
