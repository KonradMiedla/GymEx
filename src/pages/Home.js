import React, {useState} from 'react';
import { Box } from "@mui/material";

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
  return (
    <Box>
      <HeroBanner></HeroBanner>
      <SearchExercises></SearchExercises>
      <Exercises></Exercises>
    </Box>
  )
}

export default Home