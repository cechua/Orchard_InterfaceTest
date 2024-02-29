import React from 'react';

const ArticleCard = (props) => {
  const { articleTitle, articleDescription, articleImage } = props;
  return (
    <div className="rounded-lg flex justify-center flex-col">
      <img
        className="rounded-t-lg border-b-4 border-redFontColor"
        src={articleImage}
        alt=""
      />
      <div>
        <h5 className="text-white py-8 capitalize text-[.8rem] md:text-[2rem]">
          {articleTitle}
        </h5>
        <p className="mb-8 text-secondaryFontColor font-light text-[.6rem] md:text-[1.8rem]">
          {articleDescription}
        </p>
        <a
          href="#"
          className="text-white uppercase pb-2 border-b-[1px] border-redFontColor font-medium text-[.5rem] md:text-[2rem] transition-colors duration-200 ease-in hover:border-white hover:text-redFontColor"
          onClick={(e) => {
            e.preventDefault();
            console.log('read more clicked for article: ', articleTitle);
          }}
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;
