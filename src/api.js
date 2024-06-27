import axios from 'axios';

const API_KEY = 'AIzaSyDO36puEoVzyQC8YzSNxgE4s9Ux5JOL8ss'; // Replace with your YouTube API key

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
