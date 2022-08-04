import { createCommentThunk } from '../../store/comments'
import { useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";


function CreateCommentsPage({value}) {
    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector(state => state.session.user)


    let errorsObj = {content: ''};
    const [errors, setErrors] = useState(errorsObj);
    const [userId] = useState(user.id);
    const [comment, setComment] = useState("");

    const updateComment = (e) => setComment(e.target.value);

    const handleSubmit = async (e) => {
      e.preventDefault();

      setErrors(errorsObj);

      const newComment = {
          userId,
          postId:value,
          content
        };


      await dispatch(createCommentThunk(newComment));
      history.push("/posts/");
  };

    const handleCancelClick = (e) => {
      e.preventDefault();
      history.push("/posts/");
    };



    return (
      <form className="commentform" >
        <input type="text"  className='inputfirst' placeholder="Content" value={content} onChange={updateContent}/>
        {errors.content && <div>{errors.content}</div>}
        <button type="submit" className="createbutton" onClick={(e)=>handleSubmit(e)}>Comment</button>
      </form>
    );

  }

  export default CreateCommentsPage;
