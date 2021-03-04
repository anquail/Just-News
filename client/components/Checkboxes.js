import React, { useState } from 'react';
import axios from 'axios';

export default function Checkboxes() {
  const [labels, setLabels] = useState([]);

  const handleCheck = (value) => {
    if (labels.includes(value)) {
      setLabels(labels.filter((val) => val !== value));
    } else {
      setLabels([...labels, value]);
    }
  };
  console.log(labels);

  const handleFilter = () => {
    if (!labels.length) return;
    const query = '/articles/?id[]=' + labels.join('&id[]=');
    console.log(query);
    axios.get(query).then((res) => console.log(res.data));
  };

  return (
    <div className="Checkboxes">
      <input type="checkbox" onClick={() => handleCheck('msnbc')} />
      <label>MSNBC</label>
      <input
        type="checkbox"
        onClick={() => handleCheck('the-huffington-post')}
      ></input>
      <label>Huffington Post</label>
      <input type="checkbox" onClick={() => handleCheck('cnn')}></input>
      <label>CNN</label>
      <input type="checkbox" onClick={() => handleCheck('bbc-news')}></input>
      <label>BBC</label>
      <input type="checkbox" onClick={() => handleCheck('fox-news')}></input>
      <label>Fox</label>
      <input
        type="checkbox"
        onClick={() => handleCheck('national-review')}
      ></input>
      <label>National Review</label>
      <input
        type="checkbox"
        onClick={() => handleCheck('the-american-conservative')}
      ></input>
      <label>American Conservative</label>
      <input
        type="checkbox"
        onClick={() => handleCheck('the-wall-street-journal')}
      ></input>
      <label>Wall Street Journal</label>
      <button
        className="ui mini right floated button"
        style={{ backgroundColor: '#00b1a5', padding: '5px' }}
        onClick={handleFilter}
      >
        Filter
      </button>
    </div>
  );
}
