import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTweetsThunk } from "../../store/tweets";



const PopulateTweets = ({userId}) => {
    const dispatch = useDispatch();

    const tweets = useSelector(state => {
        return Object.values(state.tweets).filter(tweet => tweet.user.id === userId);
      })


    useEffect(() => {
        dispatch(getTweetsThunk());
      }, [dispatch]);

    return (
        <>

                {tweets.map((tweet)=>{
                    return (
                            <img className="photos" src={tweet.imageURL} alt={"Where tweets go"}/>

                    )
                })}
        </>
    )
}

export default PopulateTweets
