import React, { useState } from 'react'
import {Box} from '@mui/material'
import Hero from '../components/Hero'
import Exercise from '../components/Exercise'
import SearchExercises from '../components/SearchExercises'
const Home = () => {
  const [exercises, setExercises] = useState([])
  const [bodyPart, setBodyPart] = useState("all")
  return (
    <Box>
      <Hero/>
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      <Exercise setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
    </Box>
  )
}

export default Home