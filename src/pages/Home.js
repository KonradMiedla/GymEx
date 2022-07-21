import React, {useState} from 'react';
import { Box } from "@mui/material";

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  return (
    <Box>
      <HeroBanner></HeroBanner>
      <SearchExercises 
      setExercises={setExercises} 
      bodyPart={bodyPart} 
      setBodyPart={setBodyPart}>
      </SearchExercises>
      <Exercises
      exercises={exercises}>
      setExercises={setExercises} 
      bodyPart={bodyPart}    
      </Exercises>
    </Box>
  )
}

export default Home