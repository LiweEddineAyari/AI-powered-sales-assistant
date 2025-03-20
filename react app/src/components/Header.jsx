import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo/logo.svg"
const Header = () => {
  const [stickyMenu, setStickyMenu] = useState(false);
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setStickyMenu(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentPath = location.pathname.split('/').pop() || 'home';

  return (
    <header 
      className={`fixed left-0 top-0 w-full z-9999 py-7 lg:py-0 ${stickyMenu ? 
        'bg-dark/70 backdrop-blur-lg shadow !py-4 lg:!py-0 transition duration-100 before:absolute before:w-full before:h-[1px] before:bottom-0 before:left-0 before:features-row-border' : 
        ''}`}
    >
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0 lg:flex items-center justify-between relative">
        <div className="w-full lg:w-1/4 flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>

          {/* Hamburger Toggle BTN */}
          <button 
            className="lg:hidden block" 
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <span className="block relative cursor-pointer w-5.5 h-5.5">
              <span className="du-block absolute right-0 w-full h-full">
                {[...Array(3)].map((_, i) => (
                  <span 
                    key={i}
                    className={`block relative top-0 left-0 bg-white rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-${i * 150} ${!navigationOpen ? '!w-full delay-300' : ''}`}
                  />
                ))}
              </span>
              <span className="du-block absolute right-0 w-full h-full rotate-45">
                <span 
                  className={`block bg-white rounded-sm ease-in-out duration-200 delay-300 absolute left-2.5 top-0 w-0.5 h-full ${!navigationOpen ? '!h-0 delay-[0]' : ''}`}
                />
                <span 
                  className={`block bg-white rounded-sm ease-in-out duration-200 delay-400 absolute left-0 top-2.5 w-full h-0.5 ${!navigationOpen ? '!h-0 delay-200' : ''}`}
                />
              </span>
            </span>
          </button>
        </div>

        <div 
          className={`w-full lg:w-3/4 h-0 lg:h-auto invisible lg:visible lg:flex items-center justify-between ${navigationOpen ? 
            '!visible bg-dark shadow-lg relative !h-auto max-h-[400px] overflow-y-scroll rounded-md mt-4 p-7.5' : 
            ''}`}
        >
          <nav>
            <ul className="flex lg:items-center flex-col lg:flex-row gap-5 lg:gap-2">
              <li className={`nav__menu lg:py-7 ${stickyMenu ? 'lg:!py-4' : ''}`}>
                <Link 
                  to="/" 
                  className={`relative text-white/80 text-sm py-1.5 px-4 border border-transparent hover:text-white hover:nav-gradient ${currentPath === 'home' ? '!text-white nav-gradient' : ''}`}
                >
                  Home
                </Link>
              </li>
              <li className={`nav__menu lg:py-7 ${stickyMenu ? 'lg:!py-4' : ''}`}>
                <Link 
                  to="/#features" 
                  className="relative text-white/80 text-sm py-1.5 px-4 border border-transparent hover:text-white hover:nav-gradient"
                >
                  Features
                </Link>
              </li>
              <li className={`nav__menu lg:py-7 ${stickyMenu ? 'lg:!py-4' : ''}`}>
                <Link 
                  to="/#pricing" 
                  className="relative text-white/80 text-sm py-1.5 px-4 border border-transparent hover:text-white hover:nav-gradient"
                >
                  Pricing
                </Link>
              </li>
              <li className={`nav__menu lg:py-7 ${stickyMenu ? 'lg:!py-4' : ''}`}>
                <Link 
                  to="/#support" 
                  className="relative text-white/80 text-sm py-1.5 px-4 border border-transparent hover:text-white hover:nav-gradient"
                >
                  Support
                </Link>
              </li>
              <li className={`nav__menu lg:py-7 ${stickyMenu ? 'lg:!py-4' : ''}`}>
                <Link 
                  to="/about" 
                  className="relative text-white/80 text-sm py-1.5 px-4 border border-transparent hover:text-white hover:nav-gradient"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-6 mt-7 lg:mt-0">
            <Link 
              to="/signin" 
              className="text-white text-sm hover:text-opacity-75"
            >
              Sign in
            </Link>

            <Link 
              to="/signup" 
              className="button-border-gradient relative rounded-lg text-white text-sm flex items-center gap-1.5 py-2 px-4.5 shadow-button hover:button-gradient-hover hover:shadow-none"
            >
              Sign up
              <svg className="mt-0.5" width="16" height="16" viewBox="0 0 16 16">
                <path d="M14.4002 7.60002L9.2252 2.35002C9.0002 2.12502 8.6502 2.12502 8.4252 2.35002C8.2002 2.57502 8.2002 2.92502 8.4252 3.15002L12.6252 7.42502H2.0002C1.7002 7.42502 1.4502 7.67502 1.4502 7.97502C1.4502 8.27502 1.7002 8.55003 2.0002 8.55003H12.6752L8.4252 12.875C8.2002 13.1 8.2002 13.45 8.4252 13.675C8.5252 13.775 8.6752 13.825 8.8252 13.825C8.9752 13.825 9.1252 13.775 9.2252 13.65L14.4002 8.40002C14.6252 8.17502 14.6252 7.82503 14.4002 7.60002Z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>  
    </header>
  );

}

export default Header;