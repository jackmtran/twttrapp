import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { thunkGetAllComments, deleteCommentThunk } from '../../store/comments'
import { useHistory, NavLink } from "react-router-dom";
import EditCommentsPage from '../editComment';
import './tweetComment.css'
import { FiEdit2 } from 'react-icons/fi'
import { HiOutlineTrash } from 'react-icons/hi'

const TweetComments = ({value}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [editComment, setEditComment] = useState(false);

    const user = useSelector(state => state.session.user)

    const comments = useSelector(state => {
        return Object.values(state.comments).filter(comment => comment.tweetId === value);
    })

    useEffect(() => {
        dispatch(thunkGetAllComments(value))
    }, [dispatch])

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

    const handleEditComment = (e) => {
        e.preventDefault();
        const buttonData = Number(e.target.id);
        history.push(`/comments/${buttonData}`)
    }

    return (
        <>
            <div>
                {comments.map((comment)=>{
                    return (
                        <div className="commenter">
                           <b className="commenter">{comment.poster}</b><a className="cmt">{comment.comment}</a>
                           {comment.commentersId === user.id ? (
                            <>
                            <button id={comment.id} size="10px" className="firstcommentalters" onClick={handleClick}><FiEdit2 size="11px"/></button>
                            <button id={comment.id} size="10px" className="commentalters" onClick={(e)=>handleDeleteComment(e)}><HiOutlineTrash size="11px"/></button>
                            {editComment && <EditCommentsPage commentId={comment.id}/>}
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
