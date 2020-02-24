import React from 'react';
import '../components/ListItem/List.css';
import ListItem from "../components/ListItem/ListItem";
import {useStore} from "../hooks-store/store";

const VocabularyList = React.memo((props) => {
    //console.log('VocabularyList.js props: ', props);
    const [state, dispatch] = useStore();

    const deleteWordHandler = (deleteWord) => {
        dispatch("DELETE_WORD", deleteWord);
    };

    return (
        <section className="vocabulary-list">
            <h2>Vocabulary list of entered words: {state.words.length}</h2>
            <ul className="description">
                <li>
                    <span className="nativeWord">Native Word</span>
                    <span className="foreignWord">| Foreign Word</span>
                    <span className="delete"></span>
                </li>
            </ul>
            <ul>
                {state.words.map(word => (
                        <ListItem
                            key={word.nativeWord}
                            word={word}
                            onDeleteWord={(deleteWord) => deleteWordHandler(deleteWord)}
                        />
                    )
                )}
            </ul>
        </section>
    );
});

export default VocabularyList;
