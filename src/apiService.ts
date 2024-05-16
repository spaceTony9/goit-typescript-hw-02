import axios from 'axios';
import { Photo } from './components/App/App.types';

type ApiResponse = {
  results: Photo[];
};

export default async function fetchPhotosWithKeyWord(
  keyword: string,
  page: number
): Promise<Photo[]> {
  const instance = axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: { 'Accept-Version': 'v1' },
    params: {
      client_id: '1ctU6kuTt2ahGNIdcLlG3-NmcIRESl6UxJvupJGrReY',
      query: keyword,
      page,
      per_page: 12,
    },
  });
  try {
    const response = await instance.get<ApiResponse>('/search/photos');
    return response.data.results;
  } catch (error) {
    console.error('Error fetching photos:', error);
    throw error;
  }
}
