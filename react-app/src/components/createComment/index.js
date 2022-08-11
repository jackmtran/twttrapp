import { createCommentThunk } from '../../store/comments'
import { useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import './createComment.css'
import SingleTweet from '../singleTweet'
import TweetComments from '../populatecomments'
import { FaPlus } from 'react-icons/fa'


function CreateCommentsPage({value, setShowModal}) {
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
      let error = false;
      errorsObj = {...errorsObj};
      if(comment === '') {
        errorsObj.comment = "has to be at least 1 character!";
        error = true;
      } else if (comment.length < 1 || comment.length > 15) {
        errorsObj.comment = "comments must be under 15 characters";
        error = true;
      }
      setErrors(errorsObj);

      if(!error){
      const newComment = {
          userId,
          tweetId:value,
          comment
        };


      await dispatch(createCommentThunk(newComment));
      history.push("/tweets");

      // setShowModal(false)
  };
}

    const handleCancelClick = (e) => {
      e.preventDefault();
      history.push("/tweets");
    };



    return (
      <div>
      <SingleTweet value={value}/>
      <form className="commentform" >
        <input type="text"  className='inputfirst' placeholder="Comment" value={comment} onChange={updateComment} required={true}/>
        {errors.comment && <div>{errors.comment}</div>}
        <button type="submit" className="createbutton" onClick={(e)=>handleSubmit(e)}><FaPlus size="10px"className="iconss"/></button>
      </form>
      <TweetComments value={value}/>
      </div>
    );

  }

  export default CreateCommentsPage;
