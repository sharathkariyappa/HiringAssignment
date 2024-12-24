import React from 'react';
import Sidebar from "./components/SideBar"
import Header from './components/Header';
import MainContent from './components/Main';
import AddStudent from './pages/Addstudent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="flex-1 bg-gray-100">
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/Add-student" element={<AddStudent />} />
          </Routes>
        </Router>
        {/* <MainContent /> */}
      </div>
    </div>
  );
};

export default App;
