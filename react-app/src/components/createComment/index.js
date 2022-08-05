import { createCommentThunk } from '../../store/comments'
import { useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";


function CreateCommentsPage({value}) {
    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector(state => state.session.user)


    let errorsObj = {comment: ''};
    const [errors, setErrors] = useState(errorsObj);
    const [userId] = useState(user.id);
    const [comment, setComment] = useState("");

    const updateComment = (e) => setComment(e.target.value);

    const handleSubmit = async (e) => {
      e.preventDefault();

      setErrors(errorsObj);

      const newComment = {
          userId,
          tweetId:value,
          comment
        };


      await dispatch(createCommentThunk(newComment));
      history.push("/tweets/");
  };

    const handleCancelClick = (e) => {
      e.preventDefault();
      history.push("/tweets/");
    };



    return (
      <form className="commentform" >
        <input type="text"  className='inputfirst' placeholder="Comment" value={comment} onChange={updateComment}/>
        {errors.comment && <div>{errors.comment}</div>}
        <button type="submit" className="createbutton" onClick={(e)=>handleSubmit(e)}>Comment</button>
      </form>
    );

  }

  export default CreateCommentsPage;