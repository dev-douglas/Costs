import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/Home'
import Company from './pages/Company'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import NewProject from './pages/NewProject'
import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'
import Container from './layouts/Container'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container customClass='min-height'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/new-project" element={<NewProject />} />
        </Routes>
      </Container>
      <Footer />
      
    </BrowserRouter>
  );
}