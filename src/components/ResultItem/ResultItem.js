import React from 'react';
import './Result.css';

const ResultItem = (props) => {
    //console.log('ListItem.js props: ', props);
    return (
        <li className={props.word.isHit ? 'hitTrue' : 'hitFalse'}>
            <span className="nativeWord">{props.word.nativeWord}</span>
            <span className="foreignWord">| {props.word.foreignWord}</span>
            <span className="hitWord">| {props.word.hintWord}</span>
        </li>
    );
};

export default ResultItem;
