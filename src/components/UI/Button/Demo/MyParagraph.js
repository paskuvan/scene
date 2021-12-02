import React from 'react';

const myParagraph = (props) => {
    console.log('MyParagraph RUNNING');
    return <p>{props.show ? 'This is new!' : ''}</p>;
};

export default myParagraph;