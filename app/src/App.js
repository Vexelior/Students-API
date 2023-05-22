import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import TableStudent from './components/Students/Table/StudentsTable'
import AddStudent from './components/Students/Add/StudentAdd';
import UpdateStudent from './components/Students/Update/StudentUpdate';
import ViewStudent from './components/Students/View/StudentView';
import DeleteStudent from './components/Students/Delete/StudentDelete';

const App = () => {
  return (
    <>
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
