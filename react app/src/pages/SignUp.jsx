import React, { useState } from 'react';
import authService from '../services/auth'; // Adjust path based on your file structure
import signinIcon from '../assets/images/signin/sigin.svg';

const SignUp = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { value, type } = e.target;
    const name = type === 'text' ? 'nom' : type === 'email' ? 'email' : 'password';
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      setError(null);
      setSuccess(false);
      const response = await authService.signup(formData);

      setSuccess(true);
      setFormData({ nom: '', email: '', password: '' });
      console.log('Signup successful:', response);
    } catch (err) {
      setError(err.message || 'An error occurred during signup');
    } finally {
      setLoading(false);
    }
  };

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
          <h1 className="font-extrabold text-heading-2 text-white mb-5.5">Sign up</h1>
          <ul className="flex items-center justify-center gap-2">
            <li className="font-medium"><a href="index.html">Home</a></li>
            <li className="font-medium">/ Sign up</li>
          </ul>
        </div>
      </section>
      {/* ===== Breadcrumb Section End ===== */}

      {/* ===== SignUp Form Start ===== */}
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
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4 relative">
                      <span className="absolute top-1/2 -translate-y-1/2 left-6">
                        {/* Name SVG */}
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {/* ... SVG path remains same ... */}
                        </svg>
                      </span>
                      <input
                        type="text"
                        placeholder="Enter your username"
                        value={formData.nom}
                        onChange={handleChange}
                        className="w-full border border-white/[0.12] bg-transparent rounded-lg focus:border-purple pl-14.5 pr-4 py-3.5 font-medium outline-none focus-visible:shadow-none"
                        required
                      />
                    </div>

                    <div className="mb-4 relative">
                      <span className="absolute top-1/2 -translate-y-1/2 left-6">
                        {/* Email SVG */}
                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {/* ... SVG path remains same ... */}
                        </svg>
                      </span>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-white/[0.12] bg-transparent rounded-lg focus:border-purple pl-14.5 pr-4 py-3.5 font-medium outline-none focus-visible:shadow-none"
                        required
                      />
                    </div>

                    <div className="mb-5 relative">
                      <span className="absolute top-1/2 -translate-y-1/2 left-6">
                        {/* Password SVG */}
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {/* ... SVG path remains same ... */}
                        </svg>
                      </span>
                      <input
                        type="password"
                        placeholder="Confirm password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full border border-white/[0.12] bg-transparent rounded-lg focus:border-purple pl-14.5 pr-4 py-3.5 font-medium outline-none focus-visible:shadow-none"
                        required
                      />
                    </div>

                    {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                    {success && <p className="text-green-500 text-center mb-4">Signup successful!</p>}

                    <button
                      type="submit"
                      disabled={loading}
                      className={`hero-button-gradient flex justify-center w-full rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 ${
                        loading ? 'opacity-60 cursor-not-allowed' : 'hover:opacity-80'
                      }`}
                    >
                      {loading ? 'Signing up...' : 'Sign up with AI Tool'}
                    </button>

                    <p className="text-center font-medium text-white mt-5">
                      Already have an account?
                      <a href="/signin" className="text-purple"> Sign in Here</a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== SignUp Form End ===== */}
    </main>
  );
};

export default SignUp;