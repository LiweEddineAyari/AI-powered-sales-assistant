import React from 'react';
import { Link } from 'react-router-dom'; // For routing if needed
import Logo from '../assets/images/logo/logo.svg'; // Update path to logo

const Footer = () => {
  return (
    <footer data-wow-delay="0.4s" className="relative z-10 pb-17.5 lg:pb-22.5 xl:pb-27.5">
      {/* Background shapes */}
      <div className="absolute bottom-0 left-0 w-full flex flex-col gap-3 -z-1 opacity-50">
        {[1.24, 2.47, 3.71, 4.99, 6.19, 7.42, 8.66, 9.90, 13].map((height, index) => (
          <div
            key={index}
            className="w-full h-[1px] footer-bg-gradient"
            style={{ height: `${height}px` }}
          />
        ))}
      </div>

      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0 relative pt-17.5">
        <div className="w-full h-[1px] footer-divider-gradient absolute top-0 left-0" />

        <div className="flex flex-wrap justify-between">
          {/* Logo & Copyright Section */}
          <div className="mb-10 max-w-[571px] w-full">
            <Link to="/">
              <img src={Logo} alt="Logo" className="mb-8.5 inline-block" />
            </Link>

            <p className="mb-12 xl:w-4/5">
              AI writing tool is designed to empower you with exceptional writing capabilities.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-5">
              <a href="#" className="hover:text-white ease-in duration-300">
                <svg
                  className="fill-current"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  {/* Facebook icon path */}
                  <path
                    d="M13 21.9506C18.0533 21.4489 22 17.1853 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 16.8379 5.43552 20.8734 10 21.8V16H7V13H10V9.79586C10 7.47449 11.9695 5.64064 14.285 5.80603L17 5.99996V8.99996H16 13V21.9506Z"
                  />
                </svg>
              </a>

              <a href="#" className="hover:text-white ease-in duration-300">
                <svg
                  className="fill-current"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  {/* Instagram icon path */}
                  <path
                    d="M7.6125 21.5251C16.4625 21.5251 21.2625 14.2126 21.2625 7.87509C21.2625 7.72509 21.2625 7.46259 21.225 7.23759C22.1625 6.56259 22.9875 5.70009 23.625 4.76259C22.725 5.17509 21.825 5.40009 20.8875 5.51259C21.9 4.91259 22.65 3.97509 22.9875 2.8501C22.05 3.3751 21.075 3.78759 19.9125 4.01259C19.0125 3.0751 17.8125 2.4751 16.425 2.4751C13.7625 2.4751 11.5875 4.65009 11.5875 7.31259C11.5875 7.68759 11.625 8.06259 11.7 8.43759C7.8375 8.17509 4.3125 6.26259 1.9125 3.3751C1.5 4.12509 1.275 4.91259 1.275 5.77509C1.275 7.46259 2.1375 8.88759 3.45 9.75009C2.6625 9.71259 1.9125 9.48759 1.275 9.15009C1.275 9.18759 1.275 9.18759 1.275 9.18759C1.275 11.4751 2.925 13.4626 5.1 13.9126C4.6875 14.0251 4.2375 14.0626 3.9 14.0626C3.6 14.0626 3.2625 14.0251 3 13.9501C3.6375 15.8626 5.4 17.2501 7.5 17.2876C5.85 18.5626 3.7875 19.3501 1.575 19.3501C1.125 19.4251 0.75 19.3501 0.375 19.3126C2.4 20.7376 4.9125 21.5251 7.6125 21.5251Z"
                  fill="#6B7280"
                />
              </svg>
            </a>

            <a href="#" className="hover:text-white ease-in duration-300">
              <svg
                className="fill-current"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                {/* Twitter icon path */}
                <path
                  d="M7.6125 21.5251C16.4625 21.5251 21.2625 14.2126 21.2625 7.87509C21.2625 7.72509 21.2625 7.46259 21.225 7.23759C22.1625 6.56259 22.9875 5.70009 23.625 4.76259C22.725 5.17509 21.825 5.40009 20.8875 5.51259C21.9 4.91259 22.65 3.97509 22.9875 2.8501C22.05 3.3751 21.075 3.78759 19.9125 4.01259C19.0125 3.0751 17.8125 2.4751 16.425 2.4751C13.7625 2.4751 11.5875 4.65009 11.5875 7.31259C11.5875 7.68759 11.625 8.06259 11.7 8.43759C7.8375 8.17509 4.3125 6.26259 1.9125 3.3751C1.5 4.12509 1.275 4.91259 1.275 5.77509C1.275 7.46259 2.1375 8.88759 3.45 9.75009C2.6625 9.71259 1.9125 9.48759 1.275 9.15009C1.275 9.18759 1.275 9.18759 1.275 9.18759C1.275 11.4751 2.925 13.4626 5.1 13.9126C4.6875 14.0251 4.2375 14.0626 3.9 14.0626C3.6 14.0626 3.2625 14.0251 3 13.9501C3.6375 15.8626 5.4 17.2501 7.5 17.2876C5.85 18.5626 3.7875 19.3501 1.575 19.3501C1.125 19.4251 0.75 19.3501 0.375 19.3126C2.4 20.7376 4.9125 21.5251 7.6125 21.5251Z"
                  fill="#6B7280"
                />
              </svg>
            </a>
          </div>

          <p className="font-medium mt-5.5 text-[#6B7280]">
            AI Tool, LLC. All rights reserved.
          </p>
        </div>

        {/* Links Columns */}
        <div className="max-w-[571px] w-full">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-10">
            {/* Products Column */}
            <div>
              <h5 className="font-semibold text-white mb-5">Products</h5>
              <ul className="flex flex-col gap-3.5">
                <li>
                  <a
                    href="/#"
                    className="font-medium ease-in duration-300 hover:text-white"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="/#"
                    className="font-medium ease-in duration-300 hover:text-white"
                  >
                    Integrations
                  </a>
                </li>
                <li>
                  <a
                    href="/#"
                    className="font-medium ease-in duration-300 hover:text-white"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="/#"
                    className="font-medium ease-in duration-300 hover:text-white"
                  >
                    Changelog
                  </a>
                </li>
                <li>
                  <a
                    href="/#"
                    className="font-medium ease-in duration-300 hover:text-white"
                  >
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h5 className="font-semibold text-white mb-5">Company</h5>
              <ul className="flex flex-col gap-3.5">
                <li>
                  <a
                    href="/#"
                    className="font-medium ease-in duration-300 hover:text-white"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/#"
                    className="font-medium ease-in duration-300 hover:text-white"
                  >
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/#"
                    className="font-medium ease-in duration-300 hover:text-white"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="/#"
                    className="font-medium ease-in duration-300 hover:text-white"
                  >
                    Community
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h5 className="font-semibold text-white mb-5">Support</h5>
              <ul className="flex flex-col gap-3.5">
                <li>
                  <a
                    href="/#"
                    className="font-medium ease-in duration-300 hover:text-white"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="/#"
                    className="font-medium ease-in duration-300 hover:text-white"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="/#"
                    className="font-medium ease-in duration-300 hover:text-white"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;