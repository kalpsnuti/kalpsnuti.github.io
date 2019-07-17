import {Component} from 'react'; 
import {connect} from 'react-redux';

import { bindActionCreators } from "redux";
import {loadData, addComment, authorChange, textChange} from './redux/actions';

const Comment = ({id, author, children}) => (
    <div className='comment'>
        <h2 className='commentAuthor'>
            {id}. {author}
        </h2>
        {children}
    </div>
);

const CommentList = ({comments}) => (
    <div className='commentList'>
        { 
            comments.map(
                ({id, text, author}) => (<Comment key={id} id={id} author={author}>{text}</Comment>)
            ) 
        }
    </div>
);

const CommentForm = ({author, text, onCommentSubmit, onAuthorChange, onTextChange, ...props}) => (
    <form className='commentForm'
        onSubmit={ (e) => {
          e.preventDefault();
          onCommentSubmit(author, text);
        }}
    >
        <input type='text'
            name='author'
            placeholder='your name'
            onChange={(e) => onAuthorChange(e.target.value)}
        />&nbsp;&nbsp;&nbsp;

        <input type='text'
            name='text'
            placeholder='comment please ...'
            onChange={(e) => onTextChange(e.target.value)}
        />&nbsp;&nbsp;&nbsp;
        <button>Post</button>
    </form>
);

class CommentBox extends Component {
    componentDidMount() {
        this.props.loadData();
    }
    
    render() {
        const { addComment, authorChange, textChange, items, author, text } = this.props;

        return (
            <div className='commentBox'>
                <h1>Comments</h1>
                <CommentList comments={items} />
                <CommentForm author={author} text={text} 
                    onCommentSubmit={(author, text)=> addComment({author, text})}
                    onAuthorChange={(author)=> authorChange(author)}
                    onTextChange={(text) => textChange(text)}
                />
            </div>
        )
    }
}

const exportscomps = {
    filename: './components',
    CommentBox: connect(
        state => ({items: state.items, author: state.author, text: state.text}),
        dispatch => (
            {
                loadData: bindActionCreators(loadData, dispatch),
                addComment: bindActionCreators(addComment, dispatch),
                authorChange: bindActionCreators(authorChange, dispatch),
                textChange: bindActionCreators(textChange, dispatch)
            }
        )
    )(CommentBox)
};

export {
    exportscomps
 };
 log('components generated successfully');