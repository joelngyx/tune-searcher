import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Lyrics from './Lyrics';
import Album from './Album';
import Posts from './Posts';
import SelectionButton from './SelectionButton';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

// eslint-disable-next-line
let albumArt = require('album-art');
// eslint-disable-next-line
let musicInfo = require('music-info');

const ResultsPage = () => {
  let {state} = useLocation();

  const [artist, setArtist] = useState('');
  const [song, setSong] = useState('');
  const [attempt, setAttempt] = useState(0);
  const [fetchType, setFetchType] = useState(0); // decides which subreddit to get results from

  const getState = () => {
    try {
      setArtist(state.artist);
      setSong(state.song);
    } catch (e) {
      console.log(e);
    }
  }

  // a quick workaround to null props error when navigating between pages 
  const incrementAttempt = () => {
    if (artist === '' || song === '') {
      setAttempt(attempt + 1)
    }
  }

  useEffect(() => {
    setTimeout(getState, 100);
    setTimeout(incrementAttempt, 110);
    // eslint-disable-next-line
  }, [attempt])

  // styles
  const titleText = {color: "black", fontFamily: "Courier New", fontSize: 18, fontWeight: 800};

  if (song === ''|| artist === '') {
    return <h1>loading</h1>
  } else {
    return(
      <motion.div initial={{width: 0}} animate={{width: '100%'}} exit={{x: '100%'}}>
        <Helmet>
          <style>{"body {background-color: #F08756; overflow-x: hidden}"}</style>
        </Helmet>
        <div className='row d-flex justify-content-center'>
          <div className='col-12 col-md-5 '>
            <div className='container mt-3 p-5'>
              <Album artist={artist} song={song}/>
              <div className='container p-0 mt-5'>
                <Lyrics artist={artist} song={song}/>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-7 mt-3 p-5'>
              <h1 style={titleText}>viewing results from:</h1>
              <SelectionButton setFetchType={setFetchType} fetchType={fetchType} btnType={0} name="artist's subreddit"/>
              <SelectionButton setFetchType={setFetchType} fetchType={fetchType} btnType={1} name="r/music"/>
              <SelectionButton setFetchType={setFetchType} fetchType={fetchType} btnType={2} name="r/all"/>
            <div className='row'>
              <Posts artist={artist} song={song} fetchType={fetchType}/>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }
}

export default ResultsPage;