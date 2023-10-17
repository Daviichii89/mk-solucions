import { useEffect, useState } from 'react';

import { Link } from 'react-scroll';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import styles from './Navbar.module.css';
import { useScrollPosition } from '../hooks/useScrollPosition';
import mkLogo from '/assets/logo-mario.jpg'

export const Navbar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  const detectDimension = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  useEffect(() => {
    window.addEventListener('resize', detectDimension)
    windowDimension.width > 800 && setNavBarOpen(false)
    return () => {
      window.removeEventListener('resize', detectDimension)
    }
  }, [windowDimension])

  const links = [
    {
      id: 1,
      link: 'Home',
      enlace: 'Inicio',
    },
    {
      id: 2,
      link: 'Services',
      enlace: 'Servicios',
    },
    {
      id: 3,
      link: 'Warranty',
      enlace: 'Garantía',
    },
    {
      id: 4,
      link: 'HowWeWork',
      enlace: 'ComoTrabajamos',
    },
  ];

  const scrollPosition = useScrollPosition();

  return (
    <div 
      className={
        navBarOpen
        ? styles.navOpen
        : scrollPosition > 0
        ? styles.navOnScroll 
        : styles.navBar 
      }
    >
      {!navBarOpen && <img src={mkLogo} alt="MK_Solucions" className={styles.logoImg} />}
      {!navBarOpen && windowDimension.width < 800 ? (
        <AiOutlineMenu 
          className={styles.menuImg}
          color="#010101"
          size={25}
          onClick={() => setNavBarOpen(!navBarOpen)}
        />
      ) : (
        windowDimension.width < 800 && (
        <AiOutlineClose
          color="#f1f1f1"
          size={25}
          onClick={() => setNavBarOpen(!navBarOpen)}
        />
      ))}
      {
        navBarOpen && (
        <ul className={styles.linksContainer}>
          {links.map(({ id, link, enlace }) => (
            <div key={id}>
              <Link
                onClick={() => setNavBarOpen(false)}
                to={link}
                smooth
                duration={500}
                className={styles.navLink}
              >
                {enlace === 'ComoTrabajamos' ? 'Cómo trabajamos' : enlace}
              </Link>
              <div className={styles.border}></div>
            </div>
          ))}
          <Link
            onClick={() => setNavBarOpen(false)}
            to="Contact"
            smooth
            duration={500}
            className={styles.navLink}
          >
            Contacto
          </Link>
        </ul>
      )}
      {
        ( windowDimension.width > 800) && (
          <ul className={styles.linksContainer}>
          {links.map(({ id, link, enlace }) => (
            <div key={id}>
              <Link
                onClick={() => setNavBarOpen(false)}
                to={link}
                smooth
                duration={500}
                className={styles.navLink}
              >
                {enlace === 'ComoTrabajamos' ? 'Cómo trabajamos' : enlace}
              </Link>
              <div className={styles.border}></div>
            </div>
          ))}
          <Link
            onClick={() => setNavBarOpen(false)}
            to="Contact"
            smooth
            duration={500}
            className={styles.navLink}
          >
            Contacto
          </Link>
        </ul>
        )
      }
    </div>
  );
};
