import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Navbar/Nav';
import Home from './Home/Home';
import TableStudent from './Students/Table/StudentsTable'
import AddStudent from './Students/Add/StudentAdd';
import UpdateStudent from './Students/Update/StudentUpdate';
import ViewStudent from './Students/View/StudentView';
import DeleteStudent from './Students/Delete/StudentDelete';

const App = () => {
  return (
    <>
    <Nav/>
    <Router>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/student/add" element={<AddStudent/>}/>
        <Route path="/student/update/:id" element={<UpdateStudent/>}/>
        <Route path="/student/view/:id" element={<ViewStudent/>}/>
        <Route path="/student/delete/:id" element={<DeleteStudent/>}/>
        <Route path="/students/view" element={<TableStudent/>}/>
      </Routes>
  </Router>
  </>
  );
}

export default App;
