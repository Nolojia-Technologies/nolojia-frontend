
import './App.css';
import Login from './auth/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavAdmin from './components/nav/NavAdmin';
import Dashboard from './admin/Dashboard';
import NavSchools from './components/nav/NavSchools';
import NavTutor from './components/nav/NavTutor';
import MainPageSchools from './schools/MainPageSchools';
import MainPageTutor from './tutor/MainPageTutor';
import NavStudents from './components/nav/NavStudents';
import MainPageStudents from './students/MainPageStudents';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<NavAdmin />}>
          <Route index element={<Dashboard />} />
          
        </Route>
        <Route path="/schools" element={<NavSchools />}>
          <Route index element={<MainPageSchools />} />
          
        </Route>
        <Route path="/tutor" element={<NavTutor />}>
          <Route index element={<MainPageTutor />} />
          
        </Route>
        <Route path="/students" element={<NavStudents />}>
          <Route index element={<MainPageStudents />} />
          
        </Route>
        <Route path="/" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
