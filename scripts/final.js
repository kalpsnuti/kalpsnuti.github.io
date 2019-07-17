import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import CommentBox from './components';
import {configureStore} from './redux/configureStore';

/* var checkStore = setInterval(()=>{
    if(undefined !== configureStore){
        clearInterval(checkStore);
    }
}, 8);
 */

const store = configureStore({author:'', text: '',
    items:[
        {id: 1, author: "Cory Brown", text: "My 2 scents - loaded via intitalState"},
        {id: 2, author: "Jared Anderson", text: "Let me put it this way. You've heard of Socrates? Aristotle? Plato? Morons! - loaded via intitalState"},
        {id: 3, author: "Matt Poulson", text: "It's just a function! - loaded via intitalState"},
        {id: 4, author: "Bruce Campbell", text: "Fish in a tree? How can that be? - loaded via intitalState"},
        {id: 5, author: "Tim Riker", text: "So what we're learning is to keep our componets dumb? - loaded via intitalState"}
    ]
});

ReactDOM.render(
    <Provider store={store}>
        <CommentBox />
    </Provider>
    , document.querySelector('#content')
);

log('app started and running...');