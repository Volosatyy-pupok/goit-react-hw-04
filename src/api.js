import axios from "axios";

const baseURL = "https://api.unsplash.com/";
const API_KEY = "HS4pXgA-4gxWQRZ39c0Hkca_5f2ek0xqBEjAKxRD7Mc";

export const fetchArticlesWithTopic = async (topic, page) => {
  try {
    const response = await axios.get(`${baseURL}/search/photos`, {
      params: {
        query: topic,
        client_id: API_KEY,
        page,
      },
    });

    console.log(response.data);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};