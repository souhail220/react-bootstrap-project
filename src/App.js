import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import { AppHero } from "./components/Hero";
import AppAbout from "./components/About";
import Services from "./components/Services";
import { Work } from "./components/Work";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { Blog } from "./components/Blog";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header id="header">
        <Header />
      </header>
      <main>
        <AppHero />
        <AppAbout />
        <Services />
        <Work />
        <Team />
        <Testimonials />
        <Pricing />
        <Blog />
        <Contact />
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
