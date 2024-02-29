import React from 'react';
import ArticleCard from './ArticleCard';

import MainImage1 from '../../assets/component-02/Image-01.jpg';
import MainImage2 from '../../assets/component-02/Image-02.jpg';
import MainImage3 from '../../assets/component-02/Image-03.jpg';

const SecondaryContent = () => {
  return (
    <div className="flex flex-col justify-center sm:pb-64 items-center">
      <h6 className="flex text-center uppercase text-primaryFontColor text-[2.6rem] md:text-[4.8rem]">
        All the latest from AEG
      </h6>
      <div className="grid grid-cols-mobileContent md:grid-cols-tabletContent xl:grid-cols-content gap-4 xl:gap-6">
        <ArticleCard
          articleTitle={'summer lunch menu by mark best'}
          articleDescription={
            "AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home. "
          }
          articleImage={MainImage1}
        />
        <ArticleCard
          articleTitle={'a traditional christmas eve, mark best style'}
          articleDescription={
            "One of Australia's best chefs and AEG ambassador, Mark Best, shares his favourite Christmas Eve menu which is sure to impress your guests"
          }
          articleImage={MainImage2}
        />
        <ArticleCard
          articleTitle={'taking taste further'}
          articleDescription={
            "This exclusive cookbook gives you all the know-how you need. We've designed it to make sure you get the most out of our products - and the best out of your food."
          }
          articleImage={MainImage3}
        />
      </div>
    </div>
  );
};

export default SecondaryContent;
