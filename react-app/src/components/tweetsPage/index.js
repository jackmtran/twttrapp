import { getTweetsThunk, deleteTweetThunk } from '../../store/tweets'
import { useDispatch, useSelector} from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";


function TweetsPage() {
    const dispatch = useDispatch();
    const history = useHistory();

    const tweetsObject = useSelector((state) => state.tweets);
    const tweets = Object.values(tweetsObject);
    const sortedTweet = tweets.sort().reverse();

    const [users, setUsers] = useState([]);

    const user = useSelector((state) => state.session.user)
    // const[userId] = useState(user.id);


    useEffect(() => {
        dispatch(getTweetsThunk());
      }, [dispatch]);



    return (
        <>
        <div className="timeline">
            {sortedTweet.map((tweet)=>(
                <div className="perTweet">
                              {/* <img alt="profilepic" src={tweet.user.profpic} width="25px" height="25px" className="profpic"/>
                              <NavLink className="name" to={`/users/${tweet.user.id}`}><b>{tweet.user.username}</b></NavLink> */}
                              <li>{tweet.content}</li>
                </div>
            )
            )}
        </div>
        </>
    )
}


export default TweetsPage
