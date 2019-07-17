import {actions} from './redux/actions';

const commentsReducer = (state={items:[], author:'', text: ''}, action) => {
    var objRecv = {};
    
    if(undefined !== action.comment) objRecv.comment = action.comment;
    if(undefined !== action.author) objRecv.author = action.author;
    if(undefined !== action.text) objRecv.text = action.text;

    log('creating '+action.type.toString()+' for ', objRecv);
    switch (action.type) {
        case actions.ADD_COMMENT:
            return {
                ...state,
                items: [...state.items, {id: parseInt(Math.random()*10000), ...action.comment}]
            };
        case actions.AUTHOR_CHANGE:
            return {
                ...state,
                author: action.author
            };
        case actions.TEXT_CHANGE:
            return {
                ...state,
                text: action.text
            };
        default:
        return state;
    }
};

const exportsrootreducer = {
    filename: './redux/reducers',
    rootReducer: commentsReducer
};

export {
    exportsrootreducer
};

log('reducers created successfully');