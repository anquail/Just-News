import React, { useState } from 'react';
import SimpleSelect from './SimpleSelect';

export default function ArticleCard({
  title,
  imageUrl,
  description,
  url,
  author,
}) {
  const [error, setError] = useState(false);

  const onError = () => setError(true);

  if (error) return null;

  return (
    <div className="item" style={{ marginBottom: '45px' }}>
      <a className="ui small rounded image" href={url}>
        <img onError={onError} src={imageUrl} />
      </a>
      <div className="content" style={{ marginLeft: '30px' }}>
        <a className="header" style={{ color: 'rgb(226, 224, 224)' }}>
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
            style={{ backgroundColor: '#00b1a5' }}
            className="ui right floated tiny button"
          >
            SAVE
          </div>
          {/* <div className="ui right floated content">
            <SimpleSelect />
          </div> */}
        </div>
      </div>
    </div>
  );
}
