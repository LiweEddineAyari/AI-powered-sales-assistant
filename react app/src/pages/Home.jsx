import React from 'react'

//hero section
import herosvg from '../assets/images/hero/hero.svg'
import blur from '../assets/images/blur/blur-01.svg'
import blur2 from '../assets/images/blur/blur-02.svg'
import blur3 from '../assets/images/blur/blur-03.svg'
import blur4 from '../assets/images/blur/blur-04.svg'
import blur5 from '../assets/images/blur/blur-05.svg'
import icontitle from '../assets/images/hero/icon-title.svg'

//keyFeatures
import icon1 from '../assets/images/features/icon-01.svg'
import icon2 from '../assets/images/features/icon-02.svg'
import icon3 from '../assets/images/features/icon-03.svg'
import icon4 from '../assets/images/features/icon-04.svg'
import icon5 from '../assets/images/features/icon-05.svg'
import icon6 from '../assets/images/features/icon-06.svg'

//features
import shape1 from '../assets/images/features/shape-01.png'
import shape2 from '../assets/images/features/shape-02.svg'
import shape3 from '../assets/images/features/shape-03.svg'
import bigicon from '../assets/./images/features/big-icon.svg'

//pricing 
import blur13 from '../assets/images/blur/blur-13.svg'
import blur14 from '../assets/images/blur/blur-14.svg'
import blur15 from '../assets/images/blur/blur-15.svg'
import pricingicon from '../assets/images/pricing/pricing-icon-01.svg'
import princingIcon4 from '../assets/images/pricing/pricing-icon-04.svg'
import princingIcon3 from '../assets/images/pricing/pricing-icon-03.svg'
import blur16 from '../assets/images/blur/blur-16.svg'
import blur17 from '../assets/images/blur/blur-17.svg'

//contact section
import blur19 from '../assets/images/blur/blur-19.svg'
import blur20 from '../assets/images/blur/blur-20.svg'
import blur21 from '../assets/images/blur/blur-21.svg'
import blog1 from '../assets/images/blog/blog-01.png'
import blog2 from '../assets/images/blog/blog-01.png'
import blog3 from '../assets/images/blog/blog-01.png'


//card seection le5ra 
import blur22 from '../assets/images/blur/blur-22.svg'
import blur23 from '../assets/images/blur/blur-23.svg'
import blur24 from '../assets/images/blur/blur-24.svg'
import grid from '../assets/images/cta/grid.svg'


import FeatureCard from '../components/cards/FeatureCard'



