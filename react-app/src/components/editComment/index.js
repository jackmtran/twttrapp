import { updateCommentThunk } from '../../store/comments'
import { useDispatch, useSelector} from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useState } from "react";
import "./editComm.css"


function EditCommentsPage({commentId}) {
  const dispatch = useDispatch();
  const history = useHistory();

  const { id } = useParams();
  const user = useSelector(state => state.session.user)
  const commentstuff = useSelector(state => state.comments)
  const tweet = useSelector(state => state.tweets)

  const singleComment = commentstuff[commentId]

  let errorsObj = {comment: ''};
  const [errors, setErrors] = useState(errorsObj);
  const[userId] = useState(user.id);
  const[tweetId] = useState(tweet.id)

  const [comment, setComment] = useState(singleComment.comment);

  const updateComment = (e) => setComment(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    let error = false;
    errorsObj = {...errorsObj};
    if(comment === '') {
      errorsObj.comment = "has to be atleast 1 character!";
      error = true;
    } else if (comment.length < 1 || comment.length > 15) {
      errorsObj.comment = "comments must be under 15 characters" ;
      error = true;
    }
    setErrors(errorsObj);

    if(!error) {
    const updatedComment = {
        userId,
        tweetId,
        comment
      };

      dispatch(updateCommentThunk(updatedComment, commentId));


    history.push("/tweets");
    e.preventDefault()
  }
};



  const handleCancelClick = (e) => {
    e.preventDefault();
    history.push("/comments");
  };


  return (
    <form>
      {/* <h1>Edit your COMMENT!</h1> */}
      {errors.comment && <div>{errors.comment}</div>}
      <input type="text" className='inputfirst' placeholder="Comment" value={comment} onChange={updateComment}/>

      <button type="submit" className="editcombutt" onClick={handleSubmit}>Update Comment</button>
      {/* <button type="button" className="editcombutt" onClick={handleCancelClick}>Cancel</button> */}
    </form>
  );

}

export default EditCommentsPage;
