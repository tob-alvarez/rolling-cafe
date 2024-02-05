import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
// import Administrador from './components/pages/Administrador'
import Inicio from './components/pages/Inicio'
import Layout from './components/common/Layout';
import Error404 from './components/pages/Error404';

function App() {
 

  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/*" element={<Inicio />} />
            <Route path="/error404" element={<Error404 />} />
          </Routes>
        </Layout>
      </Router>
    </>
  )
}

export default App  
    {/* <Administrador></Administrador> */}