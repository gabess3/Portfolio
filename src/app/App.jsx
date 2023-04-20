import './App.css';
import Header from '../components/header';
import Footer from '../components/footer';
import TechStack from '../components/techStack';
import Project from '../components/project';
import ContactForm from '../components/contactForm';


function App() {
  return (

    <div className="App">
      <Header />
      <TechStack />
      <Project />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