const Home = () => {
  const features = [
    {
      icon: icon2,
      title: 'Intelligent Writing Assistance',
      description: 'Our AI writing tool analyzes your content, suggests improvements',
      isRotated: false
    },
    {
      icon:icon2,
      title: 'Grammar and Spell Check',
      description: 'Say goodbye to embarrassing typos and grammar mistakes',
      isRotated: false
    },
    {
      icon: icon3,
      title: 'Plagiarism Detection',
      description: 'Originality is key, and our AI writing tool helps you maintain it',
      isRotated: false
    },
    {
      icon: icon4,
      title: 'Voice to Text Conversion',
      description: 'Transform your spoken words into written text easily & effortlessly',
      isRotated: true
    },
    {
      icon: icon5,
      title: 'Style and Tone Adaptation',
      description: 'Whether you need a professional, or positive tone it has everyone',
      isRotated: true
    },
    {
      icon: icon6,
      title: 'Content Generation',
      description: 'Need inspiration or assistance with generating content?',
      isRotated: true
    }
  ];


  return (
    <main>
      
      <section id="home" class=" wow fadeInUp relative overflow-hidden z-10 pt-35 md:pt-40 xl:pt-45" data-wow-delay="0.4s">
        <div class="max-w-7xl mx-auto">
          <div class="absolute -z-10 pointer-events-none inset-0 overflow-hidden -mx-28">
            <div
              class="absolute -z-1 -top-[128%] sm:-top-[107%] xl:-top-[73%] left-1/2 -translate-x-1/2 -u-z-10 hero-circle-gradient w-full h-[1282px] rounded-full max-w-[1282px]">
            </div>
            <div
              class="absolute -z-1 -top-[112%] sm:-top-[93%] xl:-top-[62%] left-1/2 -translate-x-1/2 -u-z-10 hero-circle-gradient w-full h-[1046px] rounded-full max-w-[1046px]">
            </div>
            <div class="absolute top-0 left-1/2 -translate-x-1/2 -u-z-10">
              <img src={blur2} alt="blur" class="max-w-none"/>
            </div>
            <div class="absolute top-0 left-1/2 -translate-x-1/2 -u-z-10">
              <img src={blur} alt="blur" class="max-w-none"/>
            </div>
          </div>
        </div>

        <div class="mx-auto max-w-[900px] px-4 sm:px-8 xl:px-0 relative z-1">
          <div class="text-center">
            <a href="/#"
              class="hero-subtitle-gradient hover:hero-subtitle-hover relative mb-5 font-medium text-sm inline-flex items-center gap-2 py-2 px-4.5 rounded-full">
              <img src={icontitle} alt="icon" />

              <span class="hero-subtitle-text">
                Your Ultimate Creative Companion!
              </span>
            </a>
            <h1 class="text-white mb-6 text-3xl font-extrabold sm:text-5xl xl:text-heading-1">
              Elevate Your Content with Our AI-Powered Writing Tool
            </h1>
            <p class="max-w-[500px] mx-auto mb-9 font-medium md:text-lg">
              Highly customizable Tailwind CSS template for AI - Tool, Startup, Software, App and Product Sites. Comes
              with everything you need - pages, features, sections, components and more that you can easily customize.
            </p>

            <a href="#"
              class="hero-button-gradient inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80">
              Start Your Free Trial
            </a>
          </div>
        </div>

        <div class="mt-17" data-wow-delay="0.1s">
          <img class="mx-auto" src={herosvg} alt="hero" />
        </div>
      </section>

      <section id="features" class="wow fadeInUp overflow-hidden pt-17.5 lg:pt-22.5 xl:pt-27.5 scroll-mt-17" data-wow-delay="0.4s">
        <div class="max-w-[1222px] mx-auto px-4 sm:px-8 xl:px-0">
          <div class="wow fadeInUp text-center">
            <span
              class="hero-subtitle-gradient relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-4.5 rounded-full">
              <img src={icon1} alt="icon"/>

              <span class="hero-subtitle-text"> Some of Main Features </span>
            </span>
            <h2 class="text-white mb-4.5 text-2xl font-extrabold sm:text-4xl xl:text-heading-2">
              Key Features of Our Tool
            </h2>
            <p class="max-w-[714px] mx-auto mb-5 font-medium">
              Our AI writing tool is designed to empower you with exceptional
              writing capabilities, making the writing process more efficient,
              accurate, and enjoyable.
            </p>
          </div>

          <div class="relative">
            <div
              class="features-row-border rotate-90 w-1/2 h-[1px] absolute top-1/2 left-1/2 -translate-y-1/2 lg:-translate-x-1/3 lg:left-1/4 hidden lg:block">
            </div>
            <div
              class="features-row-border rotate-90 w-1/2 h-[1px] absolute top-1/2 right-1/2 -translate-y-1/2 lg:right-[8.3%] hidden lg:block">
            </div>

            <div className="flex flex-wrap justify-center mb-6">
            {features.slice(0, 3).map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                isRotated={feature.isRotated}
              />
            ))}
          </div>

          {/* Separator Line */}
          <div className="features-row-border w-full h-[1px]" />

          {/* Second Row of Features */}
          <div className="flex flex-wrap justify-center">
            {features.slice(3).map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                isRotated={feature.isRotated}
              />
            ))}
          </div>
          </div>
        </div>
      </section>

      <section class="wow fadeInUp pt-12.5"data-wow-delay="0.4s">
      <div class="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        <div class=" data-highlighter grid sm:grid-cols-12 gap-7.5 " >
             {/* features item */}
            <div class="sm:col-span-12">
                <div class="relative rounded-3xl features-box-border">
                  <div class="relative overflow-hidden rounded-3xl p-10 xl:p-15 box-hover">
                    <div class="flex items-center justify-between relative z-20">
                      <div class="max-w-[477px] w-full">
                        <span
                          class="hero-subtitle-gradient relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-4.5 rounded-full">
                          <img src={icontitle} alt="icon" />
                          <span class="hero-subtitle-text">
                            AI-Powered Writing Tool
                          </span>
                        </span>
                        <h3 class="text-white mb-4.5 font-bold text-heading-4">
                          Intelligent Writing Assistance
                        </h3>
                        <p class="font-medium mb-10">
                          Our AI writing tool is designed to empower you with
                          exceptional writing capabilities, making the writing
                          process...
                        </p>
                        <a href="#"
                          class="features-button-gradient relative inline-flex items-center gap-1.5 rounded-full py-3 px-6 text-white text-sm ease-in duration-300 hover:shadow-button">
                          Learn more
                          <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M13.3992 5.60002L8.22422 0.350024C7.99922 0.125024 7.64922 0.125024 7.42422 0.350024C7.19922 0.575024 7.19922 0.925025 7.42422 1.15002L11.6242 5.42503H0.999219C0.699219 5.42503 0.449219 5.67502 0.449219 5.97502C0.449219 6.27502 0.699219 6.55003 0.999219 6.55003H11.6742L7.42422 10.875C7.19922 11.1 7.19922 11.45 7.42422 11.675C7.52422 11.775 7.67422 11.825 7.82422 11.825C7.97422 11.825 8.12422 11.775 8.22422 11.65L13.3992 6.40002C13.6242 6.17502 13.6242 5.82502 13.3992 5.60002Z"
                              fill="white" />
                          </svg>
                        </a>
                      </div>

                      <div class="max-w-[428px] w-full hidden sm:block">
                        <img src={bigicon} alt="icon" />
                      </div>
                    </div>

                {/* bg shapes */}
              <div class="absolute -z-10 pointer-events-none inset-0 overflow-hidden -mx-28">
                      <span class="absolute right-0 bottom-0"><img src={shape1}
                          alt="shape" /></span>
                      <span class="absolute left-0 top-0"><img src={shape2} alt="shape" /></span>
                      <span class="absolute left-1/2 -translate-x-1/2 bottom-0">
                        <img src={blur3} alt="blur" class="max-w-none"/>
                      </span>
                      <span class="absolute left-1/2 -translate-x-1/2 bottom-0">
                        <img src={blur4} alt="blur" class="max-w-none"/>
                      </span>
                      <span class="absolute left-1/2 -translate-x-1/2 bottom-0">
                        <img src={blur5} alt="blur" class="max-w-none"/>
                      </span>
                      <span class="absolute right-0 top-0">
                        <img src={shape3} alt="shape" class="max-w-none" />
                      </span>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
      </section>

      <section id="pricing" class=" wow fadeInUp relative z-20 overflow-hidden pt-22.5 lg:pt-27.5 xl:pt-32.5 scroll-mt-17" data-wow-delay="0.4s">
      <div class="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
          {/*bg circles  */}
        <div class="relative top-18">
          <div class="absolute -z-10 pointer-events-none inset-0 overflow-hidden -my-55">
            <div class="absolute left-1/2 -translate-x-1/2 top-0">
              <img src={blur13} alt="blur" class="wow fadeInUp max-w-none"/>
            </div>
            <div class="absolute left-1/2 -translate-x-1/2 top-0">
              <img src={blur14} alt="blur" class="max-w-none"/>
            </div>
            <div class="absolute left-1/2 -translate-x-1/2 top-0">
              <img src={blur15} alt="blur" class="max-w-none"/>
            </div>
          </div>
          <div
            class="max-w-[830px] w-full h-[830px] rounded-full bg-dark absolute left-1/2 -translate-x-1/2 top-0 pricing-circle">
          </div>

          <div class="max-w-[482px] w-full h-60 overflow-hidden absolute -z-1 -top-30 left-1/2 -translate-x-1/2">
            <div class="stars"></div>
            <div class="stars2"></div>
          </div>
        </div>
        
        {/* grid row  */}

        <div class="flex justify-center gap-7.5 relative -z-1">
          <div class="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border"></div>
          <div class="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border"></div>
          <div class="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border"></div>
          <div class="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border"></div>
          <div class="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border"></div>
          <div class="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border"></div>
          <div class="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border"></div>
          <div class="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border"></div>
        </div>

        {/* section title  */}

        <div class="wow fadeInUp mb-17.5 -mt-24 text-center z-10 relative">
          <span
            class="hero-subtitle-gradient relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-4.5 rounded-full">
            <img src={icontitle} alt="icon"/>

            <span class="hero-subtitle-text"> Get access </span>
          </span>
          <h2 class="text-white mb-4.5 text-2xl font-extrabold sm:text-4xl xl:text-heading-2">
            Our Pricing Plan
          </h2>
          <p class="max-w-[714px] mx-auto font-medium">
            Our AI writing tool is designed to empower you with exceptional
            writing capabilities, making the writing process more efficient,
            accurate, and enjoyable.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7.5">
          {/* Pricing item   */}
          <div
            class=" data-highlighter wow fadeInUp rounded-3xl bg-dark relative z-20 overflow-hidden pt-12.5 pb-10 px-8 xl:px-10 pricing-item-border">
            <span class="absolute right-9 top-9"><img src={pricingicon} alt="icon" /></span>

            <h3 class="font-semibold text-heading-6 text-white mb-5.5">
              Starter
            </h3>

            <div class="flex items-center gap-3.5">
              <h2 class="font-bold text-custom-1 pricing-gradient-text">
                $10
              </h2>

              <p class="font-medium">
                /month <br />
                (billed annually)
              </p>
            </div>

            <div class="my-10 w-full h-[1px] pricing-gradient-divider"></div>

            <ul class="flex flex-col gap-4">
              <li class="flex items-center gap-5">
                <img src={princingIcon4} alt="icon" />
                <span class="font-medium">Subscription with levels</span>
              </li>
              <li class="flex items-center gap-5">
                <img src={princingIcon4} alt="icon" />
                <span class="font-medium">Advanced features included</span>
              </li>
              <li class="flex items-center gap-5">
                <img src={princingIcon4} alt="icon" />
                <span class="font-medium">Shared workspaces & tools</span>
              </li>
              <li class="flex items-center gap-5">
                <img src={princingIcon4} alt="icon" />
                <span class="font-medium">Premium versions functionality</span>
              </li>
              <li class="flex items-center gap-5">
                <img src={princingIcon4} alt="icon" />
                <span class="font-medium">Customizing the outputs</span>
              </li>
              <li class="flex items-center gap-5">
                <img src={princingIcon4} alt="icon" />
                <span class="font-medium">Priority customer support</span>
              </li>
            </ul>

            <a href="/#"
              class="mt-11 flex items-center justify-center gap-1.5 font-medium text-white p-3 rounded-lg transition-all ease-in-out duration-300 relative pricing-button-gradient hover:shadow-button">
              Get the plan
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.8992 7.5999L9.72422 2.3499C9.49922 2.1249 9.14922 2.1249 8.92422 2.3499C8.69922 2.5749 8.69922 2.9249 8.92422 3.1499L13.1242 7.4249H2.49922C2.19922 7.4249 1.94922 7.6749 1.94922 7.9749C1.94922 8.2749 2.19922 8.5499 2.49922 8.5499H13.1742L8.92422 12.8749C8.69922 13.0999 8.69922 13.4499 8.92422 13.6749C9.02422 13.7749 9.17422 13.8249 9.32422 13.8249C9.47422 13.8249 9.62422 13.7749 9.72422 13.6499L14.8992 8.3999C15.1242 8.1749 15.1242 7.8249 14.8992 7.5999Z"
                  fill="white" />
              </svg>
            </a>

            <p class="mt-4 text-sm text-center">
              No extra hidden charge
            </p>

            {/* bg shapes   */}
            <div class="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
              <span class="absolute left-0 bottom-0 -z-1">
                <img src={blur16} alt="blur" class="max-w-none"/>
              </span>
              <span class="absolute left-0 top-0 -z-1">
                <img src={blur17} alt="blur" class="max-w-none"/>
              </span>
            </div>
          </div>

          <div
            class="wow fadeInUp rounded-3xl bg-dark relative z-20 overflow-hidden pt-12.5 pb-10 px-8 xl:px-10 pricing-item-border">
            <span class="absolute right-9 top-9"><img src={pricingicon} alt="icon" /></span>

            <h3 class="font-semibold text-heading-6 text-white mb-5.5">
              Starter
            </h3>

            <div class="flex items-center gap-3.5">
              <h2 class="font-bold text-custom-1 pricing-gradient-text">
                $10
              </h2>

              <p class="font-medium">
                /month <br />
                (billed annually)
              </p>
            </div>

            <div class="my-10 w-full h-[1px] pricing-gradient-divider"></div>

            <ul class="flex flex-col gap-4">
              <li class="flex items-center gap-5">
                <img src={princingIcon4} alt="icon" />
                <span class="font-medium">Subscription with levels</span>
              </li>
              <li class="flex items-center gap-5">
                <img src={princingIcon4} alt="icon" />
                <span class="font-medium">Advanced features included</span>
              </li>
              <li class="flex items-center gap-5">
                <img src={princingIcon4} alt="icon" />
                <span class="font-medium">Shared workspaces & tools</span>
              </li>
              <li class="flex items-center gap-5">
                <img src={princingIcon4} alt="icon" />
                <span class="font-medium">Premium versions functionality</span>
              </li>
              <li class="flex items-center gap-5">
                <img src={princingIcon4} alt="icon" />
                <span class="font-medium">Customizing the outputs</span>
              </li>
              <li class="flex items-center gap-5">
                <img src={princingIcon4} alt="icon" />
                <span class="font-medium">Priority customer support</span>
              </li>
            </ul>

            <a href="/#"
              class="mt-11 flex items-center justify-center gap-1.5 font-medium text-white p-3 rounded-lg transition-all ease-in-out duration-300 relative pricing-button-gradient hover:shadow-button">
              Get the plan
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.8992 7.5999L9.72422 2.3499C9.49922 2.1249 9.14922 2.1249 8.92422 2.3499C8.69922 2.5749 8.69922 2.9249 8.92422 3.1499L13.1242 7.4249H2.49922C2.19922 7.4249 1.94922 7.6749 1.94922 7.9749C1.94922 8.2749 2.19922 8.5499 2.49922 8.5499H13.1742L8.92422 12.8749C8.69922 13.0999 8.69922 13.4499 8.92422 13.6749C9.02422 13.7749 9.17422 13.8249 9.32422 13.8249C9.47422 13.8249 9.62422 13.7749 9.72422 13.6499L14.8992 8.3999C15.1242 8.1749 15.1242 7.8249 14.8992 7.5999Z"
                  fill="white" />
              </svg>
            </a>

            <p class="mt-4 text-sm text-center">
              No extra hidden charge
            </p>

            {/* bg shapes   */}
            <div class="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
              <span class="absolute left-0 bottom-0 -z-1">
                <img src={blur16} alt="blur" class="max-w-none"/>
              </span>
              <span class="absolute left-0 top-0 -z-1">
                <img src={blur17} alt="blur" class="max-w-none"/>
              </span>
            </div>
          </div>
          {/* Pricing item   */}
          <div
            class="wow fadeInUp rounded-3xl bg-dark relative z-20 overflow-hidden pt-12.5 pb-10 px-8 xl:px-10 pricing-item-border">
            <span class="absolute right-9 top-9"><img src={princingIcon3} alt="icon" /></span>

            <h3 class="font-semibold text-heading-6 text-white mb-5.5">
              Business
            </h3>

            <div class="flex items-center gap-3.5">
              <h2 class="font-bold text-custom-1 pricing-gradient-text">
                $289
              </h2>

              <p class="font-medium">
                /month <br />
                (billed annually)
              </p>
            </div>

            <div class="my-10 w-full h-[1px] pricing-gradient-divider"></div>

            <ul class="flex flex-col gap-4">
              <li class="flex items-center gap-5">
                <img src={princingIcon4} alt="icon" />
                <span class="font-medium">Subscription with levels</span>
              </li>
              <li class="flex items-center gap-5">
                <img src={princingIcon4} alt="icon" />
                <span class="font-medium">Advanced features included</span>
              </li>
              <li class="flex items-center gap-5">
                <img src={princingIcon4} alt="icon" />
                <span class="font-medium">Shared workspaces & tools</span>
              </li>
              <li class="flex items-center gap-5">
                <img src={princingIcon4} alt="icon" />
                <span class="font-medium">Premium versions functionality</span>
              </li>
              <li class="flex items-center gap-5">
                <img src={princingIcon4} alt="icon" />
                <span class="font-medium">Customizing the outputs</span>
              </li>
              <li class="flex items-center gap-5">
                <img src={princingIcon4} alt="icon" />
                <span class="font-medium">Priority customer support</span>
              </li>
            </ul>

            <a href="/#"
              class="mt-11 flex items-center justify-center gap-1.5 font-medium text-white p-3 rounded-lg transition-all ease-in-out duration-300 relative pricing-button-gradient hover:shadow-button">
              Get the plan
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.8992 7.5999L9.72422 2.3499C9.49922 2.1249 9.14922 2.1249 8.92422 2.3499C8.69922 2.5749 8.69922 2.9249 8.92422 3.1499L13.1242 7.4249H2.49922C2.19922 7.4249 1.94922 7.6749 1.94922 7.9749C1.94922 8.2749 2.19922 8.5499 2.49922 8.5499H13.1742L8.92422 12.8749C8.69922 13.0999 8.69922 13.4499 8.92422 13.6749C9.02422 13.7749 9.17422 13.8249 9.32422 13.8249C9.47422 13.8249 9.62422 13.7749 9.72422 13.6499L14.8992 8.3999C15.1242 8.1749 15.1242 7.8249 14.8992 7.5999Z"
                  fill="white" />
              </svg>
            </a>

            <p class="mt-4 text-sm text-center">
              No extra hidden charge
            </p>

            {/* bg shapes   */}
            <div class="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
              <span class="absolute left-0 bottom-0 -z-1">
                <img src={blur16} alt="blur" class="max-w-none"/>
              </span>
              <span class="absolute left-0 top-0 -z-1">
                <img src={blur17} alt="blur" class="max-w-none"/>
              </span>
            </div>
          </div>
        </div>
      </div>
      </section>
      
      
      <section id="support" class="mt-12 scroll-mt-17"data-wow-delay="0.4s">
        <div class="max-w-[1104px] mx-auto px-4 sm:px-8 xl:px-0">
          <div class="relative z-999 overflow-hidden rounded-[30px] bg-dark pt-25 px-4 sm:px-20 lg:px-27.5">
            {/* grid row*/}
            <div
              class="flex justify-center gap-7.5 absolute left-1/2 -translate-x-1/2 -top-[16%] max-w-[690px] w-full -z-1 opacity-40">
              <div class="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border bottom-12">
              </div>
              <div class="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border bottom-7">
              </div>
              <div class="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border bottom-3">
              </div>
              <div class="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border">
              </div>
              <div class="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border">
              </div>
              <div class="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border">
              </div>
              <div class="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border bottom-2">
              </div>
              <div class="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border bottom-5">
              </div>
              <div class="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border bottom-8">
              </div>
            </div>

            {/* stars */}

            <div class="max-w-[482px] w-full h-60 overflow-hidden absolute -z-1 -top-30 left-1/2 -translate-x-1/2">
              <div class="stars"></div>
              <div class="stars2"></div>
            </div>

            {/* bg shapes */}
            <div class="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
              <span class="absolute left-1/2 top-0 -translate-x-1/2 -z-1">
                <img src={blur19} alt="blur" class="max-w-none"/>
              </span>
              <span class="absolute left-1/2 top-0 -translate-x-1/2 -z-1">
                <img src={blur20} alt="blur" class="max-w-none"/>
              </span>
              <span class="absolute left-1/2 top-0 -translate-x-1/2 -z-1">
                <img src={blur21} alt="blur" class="max-w-none"/>
              </span>
            </div>

            {/* section title */}
            <div class="wow fadeInUp mb-16 text-center relative z-999">
              <span
                class="hero-subtitle-gradient relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-4.5 rounded-full">
                <img src={icontitle} alt="icon" />

                <span class="hero-subtitle-text"> Need Any Help? </span>
              </span>
              <h2 class="text-white mb-4.5 text-2xl font-extrabold sm:text-4xl xl:text-heading-2">
                Contact With Us
              </h2>
              <p class="max-w-[714px] mx-auto font-medium">
                Our AI writing tool is designed to empower you with exceptional
                writing capabilities, making the writing process more efficient,
                accurate, and enjoyable.
              </p>
            </div>

            {/* support form */}
            <div class="form-box-gradient relative overflow-hidden rounded-[25px] bg-dark p-6 sm:p-8 xl:p-15">
              <form class="relative z-10">
                <div class="-mx-4 xl:-mx-10 flex flex-wrap">
                  <div class="w-full px-4 xl:px-5 md:w-1/2">
                    <div class="mb-9.5">
                      <label for="name" class="text-white mb-2.5 block font-medium">
                        Name
                      </label>
                      <input id="name" type="text" name="name" placeholder="Enter your Name"
                        class="rounded-lg border border-white/[0.12] bg-white/[0.05] focus:border-purple w-full py-3 px-6 outline-none" />
                    </div>
                  </div>
                  <div class="w-full px-4 xl:px-5 md:w-1/2">
                    <div class="mb-9.5">
                      <label for="email" class="text-white mb-2.5 block font-medium">
                        Email
                      </label>
                      <input id="email" type="email" name="email" placeholder="Enter your Email"
                        class="rounded-lg border border-white/[0.12] bg-white/[0.05] focus:border-purple w-full py-3 px-6 outline-none" />
                    </div>
                  </div>
                  <div class="w-full px-4 xl:px-5">
                    <div class="mb-10">
                      <label for="message" class="text-white mb-2.5 block font-medium">
                        Message
                      </label>
                      <textarea id="message" name="message" placeholder="Type your message" rows="6"
                        class="rounded-lg border border-white/[0.12] bg-white/[0.05] focus:border-purple w-full py-5 px-6 outline-none"></textarea>
                    </div>
                  </div>
                  <div class="w-full px-4 xl:px-5">
                    <div class="text-center">
                      <a href="#"
                        class="hero-button-gradient inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80">
                        Send Message
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section class="wow fadeInUp mt-12 py-20 lg:py-25"data-wow-delay="0.4s">
      <div class="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        {/* section title */}
        <div class="wow fadeInUp mb-16 text-center">
          <span
            class="hero-subtitle-gradient relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-4.5 rounded-full">
            <img src={icontitle} alt="icon" />

            <span class="hero-subtitle-text"> Read Our Latest Blogs </span>
          </span>
          <h2 class="text-white mb-4.5 text-2xl font-extrabold sm:text-4xl xl:text-heading-2">
            Latest Blogs & News
          </h2>
          <p class="max-w-[714px] mx-auto font-medium">
            Our AI writing tool is designed to empower you with exceptional
            writing capabilities, making the writing process more efficient,
            accurate, and enjoyable.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7.5">
         {/* blog item */}
        <div class="wow fadeInUp group">
            <div class="mb-6 overflow-hidden rounded-xl">
              <img src={blog1} alt="image"
                class="ease-linear w-full duration-500 scale-100 group-hover:scale-125" />
            </div>

            <div class="flex flex-wrap gap-2.5 items-center mb-4.5">
              <span
                class="font-medium text-xs hover:text-white cursor-pointer py-[3px] px-2.5 rounded-full bg-white/[0.07] border border-white/10 hover:border-white/25 ease-out duration-300">
                Design
              </span>
              <span
                class="font-medium text-xs hover:text-white cursor-pointer py-[3px] px-2.5 rounded-full bg-white/[0.07] border border-white/10 hover:border-white/25 ease-out duration-300">
                Engineering
              </span>
            </div>

            <h4>
              <a href="blog-single.html" class="text-white font-semibold text-xl ease-in duration-300 hover:opacity-80">
                Revolution in Content Creation and Communication
              </a>
            </h4>
            <p class="font-medium mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisc elit sed do
              eiusmod tempor incididunt ut labore et dolore magna oliumosd
              aliqua...
            </p>

            <div class="flex items-center gap-4.5 flex-wrap mt-6">
              <div class="flex items-center gap-2 flex-wrap cursor-pointer ease-in duration-300 hover:text-white">
                <svg class="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10 8.75C7.65625 8.75 5.78125 6.90625 5.78125 4.65625C5.78125 2.40625 7.65625 0.5625 10 0.5625C12.3438 0.5625 14.2188 2.40625 14.2188 4.65625C14.2188 6.90625 12.3438 8.75 10 8.75ZM10 1.96875C8.4375 1.96875 7.1875 3.1875 7.1875 4.65625C7.1875 6.125 8.4375 7.34375 10 7.34375C11.5625 7.34375 12.8125 6.125 12.8125 4.65625C12.8125 3.1875 11.5625 1.96875 10 1.96875Z"
                    fill="" />
                  <path
                    d="M16.5938 19.4688C16.2188 19.4688 15.875 19.1562 15.875 18.75V17.8438C15.875 14.5938 13.25 11.9688 10 11.9688C6.75 11.9688 4.125 14.5938 4.125 17.8438V18.75C4.125 19.125 3.8125 19.4688 3.40625 19.4688C3 19.4688 2.6875 19.1562 2.6875 18.75V17.8438C2.6875 13.8125 5.96875 10.5625 9.96875 10.5625C13.9688 10.5625 17.25 13.8437 17.25 17.8438V18.75C17.2813 19.125 16.9688 19.4688 16.5938 19.4688Z"
                    fill="" />
                </svg>

                <span class="text-sm font-medium">Alex Demo</span>
              </div>
              <div class="flex items-center gap-2 flex-wrap cursor-pointer ease-in duration-300 hover:text-white">
                <svg class="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.5 3.3125H15.875V2.625C15.875 2.25 15.5625 1.90625 15.1562 1.90625C14.75 1.90625 14.4375 2.21875 14.4375 2.625V3.3125H5.53125V2.625C5.53125 2.25 5.21875 1.90625 4.8125 1.90625C4.40625 1.90625 4.09375 2.21875 4.09375 2.625V3.3125H2.5C1.4375 3.3125 0.53125 4.1875 0.53125 5.28125V16.1563C0.53125 17.2188 1.40625 18.125 2.5 18.125H17.5C18.5625 18.125 19.4687 17.25 19.4687 16.1563V5.25C19.4687 4.1875 18.5625 3.3125 17.5 3.3125ZM1.96875 9.125H4.625V12.2188H1.96875V9.125ZM6.03125 9.125H9.3125V12.2188H6.03125V9.125ZM9.3125 13.625V16.6875H6.03125V13.625H9.3125ZM10.7187 13.625H14V16.6875H10.7187V13.625ZM10.7187 12.2188V9.125H14V12.2188H10.7187ZM15.375 9.125H18.0312V12.2188H15.375V9.125ZM2.5 4.71875H4.125V5.375C4.125 5.75 4.4375 6.09375 4.84375 6.09375C5.25 6.09375 5.5625 5.78125 5.5625 5.375V4.71875H14.5V5.375C14.5 5.75 14.8125 6.09375 15.2187 6.09375C15.625 6.09375 15.9375 5.78125 15.9375 5.375V4.71875H17.5C17.8125 4.71875 18.0625 4.96875 18.0625 5.28125V7.71875H1.96875V5.28125C1.96875 4.96875 2.1875 4.71875 2.5 4.71875ZM1.96875 16.125V13.5938H4.625V16.6563H2.5C2.1875 16.6875 1.96875 16.4375 1.96875 16.125ZM17.5 16.6875H15.375V13.625H18.0312V16.1563C18.0625 16.4375 17.8125 16.6875 17.5 16.6875Z"
                    fill="" />
                </svg>

                <span class="text-sm font-medium">25 Mar, 2025</span>
              </div>
            </div>
          </div>

          {/* blog item */}

          <div class="wow fadeInUp group">
            <div class="mb-6 overflow-hidden rounded-xl">
              <img src={blog2} alt="image"
                class="ease-linear w-full duration-500 scale-100 group-hover:scale-125" />
            </div>

            <div class="flex flex-wrap gap-2.5 items-center mb-4.5">
              <span
                class="font-medium text-xs hover:text-white cursor-pointer py-[3px] px-2.5 rounded-full bg-white/[0.07] border border-white/10 hover:border-white/25 ease-out duration-300">
                Development
              </span>
              <span
                class="font-medium text-xs hover:text-white cursor-pointer py-[3px] px-2.5 rounded-full bg-white/[0.07] border border-white/10 hover:border-white/25 ease-out duration-300">
                Security
              </span>
            </div>

            <h4>
              <a href="blog-single.html" class="text-white font-semibold text-xl ease-in duration-300 hover:opacity-80">
                How AI Writing Tools Empower Writers to Speed up there Writing
              </a>
            </h4>
            <p class="font-medium mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisc elit sed do
              eiusmod tempor incididunt ut labore et dolore magna oliumosd
              aliqua...
            </p>

            <div class="flex items-center gap-4.5 flex-wrap mt-6">
              <div class="flex items-center gap-2 flex-wrap cursor-pointer ease-in duration-300 hover:text-white">
                <svg class="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10 8.75C7.65625 8.75 5.78125 6.90625 5.78125 4.65625C5.78125 2.40625 7.65625 0.5625 10 0.5625C12.3438 0.5625 14.2188 2.40625 14.2188 4.65625C14.2188 6.90625 12.3438 8.75 10 8.75ZM10 1.96875C8.4375 1.96875 7.1875 3.1875 7.1875 4.65625C7.1875 6.125 8.4375 7.34375 10 7.34375C11.5625 7.34375 12.8125 6.125 12.8125 4.65625C12.8125 3.1875 11.5625 1.96875 10 1.96875Z"
                    fill="" />
                  <path
                    d="M16.5938 19.4688C16.2188 19.4688 15.875 19.1562 15.875 18.75V17.8438C15.875 14.5938 13.25 11.9688 10 11.9688C6.75 11.9688 4.125 14.5938 4.125 17.8438V18.75C4.125 19.125 3.8125 19.4688 3.40625 19.4688C3 19.4688 2.6875 19.1562 2.6875 18.75V17.8438C2.6875 13.8125 5.96875 10.5625 9.96875 10.5625C13.9688 10.5625 17.25 13.8437 17.25 17.8438V18.75C17.2813 19.125 16.9688 19.4688 16.5938 19.4688Z"
                    fill="" />
                </svg>

                <span class="text-sm font-medium">Hendary Jonson</span>
              </div>
              <div class="flex items-center gap-2 flex-wrap cursor-pointer ease-in duration-300 hover:text-white">
                <svg class="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.5 3.3125H15.875V2.625C15.875 2.25 15.5625 1.90625 15.1562 1.90625C14.75 1.90625 14.4375 2.21875 14.4375 2.625V3.3125H5.53125V2.625C5.53125 2.25 5.21875 1.90625 4.8125 1.90625C4.40625 1.90625 4.09375 2.21875 4.09375 2.625V3.3125H2.5C1.4375 3.3125 0.53125 4.1875 0.53125 5.28125V16.1563C0.53125 17.2188 1.40625 18.125 2.5 18.125H17.5C18.5625 18.125 19.4687 17.25 19.4687 16.1563V5.25C19.4687 4.1875 18.5625 3.3125 17.5 3.3125ZM1.96875 9.125H4.625V12.2188H1.96875V9.125ZM6.03125 9.125H9.3125V12.2188H6.03125V9.125ZM9.3125 13.625V16.6875H6.03125V13.625H9.3125ZM10.7187 13.625H14V16.6875H10.7187V13.625ZM10.7187 12.2188V9.125H14V12.2188H10.7187ZM15.375 9.125H18.0312V12.2188H15.375V9.125ZM2.5 4.71875H4.125V5.375C4.125 5.75 4.4375 6.09375 4.84375 6.09375C5.25 6.09375 5.5625 5.78125 5.5625 5.375V4.71875H14.5V5.375C14.5 5.75 14.8125 6.09375 15.2187 6.09375C15.625 6.09375 15.9375 5.78125 15.9375 5.375V4.71875H17.5C17.8125 4.71875 18.0625 4.96875 18.0625 5.28125V7.71875H1.96875V5.28125C1.96875 4.96875 2.1875 4.71875 2.5 4.71875ZM1.96875 16.125V13.5938H4.625V16.6563H2.5C2.1875 16.6875 1.96875 16.4375 1.96875 16.125ZM17.5 16.6875H15.375V13.625H18.0312V16.1563C18.0625 16.4375 17.8125 16.6875 17.5 16.6875Z"
                    fill="" />
                </svg>

                <span class="text-sm font-medium">12 Feb, 2025</span>
              </div>
            </div>
          </div>

          {/* blog item */}

          <div class="wow fadeInUp group">
            <div class="mb-6 overflow-hidden rounded-xl">
              <img src={blog3} alt="image"
                class="ease-linear w-full duration-500 scale-100 group-hover:scale-125" />
            </div>

            <div class="flex flex-wrap gap-2.5 items-center mb-4.5">
              <span
                class="font-medium text-xs hover:text-white cursor-pointer py-[3px] px-2.5 rounded-full bg-white/[0.07] border border-white/10 hover:border-white/25 ease-out duration-300">
                Products
              </span>
              <span
                class="font-medium text-xs hover:text-white cursor-pointer py-[3px] px-2.5 rounded-full bg-white/[0.07] border border-white/10 hover:border-white/25 ease-out duration-300">
                Blog and articles
              </span>
            </div>

            <h4>
              <a href="blog-single.html" class="text-white font-semibold text-xl ease-in duration-300 hover:opacity-80">
                Revolution in Content Creation and Communication
              </a>
            </h4>
            <p class="font-medium mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisc elit sed do
              eiusmod tempor incididunt ut labore et dolore magna oliumosd
              aliqua...
            </p>

            <div class="flex items-center gap-4.5 flex-wrap mt-6">
              <div class="flex items-center gap-2 flex-wrap cursor-pointer ease-in duration-300 hover:text-white">
                <svg class="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10 8.75C7.65625 8.75 5.78125 6.90625 5.78125 4.65625C5.78125 2.40625 7.65625 0.5625 10 0.5625C12.3438 0.5625 14.2188 2.40625 14.2188 4.65625C14.2188 6.90625 12.3438 8.75 10 8.75ZM10 1.96875C8.4375 1.96875 7.1875 3.1875 7.1875 4.65625C7.1875 6.125 8.4375 7.34375 10 7.34375C11.5625 7.34375 12.8125 6.125 12.8125 4.65625C12.8125 3.1875 11.5625 1.96875 10 1.96875Z"
                    fill="" />
                  <path
                    d="M16.5938 19.4688C16.2188 19.4688 15.875 19.1562 15.875 18.75V17.8438C15.875 14.5938 13.25 11.9688 10 11.9688C6.75 11.9688 4.125 14.5938 4.125 17.8438V18.75C4.125 19.125 3.8125 19.4688 3.40625 19.4688C3 19.4688 2.6875 19.1562 2.6875 18.75V17.8438C2.6875 13.8125 5.96875 10.5625 9.96875 10.5625C13.9688 10.5625 17.25 13.8437 17.25 17.8438V18.75C17.2813 19.125 16.9688 19.4688 16.5938 19.4688Z"
                    fill="" />
                </svg>

                <span class="text-sm font-medium">Piter Mecraow</span>
              </div>
              <div class="flex items-center gap-2 flex-wrap cursor-pointer ease-in duration-300 hover:text-white">
                <svg class="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.5 3.3125H15.875V2.625C15.875 2.25 15.5625 1.90625 15.1562 1.90625C14.75 1.90625 14.4375 2.21875 14.4375 2.625V3.3125H5.53125V2.625C5.53125 2.25 5.21875 1.90625 4.8125 1.90625C4.40625 1.90625 4.09375 2.21875 4.09375 2.625V3.3125H2.5C1.4375 3.3125 0.53125 4.1875 0.53125 5.28125V16.1563C0.53125 17.2188 1.40625 18.125 2.5 18.125H17.5C18.5625 18.125 19.4687 17.25 19.4687 16.1563V5.25C19.4687 4.1875 18.5625 3.3125 17.5 3.3125ZM1.96875 9.125H4.625V12.2188H1.96875V9.125ZM6.03125 9.125H9.3125V12.2188H6.03125V9.125ZM9.3125 13.625V16.6875H6.03125V13.625H9.3125ZM10.7187 13.625H14V16.6875H10.7187V13.625ZM10.7187 12.2188V9.125H14V12.2188H10.7187ZM15.375 9.125H18.0312V12.2188H15.375V9.125ZM2.5 4.71875H4.125V5.375C4.125 5.75 4.4375 6.09375 4.84375 6.09375C5.25 6.09375 5.5625 5.78125 5.5625 5.375V4.71875H14.5V5.375C14.5 5.75 14.8125 6.09375 15.2187 6.09375C15.625 6.09375 15.9375 5.78125 15.9375 5.375V4.71875H17.5C17.8125 4.71875 18.0625 4.96875 18.0625 5.28125V7.71875H1.96875V5.28125C1.96875 4.96875 2.1875 4.71875 2.5 4.71875ZM1.96875 16.125V13.5938H4.625V16.6563H2.5C2.1875 16.6875 1.96875 16.4375 1.96875 16.125ZM17.5 16.6875H15.375V13.625H18.0312V16.1563C18.0625 16.4375 17.8125 16.6875 17.5 16.6875Z"
                    fill="" />
                </svg>

                <span class="text-sm font-medium">10 Jan, 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

      <section data-wow-delay="0.4s">
      <div class="wow fadeInUp  max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        <div class="data-highlighter cta-box-gradient bg-dark rounded-[30px] relative overflow-hidden px-4 py-20 lg:py-25 z-999">
          {/*bg shapes*/}
          <span class="absolute bottom-0 left-0 -z-1">
            <img src={grid} alt="grid" />
          </span>
          <div class="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
            <span class="absolute left-1/2 bottom-0 -translate-x-1/2 -z-1">
              <img src={blur22} alt="blur" class="max-w-none" />
            </span>
            <span class="absolute left-1/2 bottom-0 -translate-x-1/2 -z-1">
              <img src={blur23} alt="blur" class="max-w-none"/>
            </span>
            <span class="absolute left-1/2 bottom-0 -translate-x-1/2 -z-1">
              <img src={blur24} alt="blur" class="max-w-none" />
            </span>
          </div>

          {/*stars*/}
          <div class="max-w-[482px] w-full h-60 overflow-hidden absolute -z-1 -bottom-25 left-1/2 -translate-x-1/2">
            <div class="stars"></div>
            <div class="stars2"></div>
          </div>

          <div class="wow fadeInUp text-center">
            <span
              class="hero-subtitle-gradient relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-4.5 rounded-full">
              <img src={icontitle} alt="icon" />

              <span class="hero-subtitle-text">
                Try our tool for Free
              </span>
            </span>
            <h2 class="text-white mb-4.5 text-2xl font-extrabold sm:text-4xl xl:text-heading-2">
              What are you waiting for?
            </h2>
            <p class="max-w-[714px] mx-auto font-medium mb-9">
              Our AI writing tool is designed to empower you with exceptional
              writing capabilities, making the writing process more efficient,
              accurate, and enjoyable.
            </p>

            <a href="#"
              class="hero-button-gradient inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80">
              Get Started for Free
            </a>
          </div>
        </div>
      </div>
      </section>

    </main>
  )
}

export default Home