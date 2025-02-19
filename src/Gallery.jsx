import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useGlobalContext } from './context';

const URL = 'https://api.unsplash.com/search/photos';

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

const Gallery = () => {
  const { searchValue } = useGlobalContext();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [searchValue],
    queryFn: () => {
      // console.log(searchValue);
      return axios.get(`${URL}?query=${searchValue}`, {
        headers: {
          'Accept-Version': 'v1',
          Authorization: `Client-ID ${ACCESS_KEY}`,
        },
      });
    },

    onSuccess: (data) => {
      console.log(data);
    },
  });

  if (isLoading)
    return (
      <div className='image-container'>
        <div className='loading'></div>
      </div>
    );

  if (isError)
    return (
      <div className='image-container'>
        <div>Error: {error.response.data.errors[0]}</div>
      </div>
    );

  return (
    <div className='image-container'>
      {data.data.results.map((img) => {
        return <img id={img.id} src={img.urls.regular} className='img' />;
      })}
    </div>
  );
};
export default Gallery;
