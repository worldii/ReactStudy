import React from 'react';
import styled from 'styled-components';

const NewsItemBlock = styled.div`
  display: flex;

  .thumbnail {
    margin-right: 1rem;
    img {
      object-fit: cover;
      width: 160px;
      height: 100px;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      margin-top: 0.5rem;
      line-height: 1.5;
      white-space: normal;
    }
  }
  margin-top: 3rem;
`;
function NewsItem({ article }) {
  const { title, description, url, urlToImage } = article;
  return (
    <div>
      <NewsItemBlock>
        {urlToImage && (
          <div className="thumbnail">
            <a href={url}>
              <img src={urlToImage} alt="thumbnail" />
            </a>
          </div>
        )}
        <div className="contents">
          <h2>
            <a href={url}>{title}</a>
          </h2>
          <p>{description}</p>
        </div>
      </NewsItemBlock>
    </div>
  );
}

export default NewsItem;
