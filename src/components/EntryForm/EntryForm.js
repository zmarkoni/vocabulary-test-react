import React, {useState} from 'react';
import Card from '../UI/Card';
import './EntryForm.css';
import {useStore} from "../../hooks-store/store";

const EntryForm = React.memo(() => {
    //console.log('EntryForm.js');
    const [nativeWord, setNativeWord] = useState('');
    const [foreignWord, setForeignWord] = useState('');
    const [store, dispatch] = useStore();

    const submitHandler = (event) => {
        event.preventDefault();

        let sameNativeWord = store.words.filter(w => w.nativeWord === nativeWord);
        let sameForeignWord = store.words.filter(w => w.foreignWord === foreignWord);

        if(nativeWord.length < 3 || foreignWord.length < 3) {
            dispatch("ERROR", "Please add more than 2 letters");
        } else if(sameNativeWord.length || sameForeignWord.length) {
            sameNativeWord.length && dispatch("ERROR", "Please add new nativeWord word!");
            sameForeignWord.length && dispatch("ERROR", "Please add new foreignWord word!");
        } else {
            dispatch("ADD_WORD", {
                nativeWord: nativeWord,
                foreignWord: foreignWord,
                hintWord: null,
                isHit: false,
            });
        }
    };

    return (
        <section className="vocabulary-form">
            <Card>
                <form onSubmit={submitHandler}>
                    <div className="form-control">
                        <label htmlFor="nativeWord">Enter native word</label>
                        <input type="text" id="nativeWord"
                               value={nativeWord}
                               onChange={event => {
                                   setNativeWord(event.target.value);
                               }}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="foreignWord">Enter foreign word</label>
                        <input type="text" id="foreignWord"
                               value={foreignWord}
                               onChange={event => {
                                   setForeignWord(event.target.value);
                               }}/>
                    </div>
                    <div className="vocabulary-form__actions">
                        <button type="submit">Add Word</button>
                    </div>
                </form>
            </Card>
        </section>
    );
});

export default EntryForm;
