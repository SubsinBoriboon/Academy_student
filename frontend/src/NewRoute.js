import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Showmember from './Component/Showmember';
import Searchmember from './Component/Searchmember';
import Formcomponent from './Component/Formcomponent';
import Editcomponent from './Component/EditComponent';
const NewRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/member" element={<Showmember />} />
        <Route path="/search" element={<Searchmember />} />
        <Route path="/create" element={<Formcomponent />} />
        <Route path="/edit/:id" element={<Editcomponent />} />
      </Routes>
    </Router>
  );
};
export default NewRoute;
