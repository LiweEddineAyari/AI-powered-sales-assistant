import './App.css';

import { useEffect } from 'react';

import WOW from 'wowjs';
import Swiper from 'swiper'; // Core Swiper
import { Autoplay } from 'swiper/modules'; 
import 'swiper/css';
import './assets/css/animate.css'; 
import './assets/css/star.css';
import './assets/css/style.css';
import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./layout/index"
import Home from './pages/Home';


import { BrowserRouter } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/about';

function App() {
  useEffect(() => {

    window.wow = new WOW.WOW({
      mobile: false,
    });
    window.wow.init({
      offset: 50,
    });

    const clientsCarousel = new Swiper('.clients-carousel', {
      modules: [Autoplay],
      slidesPerView: 'auto',
      spaceBetween: 64,
      loop: true,
      speed: 5000,
      noSwiping: true,
      noSwipingClass: 'swiper-slide',
      autoplay: {
        delay: 0,
        disableOnInteraction: true,
      },
    });

    const scrollActive = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        const links = document.querySelectorAll(
          `.nav__menu a[href*='${sectionId}']`
        );
        links.forEach((link) => {
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            link.classList.add('!text-white', 'nav-gradient');
          } else {
            link.classList.remove('!text-white', 'nav-gradient');
          }
        });
      });
    };

    window.addEventListener('scroll', scrollActive);

    class Highlighter {
      constructor(containerElement) {
        this.container = containerElement;
        this.boxes = Array.from(this.container.children);
        this.mouse = { x: 0, y: 0 };
        this.containerSize = { w: 0, h: 0 };
        this.initContainer = this.initContainer.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.init();
      }

      initContainer() {
        this.containerSize.w = this.container.offsetWidth;
        this.containerSize.h = this.container.offsetHeight;
      }

      onMouseMove(event) {
        const { clientX, clientY } = event;
        const rect = this.container.getBoundingClientRect();
        const { w, h } = this.containerSize;
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        const inside = x < w && x > 0 && y < h && y > 0;
        if (inside) {
          this.mouse.x = x;
          this.mouse.y = y;
          this.boxes.forEach((box) => {
            const boxX =
              -(box.getBoundingClientRect().left - rect.left) + this.mouse.x;
            const boxY =
              -(box.getBoundingClientRect().top - rect.top) + this.mouse.y;
            box.style.setProperty('--mouse-x', `${boxX}px`);
            box.style.setProperty('--mouse-y', `${boxY}px`);
          });
        }
      }

      init() {
        this.initContainer();
        window.addEventListener('resize', this.initContainer);
        window.addEventListener('mousemove', this.onMouseMove);
      }
    }

    const highlighters = document.querySelectorAll('.data-highlighter');
    highlighters.forEach((highlighter) => {
      new Highlighter(highlighter);
    });

    return () => {
      window.removeEventListener('scroll', scrollActive);
      highlighters.forEach((highlighter) => {
      });
    };
  }, []);

  return (
    <BrowserRouter>
        <Routes> 
          <Route path="/*" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="about" element={<About />} />

        </Route>
      </Routes> 
    </BrowserRouter>
 );
}

export default App;
