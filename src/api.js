import axios from 'axios';

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY; // Replace with your YouTube API key

export const getComments = async (videoId) => {
  let comments = [];
  let nextPageToken = '';
  
  do {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/commentThreads', {
      params: {
        part: 'snippet',
        videoId: videoId,
        maxResults: 100,
        pageToken: nextPageToken,
        key: API_KEY
      }
    });
    
    comments = comments.concat(response.data.items);
    nextPageToken = response.data.nextPageToken;
  } while (nextPageToken);

  return comments.map(item => item.snippet.topLevelComment.snippet.authorDisplayName);
};
