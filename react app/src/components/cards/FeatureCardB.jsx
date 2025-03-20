import React from 'react';

const FeatureCardB = ({
  title,
  description,
  icon,
  bigIcon,
  colSpan,
  showShapes,
  shapes,
}) => {
  return (
    <div className={`sm:col-span-${colSpan}`}>
      <div
        className={`relative rounded-3xl features-box-border ${
          showShapes ? 'overflow-hidden' : ''
        }`}
      >
        <div
          className={`relative ${
            showShapes ? 'overflow-hidden' : ''
          } rounded-3xl p-10 xl:p-15 box-hover`}
        >
          <div className="flex items-center justify-between relative z-20">
            <div className="max-w-[477px] w-full">
              <span
                className="hero-subtitle-gradient relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-4.5 rounded-full"
              >
                <img src={icon} alt="icon" />
                <span className="hero-subtitle-text">{title}</span>
              </span>
              <h3 className="text-white mb-4.5 font-bold text-heading-4">
                {title}
              </h3>
              <p className="font-medium">{description}</p>
              <a
                href="#"
                className="features-button-gradient relative inline-flex items-center gap-1.5 rounded-full py-3 px-6 text-white text-sm ease-in duration-300 hover:shadow-button"
              >
                Learn more
                <svg
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3992 5.60002L8.22422 0.350024C7.99922 0.125024 7.64922 0.125024 7.42422 0.350024C7.19922 0.575024 7.19922 0.925025 7.42422 1.15002L11.6242 5.42503H0.999219C0.699219 5.42503 0.449219 5.67502 0.449219 5.97502C0.449219 6.27502 0.699219 6.55003 0.999219 6.55003H11.6742L7.42422 10.875C7.19922 11.1 7.19922 11.45 7.42422 11.675C7.52422 11.775 7.67422 11.825 7.82422 11.825C7.97422 11.825 8.12422 11.775 8.22422 11.65L13.3992 6.40002C13.6242 6.17502 13.6242 5.82502 13.3992 5.60002Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>

            <div className="max-w-[428px] w-full hidden sm:block">
              <img src={bigIcon} alt="icon" />
            </div>
          </div>

          {/* Background Shapes */}
          {showShapes && (
            <div
              className="absolute -z-10 pointer-events-none inset-0 overflow-hidden -mx-28"
            >
              <span className="absolute right-0 bottom-0">
                <img src={shapes?.shape1} alt="shape" />
              </span>
              <span className="absolute left-0 top-0">
                <img src={shapes?.shape2} alt="shape" />
              </span>
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0">
                <img src={shapes?.shape3} alt="blur" className="max-w-none" />
              </span>
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0">
                <img src={shapes?.shape4} alt="blur" className="max-w-none" />
              </span>
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0">
                <img src={shapes?.shape5} alt="blur" className="max-w-none" />
              </span>
              <span className="absolute right-0 top-0">
                <img src={shapes?.shape6} alt="shape" className="max-w-none" />
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeatureCardB;