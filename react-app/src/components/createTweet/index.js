import { createTweetsThunk } from '../../store/tweets'
import { useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import './createTweet.css'

function CreateTweetsPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector(state => state.session.user)

  let errorsObj = {content: ''};
  const [errors, setErrors] = useState(errorsObj);

  const[userId] = useState(user.id);
  const [imageURL, setUrl] = useState("");
  const [content, setContent] = useState("");


  const updateUrl = (e) => setUrl(e.target.value)
  const updateContent = (e) => setContent(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let error = false;
    errorsObj = {...errorsObj};
    if(content === '') {
      errorsObj.content = "Requires input!";
      error = true;
    } else if (content.length < 1 || content.length > 144) {
      errorsObj.content = "content must be longer than 5 characters and shorter than 20";
      error = true;
    }


    setErrors(errorsObj);

    if(!error) {
    const createdTweet = {
        userId,
        content
      };

      let newTweet = await dispatch(createTweetsThunk(createdTweet))
          if(newTweet) {
          history.push('/tweets')
        }
        setContent("")
      }

}

  const handleCancelClick = (e) => {
    e.preventDefault();
    history.push("/tweets");
  };



  return (
    <form className="tweet-form">
      <h2 className="tweetword"></h2>
      {Object.values(errors).map((error, idx) => <div key={idx}>{error}</div>)}
      {/* <img alt="profilepic" src={tweet.user.profpic} width="25px" height="25px" className="profpic"/> */}
      <textarea className="taTweet" type="textarea" placeholder="What's happening?" value={content} onChange={updateContent}/>
      {/* <input className="taInput" type="text" placeholder="Image Url" value={imageURL} onChange={updateUrl}/> */}
      <button className="tweetsbutton" type="submit" onClick={handleSubmit}>tweet</button>
      {/* <button className="button" type="button" onClick={handleCancelClick}>Cancel</button> */}
    </form>
  );

}

export default CreateTweetsPage;
