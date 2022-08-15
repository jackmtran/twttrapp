import { getTweetsThunk, deleteTweetThunk } from '../../store/tweets'
import { useDispatch, useSelector} from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import CreateTweetsPage from '../createTweet'
import EditTweetsPage from '../editTweet'
import EditTweetModal from '../editTweetModal'
import CreateCommentsPage from '../createComment'
import CreateCommentModal from '../createCommentModal'

import { FiEdit2 } from 'react-icons/fi'
import { HiOutlineTrash } from 'react-icons/hi'

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
    //         history.push(`/tweets/${buttonData}`)
    //       }
    const handleEditClick= event => {
        setEditTweet(current => !current)
      }


    return (
        <>
        <div className="wholething">
          <div className="sticky ">Home</div>
        <CreateTweetsPage />
        <div className="timeline">
            {sortedTweet.map((tweet)=>(
                <div className="perTweet">
                          <div className="tweettopbar">
                            <div className="profile">
                              {/* <NavLink to={`/users/${tweet.user.id}`} > */}
                                <img alt="profilepic" src={tweet.user.profpic} width="25px" height="25px" className="profpic"/>
                                {/* </NavLink> */}
                            </div>
                            <div className="tweetinside">
                              {/* <NavLink className="name" to={`/users/${tweet.user.id}`}> */}
                                <a className="name">{tweet.user.username}</a>
                                {/* </NavLink> */}
                                {/* <div> */}
                                  <div className="whitewords">
                                    <a className="limit"> {tweet.content} <img src={tweet.imageUrl}/> </a>
                                  </div>
                                {/* </div> */}
                              </div>
                          </div>
                              {tweet.user.id === user.id ? (
                                    <>
                                    <div className="bottomicons" key={tweet.id}>
                              <CreateCommentModal value={tweet.id} />
                              <EditTweetModal tweet={tweet} />
                              <HiOutlineTrash className="tweetbuttons" size="20px" id={tweet.id} onClick={(e) => handleDeleteClick(e)}></HiOutlineTrash>
                              {editTweet && <EditTweetsPage tweetId={tweet.id}/> }</div>
                               </> ) :
                                <>
                                <div className="bottomicons">
                                  <CreateCommentModal value={tweet.id} />
                                  </div>
                                  </>
                              }


                </div>
            )
            )}
        </div>
        </div>
        </>
    )
}


export default TweetsPage
