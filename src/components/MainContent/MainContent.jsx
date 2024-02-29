import React from 'react';

import MainImage1 from '../../assets/component-01/Image-01@2x.jpg';
import MainImage2 from '../../assets/component-01/Image-02.jpg';
import MainImage3 from '../../assets/component-01/Image-03.jpg';
const MainContent = () => {
  return (
    <div className="flex justify-center py-16 md:py-64 xl:items-center">
      <div className="grid grid-cols-mobileContent md:grid-cols-tabletContent xl:grid-cols-content gap-4 xl:gap-6">
        <div className="flex align-middle justify-center max-h-[20rem] sm:max-h-[45rem] xl:max-h-[60rem] w-full">
          <img src={MainImage1} alt="main-image-1" />
        </div>
        <div className="flex flex-col flex-1 max-h-[20rem] sm:max-h-[45rem] xl:max-h-[60rem] gap-2 justify-between">
          <img
            src={MainImage2}
            alt="main-image-2"
            className="h-[20rem] xl:h-[28rem] w-[25rem] xl:w-full"
          />
          <img
            src={MainImage3}
            alt="main-image-3"
            className="h-[20rem] xl:h-[28rem] w-[25rem] xl:w-full"
          />
        </div>
        <div className="flex flex-col flex-1 max-h-[20rem] sm:max-h-[45rem]">
          <div>
            <h2 className="text-primaryFontColor tracking-wide uppercase text-[.7rem] sm:text-[1.5rem] md:text-[1.8rem] xl:text-[2.8rem]">
              Answer your body's needs
            </h2>
            <hr className="my-1 sm:my-5" />
            <p className="tracking-wide text-primaryFontColor font-light text-[.5rem] sm:text-[1rem] md:text-[1.2rem] xl:text-[2.2rem]">
              The way ingredients are sourced affects the way we nourish our
              bodies. Author Mark Schatzer believes our body naturally develops
              an appetite for the foods and nutrients it needs to be healthy,
              but that artificial flavourings are getting in the way. This can
              be reversed by focusing on high-quality ingredients and being
              mindful as your appetite guides you to consume according to your
              body's needs.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-redFontColor mt-8 mb-4 uppercase text-[.7rem] sm:text-[1.3rem] xl:text-[2rem]">
              Be Mindful
            </h3>
            <p className="font-semibold text-white text-[.6rem] sm:text-[1.3rem] xl:text-[1.8rem]">
              Sourcing local or organic food is a good way to start being more
              mindful about what you're cooking and eating
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
