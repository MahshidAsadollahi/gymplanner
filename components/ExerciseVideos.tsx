import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import Image from 'next/image';
import { Video } from '@/types.h';

interface ExerciseVideosProps {
  exerciseVideos: Video[];
  name: string;
}

const ExerciseVideos: React.FC<ExerciseVideosProps> = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <div>No videos available</div>;

  return (
    <Box sx={{ marginTop: { lg: '200px', xs: '20px' } }} p="20px">
      <Typography variant="h4" mb="33px">
        Watch <span style={{ color: '#FCC757', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>
      <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }} justifyContent="flex-start" flexWrap="nowrap" alignItems="center">
        {exerciseVideos.slice(0, 3).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            {item.video.thumbnails && item.video.thumbnails[0] && (
              <Image
                src={item.video.thumbnails[0].url} 
                alt={item.video.title}
                width={360} 
                height={202} 
                style={{borderTopLeftRadius:'20px'}}
                unoptimized
              />
            )}
            <Box>
              <Typography sx={{ fontSize: { lg: '28px', xs: '18px' } }} fontWeight={600} color="#000">
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;