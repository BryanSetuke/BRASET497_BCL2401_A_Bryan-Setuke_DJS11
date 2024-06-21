import axios from "axios";

const API_BASE_URL = "https://podcast-api.netlify.app";

export const fetchShows = async () => {
    const response = await axios.get(`${API_BASE_URL}`);
    return response.data;
};

export const fetchShowDetail = async (id) => {
    const response = await axios.get(`${API_BASE_URL}/id/${id}`);
    return response.data;
}; 

export const fetchSeasonDetail = async (id) => {
    const response = await axios.get(`${API_BASE_URL}/season/${id}`);
    return response.data;
};

export const fetchEpisodeDetail = async (id) => {
    const response = await axios.get(`${API_BASE_URL}/episode/${id}`);
    return response.data;
};
