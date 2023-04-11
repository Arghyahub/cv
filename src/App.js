import './App.css';

import { Navbar,Header,About,Projects,Skills,Footer } from './components'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
