const GET_TWEETS = 'tweets/GET_TWEETS';
const CREATE_TWEET = 'tweets/CREATE_TWEET';
const DELETE_TWEET = 'tweets/DELETE_TWEET';
const UPDATE_TWEET = 'tweets/UPDATE_TWEET';

const getTweets = (tweets) => ({
    type: GET_TWEETS,
    tweets,
})

const createTweets = (createdTweet) => ({
    type: CREATE_TWEET,
    createdTweet,
})

const deleteTweet = (tweet) => ({
    type: DELETE_TWEET,
    tweet,
})

const updateTweet = (tweet) => ({
    type: UPDATE_TWEET,
    tweet,
})



export const getTweetsThunk = () => async(dispatch) => {
    const response = await fetch('api/tweets/')
    const data = await response.json();
    dispatch(getTweets(data.tweets))
    return data.tweets
}

export const createTweetsThunk = (createdTweet) => async(dispatch) => {
    const response = await fetch('api/tweets/create', {
        method:"POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(createdTweet)
    });
    if (response.ok) {
        const createdTweet = await response.json();
        dispatch(createTweets(createdTweet));
        return createdTweet
    }
}

const initialState = {};

export const deleteTweetThunk = (tweet, id) => async(dispatch) => {
    const response = await fetch(`/api/tweets/${id}`, {
      method: "DELETE",
    })
    if (response.ok) {
      const tweetId = await response.json(tweet)
      dispatch(deleteTweet(tweetId))
      return tweetId;
    }
  }

  export const updateTweetThunk = (tweet, id) => async(dispatch) => {
    const response = await fetch(`/api/tweets/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tweet),
      });
      if (response.ok) {
        const tweet = await response.json();
        dispatch(updateTweet(tweet));
        return tweet;
      }
    }


 export const tweetsReducer = (state = initialState, action) => {
        let newState = {...state};
        switch(action.type) {
            case GET_TWEETS:
                action.tweets.forEach((tweet) => {
                    return newState[tweet.id] = tweet;
                })
                return newState;
            case CREATE_TWEET:
                if (!state[action.createdTweet.id]) {
                    newState = {
                        ...state,
                        [action.createdTweet.id]: action.createdTweet,
                    };
                }
                return newState;
            case UPDATE_TWEET:
              newState = {...state, [action.tweet.id]: action.tweet,};
                return newState
            case DELETE_TWEET:
                delete newState[action.tweet.id]
                return newState

            default:
                return state;
        }
    }
