import { thunkGetAllComments} from '../../store/comments'
import { useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";



function CommentsPage() {
    const dispatch = useDispatch();
    const history = useHistory();

    const commentsObject = useSelector((state) => state.comments);
    const comments = Object.values(commentsObject);


useEffect(() => {
    dispatch(thunkGetAllComments());
  }, [dispatch]);

return (
    <>
    <div>
    {comments.map((aComment)=>(
        <a>{aComment.comment}</a>
    ))}
    </div>
    </>

)



}



export default CommentsPage
