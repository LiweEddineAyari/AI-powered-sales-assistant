import React from 'react';
import signinIcon from '../assets/images/signin/sigin.svg'
import authService from '../services/auth'; // Adjust path based on your file structure

const SignIn = () => {
  return (
    <main>
      {/* ===== Breadcrumb Section Start ===== */}
      <section className="relative z-10 pt-30 lg:pt-35 xl:pt-40 pb-18">
        {/* bg shapes */}
        <div className="absolute top-25 left-0 w-full flex flex-col gap-3 -z-1 opacity-50">
          <div className="w-full h-[1.24px] footer-bg-gradient"></div>
          <div className="w-full h-[2.47px] footer-bg-gradient"></div>
          <div className="w-full h-[3.71px] footer-bg-gradient"></div>
          <div className="w-full h-[4.99px] footer-bg-gradient"></div>
          <div className="w-full h-[6.19px] footer-bg-gradient"></div>
          <div className="w-full h-[7.42px] footer-bg-gradient"></div>
          <div className="w-full h-[8.66px] footer-bg-gradient"></div>
          <div className="w-full h-[9.90px] footer-bg-gradient"></div>
          <div className="w-full h-[13px] footer-bg-gradient"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-dark/0 to-dark -z-1"></div>

        <div className="text-center px-4">
          <h1 className="font-extrabold text-heading-2 text-white mb-5.5">Sign in</h1>
          <ul className="flex items-center justify-center gap-2">
            <li className="font-medium"><a href="/">Home</a></li>
            <li className="font-medium">/ Sign in</li>
          </ul>
        </div>
      </section>
      {/* ===== Breadcrumb Section End ===== */}

      {/* ===== SignIn Form Start ===== */}
      <section className="pt-17.5 pb-17.5 lg:pb-22.5 xl:pb-27.5">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
          <div className="wow fadeInUp rounded-3xl bg-white/[0.05]">
            <div className="flex">
              <div className="hidden lg:block w-full lg:w-1/2">
                <div className="relative py-20 pl-17.5 pr-22">
                  <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-white/0 via-white/20 to-white/0"></div>

                  <h2 className="max-w-[292px] font-bold text-white text-heading-4 mb-10">
                    Unlock the Power of Writing Tool
                  </h2>
                  <img src={signinIcon} alt="signin" />
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="py-8 sm:py-20 pl-8 sm:pl-21 pr-8 sm:pr-20">
                  <form>
                    <div className="mb-4 relative">
                      <span className="absolute top-1/2 -translate-y-1/2 left-6">
                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M13.9998 0.399994H1.9998C1.1498 0.399994 0.424805 1.09999 0.424805 1.97499V10.075C0.424805 10.925 1.1248 11.65 1.9998 11.65H13.9998C14.8498 11.65 15.5748 10.95 15.5748 10.075V1.94999C15.5748 1.09999 14.8498 0.399994 13.9998 0.399994ZM13.9998 1.52499C14.0248 1.52499 14.0498 1.52499 14.0748 1.52499L7.9998 5.42499L1.9248 1.52499C1.9498 1.52499 1.9748 1.52499 1.9998 1.52499H13.9998ZM13.9998 10.475H1.9998C1.7498 10.475 1.5498 10.275 1.5498 10.025V2.62499L7.3998 6.37499C7.5748 6.49999 7.7748 6.54999 7.9748 6.54999C8.1748 6.54999 8.3748 6.49999 8.5498 6.37499L14.3998 2.62499V10.05C14.4498 10.3 14.2498 10.475 13.9998 10.475Z"
                            fill="#918EA0"
                          />
                        </svg>
                      </span>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full border border-white/[0.12] bg-transparent rounded-lg focus:border-purple pl-14.5 pr-4 py-3.5 font-medium outline-none focus-visible:shadow-none"
                      />
                    </div>

                    <div className="mb-5 relative">
                      <span className="absolute top-1/2 -translate-y-1/2 left-6">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_368_6544)">
                            <path
                              d="M14.0752 1.92501C13.1252 0.975012 11.8502 0.450012 10.5002 0.450012C9.1502 0.450012 7.8502 0.975012 6.9002 1.92501C5.6252 3.20001 5.1252 5.00001 5.5752 6.75001L0.725195 11.575C0.550195 11.75 0.450195 12 0.450195 12.275V14.6C0.450195 15.125 0.875195 15.575 1.4252 15.575H3.7502C4.0002 15.575 4.2502 15.475 4.4502 15.3L5.0252 14.725C5.2252 14.525 5.3502 14.225 5.3002 13.925V13.875L5.6002 13.85C6.0752 13.8 6.4252 13.45 6.4752 12.975L6.5002 12.675H6.5502C6.8252 12.7 7.1002 12.625 7.3252 12.425C7.5252 12.25 7.6502 11.975 7.6502 11.7V11.5H7.8252C8.0752 11.5 8.3252 11.4 8.5002 11.225L9.3252 10.425C11.0502 10.85 12.8502 10.375 14.1002 9.12501C16.0502 7.12501 16.0502 3.90001 14.0752 1.92501ZM13.2752 8.30001C12.2502 9.32501 10.7252 9.70001 9.3002 9.22501C9.1002 9.15001 8.8752 9.20001 8.7252 9.35001L7.7252 10.35H7.0502C6.7502 10.35 6.4752 10.6 6.4752 10.925V11.525L6.0252 11.475C5.8752 11.45 5.7252 11.5 5.6002 11.6C5.4752 11.7 5.4002 11.825 5.4002 11.975L5.3252 12.725L4.5752 12.8C4.4252 12.825 4.2752 12.9 4.2002 13C4.1002 13.125 4.0502 13.275 4.0752 13.425L4.1502 13.975L3.6752 14.45H1.5752V12.35L6.6002 7.32501C6.7502 7.17501 6.8002 6.95001 6.7252 6.75001C6.2752 5.32501 6.6252 3.80001 7.6752 2.75001C8.4252 2.00001 9.4002 1.60001 10.4752 1.60001C11.5252 1.60001 12.5252 2.00001 13.2752 2.75001C14.8252 4.25001 14.8252 6.75001 13.2752 8.30001Z"
                              fill="#918EA0"
                            />
                            <path
                              d="M11.3498 2.875C10.8748 2.875 10.4248 3.05 10.0748 3.4C9.3748 4.1 9.3748 5.225 10.0748 5.925C10.4248 6.275 10.8748 6.45 11.3498 6.45C11.8248 6.45 12.2748 6.275 12.6248 5.925C12.9748 5.575 13.1498 5.125 13.1498 4.65C13.1498 4.175 12.9748 3.725 12.6248 3.375C12.2748 3.05 11.8248 2.875 11.3498 2.875ZM11.8248 5.125C11.5748 5.375 11.1248 5.375 10.8748 5.125C10.6248 4.875 10.6248 4.45 10.8748 4.175C10.9998 4.05 11.1748 3.975 11.3498 3.975C11.5248 3.975 11.6998 4.05 11.8248 4.175C11.9498 4.3 12.0248 4.475 12.0248 4.65C12.0248 4.825 11.9498 5 11.8248 5.125Z"
                              fill="#918EA0"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_368_6544">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <input
                        type="password"
                        placeholder="Password"
                        className="w-full border border-white/[0.12] bg-transparent rounded-lg focus:border-purple pl-14.5 pr-4 py-3.5 font-medium outline-none focus-visible:shadow-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="mt-5 hero-button-gradient flex justify-center w-full rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80"
                    >
                      Sign in 
                    </button>

                    <p className="text-center font-medium text-white mt-5">
                      Don't have an account?
                      <a href="/signup" className="text-purple">Sign Up for Free</a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== SignIn Form End ===== */}
    </main>
  );
};

export default SignIn;