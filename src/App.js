import './App.css';
import { Features } from './Components/Features.jsx';
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
    </div>
  );
}

export default App;
