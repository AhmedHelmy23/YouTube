import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  method: 'GET',
  url: 'BASE_URL',
  params: {

    maxResults: '50'
  },
    headers: {
      'X-RapidAPI-Key': '2e7da818bcmsha10e943e09b43e2p1ddef5jsn8c9ff1c0b004',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromApi = async(url)=>{
    const {data}= await axios.get(`${BASE_URL}/${url}`,options)
    return data

  }