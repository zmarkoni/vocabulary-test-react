import React from 'react';

import EntryForm from './components/EntryForm/EntryForm';
import ErrorModal from "./components/UI/ErrorModal";

import VocabularyList from "./containers/VocabularyList";
import TestMode from "./containers/TestMode";
import ResultList from "./containers/ResultList";
import {useStore} from "./hooks-store/store";

const App = () => {
    const [state, dispatch] = useStore();
    //console.log('app.js', state);

    const testModeHandler = () => {
        if(state.words.length < 20) {
            dispatch("ERROR", "Please add more than 20 words!");
        } else {
            dispatch("SET_TEST_MODE", true);
        }
    };

    const clearErrorHandler = () => {
        dispatch("CLEAR");
    };

    return (
        <div className="App">
            {(!state.testMode && !state.showResults) && <EntryForm/>}
            {(!state.testMode && !state.showResults) &&
                <div className="set-test-mode">
                    <button onClick={testModeHandler}>Start Test Mode</button>
                </div>
            }
            {(!state.testMode && !state.showResults) && <VocabularyList/>}
            {(state.testMode && !state.showResults) && <TestMode/>}
            {!state.testMode && state.showResults && <ResultList/>}
            {state.error && <ErrorModal onClose={clearErrorHandler}>{state.errorMessage}</ErrorModal>}
        </div>
    );
};

export default App;
