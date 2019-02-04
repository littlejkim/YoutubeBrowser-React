import axios from "axios";

const KEY = "AIzaSyCqsWPPmApRo6tU6rMtLg-QyeTd_Tx9K-E";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
});
