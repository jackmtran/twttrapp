import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getTweetsThunk} from "../../store/tweets"
import './style.css'


function SingleTweet() {
    const dispatch = useDispatch();

    const url = window.location.href.split('/');
    const num = Number(url[url.length - 1]);


    const user = useSelector((state) => state.session.user)
    const tweet  = useSelector((state) => Object.values(state.tweets).find((tweets) => tweets?.id === num))

    useEffect(() => {
        dispatch(getTweetsThunk())
    }, [dispatch])

    if (!tweet) {
        return(
            <div className="done">
            <h2>Sorry this is tweet doesn't exist.</h2>
            </div>
        );
    } else {
        return (
            <>
            <div>
            <div>{tweet.user.profpic}</div>
            <div>{tweet.user.username}</div>
            <div>{tweet.content}</div>
            </div>
            </>
        )
    }
}


export default SingleTweet
