import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ margin: '10px 0px', padding: '10px 0px', overflow: 'scroll', border: '2px solid black', height: '800px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;