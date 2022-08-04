import { getTweetsThunk, deleteTweetThunk } from '../../store/tweets'
import { useDispatch, useSelector} from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import CreateTweetsPage from '../createTweet'
import EditTweetsPage from '../editTweet'
import './tweetsPage.css'



function TweetsPage() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [editTweet, setEditTweet] = useState(false);

    const tweetsObject = useSelector((state) => state.tweets);
    const tweets = Object.values(tweetsObject);
    const sortedTweet = tweets.sort().reverse();

    const [users, setUsers] = useState([]);

    const user = useSelector((state) => state.session.user)


    useEffect(() => {
        dispatch(getTweetsThunk());
      }, [dispatch]);

      const handleDeleteClick = async(e) => {
        e.preventDefault();
        const buttonData = Number(e.target.id);
        for (const tweet of tweets) {
          if (tweet.id === buttonData) {
            dispatch(deleteTweetThunk(tweet, buttonData))
            history.push("/tweets")
          }
        }
      }

    //   const handleEditClick = (e) => {
    //     e.preventDefault();
    //     const buttonData = Number(e.target.id);
    //         history.push(`/posts/${buttonData}`)
    //       }
    const handleEditClick= event => {
        setEditTweet(current => !current)
      }


    return (
        <>
        <CreateTweetsPage />
        <div className="timeline">
            {sortedTweet.map((tweet)=>(
                <div className="perTweet">
                              {/* <img alt="profilepic" src={tweet.user.profpic} width="25px" height="25px" className="profpic"/>
                              <NavLink className="name" to={`/users/${tweet.user.id}`}><b>{tweet.user.username}</b></NavLink> */}
                              <div className="alldem">{tweet.content}  <img src={tweet.imageUrl} alt={"Where Posts go"} /></div>
                              {tweet.user.id === user.id ? (
                                    <>
                              <button type="button" className="tweetbuttons" id={tweet.id} onClick={handleEditClick}>Edit</button>
                              <button type="button" className="tweetbuttons" id={tweet.id} onClick={handleDeleteClick}>Delete</button>
                              {editTweet && <EditTweetsPage tweetId={tweet.id}/> }
                               </> ) : null}
                </div>
            )
            )}
        </div>
        </>
    )
}


export default TweetsPage
