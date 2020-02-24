import React from 'react';
import './List.css';

const ListItem = (props) => {
    //console.log('ListItem.js props: ', props);
    return (
        <li>
            <span className="nativeWord">{props.word.nativeWord}</span>
            <span className="foreignWord">| {props.word.foreignWord}</span>
            <span className="delete" onClick={props.onDeleteWord.bind(this, props.word.nativeWord)}>x</span>
        </li>
    );
};

export default ListItem;
