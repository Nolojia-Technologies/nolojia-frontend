import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// import Login from './components/Login/login';
import Navbar from './components/admin/Navbar';
import SideBar from './components/admin/SideBar';
import Dashboard from './components/admin/Dashboard';

import './App.css';


function App() {
  return (
    <div className="App">
    
    <Navbar /> 
    <container fluid className="d-flex">
      <SideBar />  
      <Dashboard />
      </container>
        {/* <Login /> */}
     
    </div>
  );
}

export default App;
