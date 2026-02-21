import { useState } from "react";
import Navbar from "./components/Navbar";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Subcategories from "./pages/Subcategories";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Series from "./pages/Series";
import About from "./pages/About";
import Account from "./pages/Account";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import ScrollTop from "./components/ScrollTop";
import PyqSubcategories from "./pages/PyqSubcategories";
import PyqPapers from "./pages/PyqPapers";
import PyqQuiz from "./pages/PyqQuiz";
import CurrentAffairs from "./pages/CurrentAffairs";
import CaDetails from "./pages/CaDetails";
import CaQuiz from "./pages/CaQuiz";




function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
   <HashRouter>
       <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/result" element={<Result />} />
        <Route path="/subject/:subject" element={<Subcategories />} />
        <Route path="/series/:subject/:subcategory" element={<Series />} />
        <Route path="/quiz/:subject/:subcategory/:series" element={<Quiz />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={ <ProtectedRoute isLoggedIn={isLoggedIn}><Account /></ProtectedRoute>}/>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/pyq/:exam" element={<PyqSubcategories />} />
        <Route path="/pyq/:exam/:post" element={<PyqPapers />} />
        <Route path="/pyq/:exam/:post/:year" element={<PyqQuiz />} />
        <Route path="/current-affairs" element={<CurrentAffairs />} />
        <Route path="/current-affairs/:id" element={<CaDetails />} />
        <Route path="/current-affairs/:id/quiz" element={<CaQuiz />} /> 


      </Routes>

     <ScrollTop />

  </HashRouter>
  );
}

export default App;
