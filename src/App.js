import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
     <Header />
     <Body  />
     <Footer />
    </div>
  );
}

export default App;
