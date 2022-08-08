import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { thunkGetAllComments, deleteCommentThunk } from '../../store/comments'
import { useHistory } from "react-router-dom";


const TweetsComments = () => {
    const dispatch = useDispatch();
    const history = useHistory();



    const comments = useSelector(state => {
        return Object.values(state.comments);
    })

    useEffect(() => {
       dispatch(thunkGetAllComments())
    }, [dispatch])


    const handleDeleteComment = (e) => {
        e.preventDefault();
        const buttonData = Number(e.target.id);
        for (const comment of comments) {
          if (comment.id === buttonData) {
            dispatch(deleteCommentThunk(comment, buttonData))
            history.push("/tweets/")
          }
        }
      }

    const handleEditComment = (e) => {
        e.preventDefault();
        const buttonData = Number(e.target.id);
        history.push(`/comments/${buttonData}`)
    }

    return(
        <ul id="TweetsComments-container">
            <h1>Comments</h1>
            <div id="thisTweets-comments-container">
                { comments.map(comment =>{
                    return (
                        <div key={comment.id}>
                            <h3>{comment.content}</h3>
                            <button type="button" id={comment.id} onClick={handleEditComment}>Edit</button>
                            <button type="button" id={comment.id} onClick={handleDeleteComment}>Delete</button>
                        </div>
                        )
                    })}
            </div>
        </ul>
    )
}

export default TweetsComments
