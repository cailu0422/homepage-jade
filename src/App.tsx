import { useState } from 'react';
import Header from './componet/Header';
import Content from './componet/Content';
import Footer from './componet/Footer';
import Menu from './componet/Menu';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuName, setMenuName] = useState('island');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <section className={menuOpen ? 'main-structure active' : 'main-structure'}>
        <Header menuOpen={menuOpen} setOpenMenu={toggleMenu}></Header>
        <Content menuName={menuName}></Content>
        <Footer></Footer>
      </section>
      <Menu setMenuName={setMenuName} setOpenMenu={toggleMenu}></Menu>
    </>
  );
}

export default App;
