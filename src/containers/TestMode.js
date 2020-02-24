import React, {useEffect, useState, useRef} from 'react';
import TestModeItem from '../components/TestModeItem/TestModeItem';
import {useStore} from "../hooks-store/store";
import ListItem from "../components/ListItem/ListItem";
import '../components/TestModeItem/Test.css';

const TestMode = React.memo((props) => {
    //console.log('TestMode.js props: ', props);
    const [state, dispatch] = useStore();

    useEffect(() => {
        if (state.words) {
            let testArray = [];
            let stateTemp = state.words.sort(() => Math.random() - 0.5);
            let stateTempLength = (stateTemp.length <= 20) ? stateTemp.length : 20;
            testArray = stateTemp.slice(0, stateTempLength);
            state.testArray.length = 0; // move in reducer
            dispatch("SET_TEST_ARRAY", testArray);
            dispatch("SET_MAX_PROGRESS", stateTempLength - 1); // because index is 0
        }
    }, []);

    useEffect(() => {
        if (state.testArray && state.testArray.length && state.showNextWord && state.maxProgress && !state.showResults) {
            //console.log('state: ', state);
            dispatch("SET_NEXT_WORD", state.testArray[0]);
            state.testArray.shift(); // move this in reducer
            dispatch("SET_TEST_ARRAY", state.testArray);
            let progress = state.maxProgress - state.testArray.length; //// move this in reducer
            dispatch("SET_PROGRESS", progress);
            dispatch("SHOW_NEXT_WORD", false);
        }
    }, [state.testArray, state.showNextWord, state.maxProgress, state.progress, state.showResults]);


    const submitResultsModeHandler = () => {
        if (state.progress === state.maxProgress) {
            dispatch("SET_TEST_MODE", false);
            dispatch("SHOW_RESULTS", true);
        }
    };

    return (
        <section className="test-list">
            <h2>Test mode</h2>
            <p>Please enter the translated word!</p>
            <progress className="progressBar" value={state.progress} max={state.maxProgress}/>
            <ul>
                {state.nextWord && <TestModeItem key={state.nextWord.nativeWord} word={state.nextWord}/>}
            </ul>
            {(state.progress === state.maxProgress) &&<button onClick={submitResultsModeHandler}>Submit Results</button>}
        </section>
    );
});

export default TestMode;
