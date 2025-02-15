import './App.css';
import { Blog } from './Components/Blog.jsx';
import { Faq } from './Components/Faq.jsx';
import { Features } from './Components/Features.jsx';
import { Footer } from './Components/Footer.jsx';
import './Components/HeaderSection.jsx'
import { HeaderSection } from './Components/HeaderSection.jsx';
import { Section } from './Components/Section.jsx';
import { Testimonal } from './Components/Testimonal.jsx';

function App() {
  return (
    <div className="App">
     <HeaderSection></HeaderSection>
     <Section></Section>
     <Features></Features>
     <Testimonal></Testimonal>
     <Faq></Faq>
     <Blog></Blog>
     <Footer></Footer>
    </div>
  );
}

export default App;
