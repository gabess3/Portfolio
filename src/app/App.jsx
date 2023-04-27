import "./App.css";
import Header from "../components/header";
import Footer from "../components/footer";
import TechStack from "../components/techStack";
import Project from "../components/project";
import ContactForm from "../components/contactForm";
import Navigation from "../components/navigation";
import ScrollToTop from "../components/scrollToTop";

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <TechStack />
      <Project />
      <ContactForm />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
