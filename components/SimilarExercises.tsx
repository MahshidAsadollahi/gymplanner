import React from 'react';
import { Box, Typography } from '@mui/material';
import { ExerciseItem } from '@/types.h';
import Loader from "@/components/loader";
import HorizontalScrollbar from './HorizontalScrollbar'; // Import HorizontalScrollbar component

interface SimilarExercisesProps {
  targetMuscleExercises: ExerciseItem[];
  exerciseDetail?: ExerciseItem | null;
}

const SimilarExercises: React.FC<SimilarExercisesProps> = ({ targetMuscleExercises }) => {
  console.log('Target Muscle Exercises:', targetMuscleExercises);

  return (
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
      <Typography
        sx={{ fontSize: { lg: '44px', xs: '25px' } }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Similar <span style={{ color: '#FCC757', textTransform: 'capitalize' }}>Target Muscle</span> Exercises
      </Typography>

      {targetMuscleExercises.length ? (
        <HorizontalScrollbar data={targetMuscleExercises} />
      ) : (
        <Loader />
      )}
    </Box>
  );
};

export default SimilarExercises;
