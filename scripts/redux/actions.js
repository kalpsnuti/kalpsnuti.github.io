const actions = {
    ADD_COMMENT     : Symbol('ADD_COMMENT'),
    AUTHOR_CHANGE   : Symbol('AUTHOR_CHANGE'),
    TEXT_CHANGE     : Symbol('TEXT_CHANGE')
};

export default {
    actions, 
    addComment: function(comment={author: '', text: ''}){
        return function(dispatch) {
            return dispatch({
                type: actions.ADD_COMMENT,
                comment
            });
        };
    },
    textChange:function (text=''){
        return function(dispatch) {
            return dispatch({
                type: actions.TEXT_CHANGE,
                text
            });
        };
    },
    authorChange: function(author=''){
        return function(dispatch) {
            return dispatch({
                type: actions.AUTHOR_CHANGE,
                author
            });
        };
    },
    loadData: function() {
        return function(dispatch) {
            return dispatch({
                type: actions.ADD_COMMENT,
                comment:{author: 'gaurav', text: 'loading after componentDidMount via thunk'}
            });
        };
    }
};

log('action thunk\'s created successfully');