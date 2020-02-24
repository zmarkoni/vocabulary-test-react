import {initStore} from './store';
import {updateObject} from "../shared/utility";

const configureGlobalStore = () => {
    const actions = {
        ADD_WORD: (state, word) => {
            return updateObject(state, state.words.push(word));
        },
        DELETE_WORD: (state, deleteWord) => {
            const deleteWordIndex = state.words.findIndex(word => word.nativeWord === deleteWord);
            return updateObject(state, state.words.splice(deleteWordIndex, 1));
        },
        UPDATE_HINT_WORD: (state, updateWord) => {
            const updateWordIndex = state.words.findIndex(word => word.nativeWord === updateWord.nativeWord);
            return updateObject(state, state.words[updateWordIndex] = updateWord);
        },
        SET_TEST_MODE: (state, mode) => {
            return updateObject(state, state.testMode = mode);
        },
        SHOW_NEXT_WORD: (state, mode) => {
            return updateObject(state, state.showNextWord = mode);
        },
        SHOW_RESULTS: (state, mode) => {
            return updateObject(state, state.showResults = mode);
        },
        SET_TEST_ARRAY: (state, testArray) => {
            return updateObject(state, state.testArray = testArray.slice(0));
        },
        SET_NEXT_WORD: (state, nextWord) => {
            return updateObject(state, state.nextWord = nextWord);
        },
        SET_PROGRESS: (state, progress) => {
            return updateObject(state, state.progress = progress);
        },
        SET_MAX_PROGRESS: (state, maxProgress) => {
            return updateObject(state, state.maxProgress = maxProgress);
        },
        CLEAR: () => {
            return initStore(actions, initialState);
        },
        ERROR: (state, message) => {
            updateObject(state, state.error = true);
            return updateObject(state, state.errorMessage = message);
        },
        SET_HIT_RATIO: (state, hits) => {
            return updateObject(state, state.hitRatio = hits);
        },
    };

    const initialWords = [
        {
            foreignWord: "book",
            hintWord: null,
            isHit: false,
            nativeWord: "knjiga"
        },
        {
            foreignWord: "house",
            hintWord: null,
            isHit: false,
            nativeWord: "kuca"
        },
        {
            foreignWord: "dog",
            hintWord: null,
            isHit: false,
            nativeWord: "pas"
        },
        {
            foreignWord: "river",
            hintWord: null,
            isHit: false,
            nativeWord: "reka"
        },
        {
            foreignWord: "hand",
            hintWord: null,
            isHit: false,
            nativeWord: "ruka"
        },
        {
            foreignWord: "test",
            hintWord: null,
            isHit: false,
            nativeWord: "testTranslate"
        },
        {
            foreignWord: "test1",
            hintWord: null,
            isHit: false,
            nativeWord: "testTranslate1"
        },
        {
            foreignWord: "test2",
            hintWord: null,
            isHit: false,
            nativeWord: "testTranslate2"
        },
        {
            foreignWord: "test3",
            hintWord: null,
            isHit: false,
            nativeWord: "testTranslate3"
        },
        {
            foreignWord: "test",
            hintWord: null,
            isHit: false,
            nativeWord: "testTranslate4"
        },
        {
            foreignWord: "test5",
            hintWord: null,
            isHit: false,
            nativeWord: "testTranslate5"
        },
        {
            foreignWord: "test6",
            hintWord: null,
            isHit: false,
            nativeWord: "testTranslate6"
        }, {
            foreignWord: "test7",
            hintWord: null,
            isHit: false,
            nativeWord: "testTranslate7"
        }, {
            foreignWord: "test8",
            hintWord: null,
            isHit: false,
            nativeWord: "testTranslate8"
        }, {
            foreignWord: "test9",
            hintWord: null,
            isHit: false,
            nativeWord: "testTranslate9"
        },
        {
            foreignWord: "test10",
            hintWord: null,
            isHit: false,
            nativeWord: "testTranslate10"
        },
        {
            foreignWord: "test11",
            hintWord: null,
            isHit: false,
            nativeWord: "testTranslate11"
        },
        {
            foreignWord: "test12",
            hintWord: null,
            isHit: false,
            nativeWord: "testTranslate12"
        },
        {
            foreignWord: "test13",
            hintWord: null,
            isHit: false,
            nativeWord: "testTranslate13"
        },
        {
            foreignWord: "test14",
            hintWord: null,
            isHit: false,
            nativeWord: "testTranslate14"
        },
        {
            foreignWord: "test15",
            hintWord: null,
            isHit: false,
            nativeWord: "testTranslate15"
        },
        {
            foreignWord: "test16",
            hintWord: null,
            isHit: false,
            nativeWord: "testTranslate16"
        },


    ];

    const initialState = {
        words: [],
        testMode: false,
        showNextWord: true,
        showResults: false,
        testArray: [],
        nextWord: null,
        progress: -1,
        maxProgress: 0,
        error: false,
        errorMessage: null,
        hitRatio: null
    };

    initStore(actions, initialState);
};

export default configureGlobalStore;