import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState('');

  async function fetchData() {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const { data } = await axios.get(url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [])

  function clickHandler() {
    fetchData();
  }

  return (
    <>
      <div className='w-1/2 bg-[#0F1035] rounded-lg flex flex-col gap-5 items-center mt-[15px]'>
        <h1 className='text-2xl underline uppercase font-bold mt-[15px] text-white'>A random Gif</h1>

        {
          loading ? (<Spinner/>):(<img src={gif} width={450} className='rounded-md' />)
        }
        

        <button onClick={clickHandler}
          className='w-10/12 rounded-lg bg-[#DCF2F1] py-2 text-lg font-bold mb-[12px]'>
          generate
        </button>
      </div>
    </>
  )
}

export default Random;
