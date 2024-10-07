import React from 'react';
import Link from 'next/link';
import { Button, Stack, Typography } from '@mui/material';
import { ExerciseItem } from '@/types.h';
import Image from 'next/image';

interface ExerciseCardProps {
  exercise: ExerciseItem;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise }) => (
  <Link href={`/exercise/${exercise.id}`} style={{ textDecoration: 'none' }}>
    <Image 
      src={exercise.gifUrl} 
      alt={exercise.name} 
      width={500}
      height={500}
      unoptimized
      loading="lazy" 
    />
    <Stack direction="row">
      <Button
        sx={{
          ml: '21px',
          color: '#fff',
          background: '#4FD1C5',
          fontSize: '14px',
          borderRadius: '20px',
          textTransform: 'capitalize',
        }}
      >
        {exercise.bodyPart}
      </Button>
      <Button
        sx={{
          ml: '21px',
          color: '#fff',
          background: '#FCC757',
          fontSize: '14px',
          borderRadius: '20px',
          textTransform: 'capitalize',
        }}
      >
        {exercise.target}
      </Button>
    </Stack>
    <Typography
      ml="21px"
      color="#000"
      fontWeight="bold"
      sx={{ fontSize: { lg: '24px', xs: '20px' } }}
      mt="11px"
      pb="10px"
      textTransform="capitalize"
    >
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard;
