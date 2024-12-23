import React from 'react';
import Sidebar from "./components/SideBar"
import Header from './components/Header';

const App = () => {
  return (
    <div className="flex h-screen">
      <div>
        <Sidebar />
      </div>
      <div className="flex-1 bg-gray-100">
        <Header />
      </div>
    </div>
  );
};

export default App;
