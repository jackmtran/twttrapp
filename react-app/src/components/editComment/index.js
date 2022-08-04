import { updateCommentThunk } from '../../store/comments'
import { useDispatch, useSelector} from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useState } from "react";


function EditCommentsPage({commentId}) {
  const dispatch = useDispatch();
  const history = useHistory();

  const { id } = useParams();
  const user = useSelector(state => state.session.user)
  const commentstuff = useSelector(state => state.comments)
  const post = useSelector(state => state.posts)

  const singleComment = commentstuff[commentId]

  let errorsObj = {comment: ''};
  const [errors, setErrors] = useState(errorsObj);

  const[userId] = useState(user.id);
  const[postId] = useState(post.id)

  const [comment, setComment] = useState(singleComment.comment);

  const updateComment = (e) => setComment(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    let error = false;
    errorsObj = {...errorsObj};
    if(comment === '') {
      errorsObj.comment = "Requires input!";
      error = true;
    } else if (comment.length < 5 || comment.length > 20) {
      errorsObj.comment = "comments must be longer than 5 characters and shorter than 20";
      error = true;
    }
    setErrors(errorsObj);

    if(!error) {
    const updatedComment = {
        userId,
        postId,
        comment
      };

      dispatch(updateCommentThunk(updatedComment, commentId));


    history.push("/posts/");
  }
};



  const handleCancelClick = (e) => {
    e.preventDefault();
    history.push("/comments/");
  };


  return (
    <form>
      {/* <h1>Edit your COMMENT!</h1> */}
      <input type="text" className='inputs' placeholder="Comment" value={comment} onChange={updateComment}/>
      {errors.comment && <div>{errors.comment}</div>}
      <button type="submit" className="editcombutt" onClick={handleSubmit}>Update Comment</button>
      {/* <button type="button" className="editcombutt" onClick={handleCancelClick}>Cancel</button> */}
    </form>
  );

}

export default EditCommentsPage;
