
import './App.css';
import AboutUsSection from './components/AboutUsSection';
import ArticlePage from './components/ArticlePage';
import ArticleSection from './components/ArticleSection';
import ContactUsPage from './components/ContactUsPage';
import CoursesSection from './components/CoursesSection';
import Hero from './components/Hero';
import Home from './components/Home';
//import Home from './components/Home';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';


// import Home from './Home';
// import About from './About';
// import Services from './Services';
// import Contact from './Contact';

const App = () => {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
    </Routes>
    <Hero/>
    <CoursesSection/>
      <AboutUsSection/>
      <ArticleSection/>
      {/* //<ArticlePage/> */}
      <ContactUsPage/>
    </div>
    
  );
};

export default App;




