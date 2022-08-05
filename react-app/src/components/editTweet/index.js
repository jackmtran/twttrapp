import { updateTweetThunk } from '../../store/tweets'
import { useDispatch, useSelector} from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useState } from "react";


function EditTweetsPage({tweetId}) {
  const dispatch = useDispatch();
  const history = useHistory();

  const {id} = useParams();
  const user = useSelector(state => state.session.user)
  const tweet = useSelector(state => state.tweets)
  const singleTweet= tweet[tweetId]

  const[userId] = useState(user.id);
  const [imageURL, setUrl] = useState(singleTweet.imageURL);
  const [content, setContent] = useState(singleTweet.content);


  const updateUrl = (e) => setUrl(e.target.value)
  const updateContent = (e) => setContent(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedTweet = {
        userId,
        imageURL,
        content
      };

      dispatch(updateTweetThunk(updatedTweet, tweetId));
    history.push("/tweets/");

};


  return (
    <form>
      <input type="text" placeholder="Image Url" value={imageURL} onChange={updateUrl}/>
      <input type="text"  placeholder="Content" value={content} onChange={updateContent}/>
      <button type="submit"  onClick={handleSubmit}>Submit Edit</button>
    </form>
  );

}

export default EditTweetsPage;