import './App.css';
import { Features } from './Components/Features.jsx';
import './Components/HeaderSection.jsx'
import { HeaderSection } from './Components/HeaderSection.jsx';
import { Section } from './Components/Section.jsx';

function App() {
  return (
    <div className="App">
     <HeaderSection></HeaderSection>
     <Section></Section>
     <Features></Features>
    </div>
  );
}

export default App;
