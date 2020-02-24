import React, {useEffect} from 'react';
import '../components/ResultItem/Result.css';
import ResultItem from "../components/ResultItem/ResultItem";
import {useStore} from "../hooks-store/store";
import {calculatePercent} from "../shared/utility";

const ResultList = React.memo((props) => {
    //console.log('ResultList.js props: ', props);
    const [state, dispatch] = useStore();

    useEffect(() => {
        let correctHits = state.words.filter(w=>w.isHit === true);
        let hitRatio = calculatePercent(correctHits.length, state.words.length);
        dispatch("SET_HIT_RATIO", hitRatio);
    }, []);

    const backToListButtonHandler = () => {
        dispatch("CLEAR");
    };

    return (
        <section className="result-list">
            <h2>Result list</h2>
            <button onClick={backToListButtonHandler}>Back to List</button>
            <ul className="description">
                <li>
                    <span className="nativeWord">Native Word</span>
                    <span className="foreignWord">| Foreign Word</span>
                    <span className="delete"></span>
                </li>
            </ul>
            <ul>
                {state.words.map(word => (
                        <ResultItem
                            key={word.nativeWord}
                            word={word}
                        />
                    )
                )}
            </ul>
            {state.hitRatio !== null && <p className="hitRatio">Hit Ratio: {state.hitRatio}%</p>}

        </section>
    );
});

export default ResultList;
