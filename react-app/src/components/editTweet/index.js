import { getTweetsThunk, updateTweetThunk } from '../../store/tweets'
import { useDispatch, useSelector} from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useState } from "react";
import './editTwt.css'
import { FaTwitter } from "react-icons/fa"



function EditTweetsPage({tweet, setShowModal}) {
  const dispatch = useDispatch();
  const history = useHistory();

  const {id} = useParams();
  const user = useSelector(state => state.session.user)
  // const tweet = useSelector(state => state.tweets)
  const tweetId = tweet.id


  let errorsObj = {content:""};
  const [errors, setErrors] = useState(errorsObj);
  const[userId] = useState(user.id);
  const [imageURL, setUrl] = useState(tweet.imageURL);
  const [content, setContent] = useState(tweet.content);


  // const updateUrl = (e) => setUrl(e.target.value)
  const updateContent = (e) => setContent(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    let error = false;
    errorsObj = {...errorsObj};
    if(content === '') {
      errorsObj.content = "Content has to be at least 1 character!";
      error = true;
    } else if (content.length < 1 || content.length > 144) {
      errorsObj.content = "Contents must be under 144 characters" ;
      error = true;
    }
    setErrors(errorsObj);

    if(!error) {
    const updatedTweet = {
        userId,
        imageURL,
        content
      };

      dispatch(updateTweetThunk(updatedTweet, tweetId));
      dispatch(getTweetsThunk())
      setShowModal(false)

};
}

  return (
    <form>
      <div className="errors">
      {Object.values(errors).map((error, idx) =>
      <a key={idx}>
        {error}
      </a>
      )}
      </div>
      <textarea type="text" className="inputfirst" placeholder="Content" value={content} onChange={(e) => updateContent(e)}/>
      <button className="move" type="submit"  onClick={(e) => handleSubmit(e)}><FaTwitter className="birdyagain"size="11px"/></button>
    </form>
  );

}

export default EditTweetsPage;
