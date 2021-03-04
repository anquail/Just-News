import React, { useState } from 'react';

export default function ArticleCard({
  title,
  imageUrl,
  description,
  url,
  author,
  handleBtnClick,
  btnText,
  article,
}) {
  const [error, setError] = useState(false);

  const onError = () => setError(true);
  const btnColor = btnText === 'Save' ? '#00b1a5' : 'rgb(143, 0, 0)';
  const textColor = btnText === 'Save' ? '#1f2833' : 'rgb(226, 224, 224)';

  if (error) return null;
  return (
    <div className="item" style={{ paddingBottom: '35px' }}>
      <a className="ui small rounded image" href={url}>
        <img onError={onError} src={imageUrl} />
      </a>
      <div className="content" style={{ marginLeft: '30px' }}>
        <a
          className="header"
          href={url}
          style={{ color: 'rgb(226, 224, 224)' }}
        >
          {title}
        </a>
        <div className="meta">
          <span className="cinema" style={{ color: '#c5c6c7' }}>
            {author}
          </span>
        </div>
        <div className="description" style={{ color: 'whitesmoke' }}>
          <p>{description}</p>
        </div>
        <div className="extra">
          <div
            style={{ backgroundColor: btnColor, color: textColor }}
            className="ui right floated tiny button"
            onClick={() => handleBtnClick(article, 'favorites')}
          >
            {btnText}
          </div>
        </div>
      </div>
    </div>
  );
}
