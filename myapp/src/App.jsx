import React from 'react';
import Sidebar from "./components/SideBar"
import Header from './components/Header';
import MainContent from './components/Main';

const App = () => {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="flex-1 bg-gray-100">
        <Header />
        <MainContent />
      </div>
    </div>
  );
};

export default App;
