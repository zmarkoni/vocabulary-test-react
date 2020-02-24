import React, {useState, useEffect, useRef} from 'react';
import './Test.css';
import {useStore} from "../../hooks-store/store";

const TestModeItem = React.memo((props) => {
    //console.log('TestModeItem.js props: ', props);
    const [hintWord, setHintWord] = useState('');
    const [state, dispatch]= useStore();
    const inputRef = useRef();
    //console.log('TestModeItem.js state: ', state);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (hintWord === inputRef.current.value) {
                const updatedWord = {
                    nativeWord: props.word.nativeWord,
                    foreignWord: props.word.foreignWord,
                    isHit: props.word.foreignWord === hintWord,
                    hintWord: hintWord
                };
                dispatch("UPDATE_HINT_WORD", updatedWord);
            }
        }, 500);

        return () => {
            clearTimeout(timer);
        }
    }, [hintWord, inputRef]);

    const nextWordModeHandler = () => {
        if (state.progress !== state.maxProgress) {
            dispatch("SHOW_NEXT_WORD", true);
        }
    };

    return (
        <li className="test-item">
            <span className="nativeWord">{props.word.nativeWord}</span>
            <input type="text" className="foreignWord"
                   value={hintWord}
                   onChange={event => setHintWord(event.target.value)}
                   ref={inputRef}
            />
            {(state.progress !== state.maxProgress) && <button onClick={nextWordModeHandler}>Next</button>}
        </li>
    );
});

export default TestModeItem;
