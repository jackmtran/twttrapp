import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { thunkGetAllComments, deleteCommentThunk } from '../../store/comments'
import { useHistory, NavLink } from "react-router-dom";
import EditCommentsPage from '../editComment';



const TweetComments = ({tweetId}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [editComment, setEditComment] = useState(false);

    const user = useSelector(state => state.session.user)

    const comments = useSelector(state => {
        return Object.values(state.comments).filter(comment => comment.tweetId === tweetId);
    })

    useEffect(() => {
        dispatch(thunkGetAllComments(tweetId))
    }, [dispatch, tweetId])

    const handleDeleteComment = async (e) => {
        e.preventDefault();
        const buttonData = Number(e.target.id);
        for (const comment of comments) {
          if (comment.id === buttonData) {

            let deletedComment = await dispatch(deleteCommentThunk(comment, buttonData))
                    if(deletedComment) {
                    history.push('/tweets')

        }
      }
    }
}
const handleClick = event => {
    setEditComment(current => !current);
  };


    return (
        <>
            <div>
                {comments.map((comment)=>{
                    return (
                        <div className="commenter">
                           {/* <NavLink className="comname" to={`/users/${comment.commentersId}`}> */}
                            <b>{comment.poster}</b>
                            {/* </NavLink> */}
                            {comment.comment}
                        {comment.commentersId === user.id ? (
                            <>
                            <button id={comment.id} size="13px" className="firstcommentalters" onClick={handleClick}>Edit</button>
                            <button id={comment.id} size="13px" className="commentalters" onClick={(e)=>handleDeleteComment(e)}>Delete</button>
                            {editComment &&
                            <EditCommentsPage commentId={comment.id}/>
                }
                            </>
                           ) : null}
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default TweetComments;
