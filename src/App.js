import Estados from "./pages/Estados";
import Home from "./pages/Home";

import {Routes, Route} from 'react-router-dom';
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";

function App() {
  return (
    <>
     <Routes>
       <Route path='/' element={<Layout/>}>
      <Route index element={<Home />} /> 
      <Route path="estados" element={<Estados />} /> 
      <Route path="*" element={<NotFound />} /> 
       </Route>
      </Routes> 
    </>
  );
}

export default App;
