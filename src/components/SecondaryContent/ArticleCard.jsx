import React from 'react';

const ArticleCard = (props) => {
  const { articleTitle, articleDescription, articleImage } = props;
  return (
    <div className="max-w-2xl rounded-lg">
      <img
        className="rounded-t-lg border-b-4 border-redFontColor"
        src={articleImage}
        alt=""
      />
      <div>
        <h5 className="text-white py-8 capitalize text-[2rem]">
          {articleTitle}
        </h5>
        <p className="mb-8 text-secondaryFontColor font-light text-[1.8rem]">
          {articleDescription}
        </p>
        <a
          href="#"
          className="text-white uppercase pb-2 border-b-[1px] border-redFontColor font-medium text-[2rem]"
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
