import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';  
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import { ExerciseItem } from '@/types.h';

interface HorizontalScrollbarProps {
  data: (ExerciseItem | string)[];
  bodyParts?: boolean;
  setBodyPart?: (bodyPart: string) => void;
  bodyPart?: string;
}

const CustomArrow: React.FC<{ type: 'prev' | 'next'; onClick?: () => void }> = ({ type, onClick }) => (
  <Typography
    onClick={onClick}
    sx={{
      cursor: 'pointer',
      position: 'absolute',
      bottom: '-40px',// Position below the cards
      left: type === 'prev' ? 'calc(50% - 60px)' : 'calc(50% + 40px)',
      transform: 'translateY(-50%)',
      zIndex: 1,
    }}
    className={type === 'prev' ? 'left-arrow' : 'right-arrow'}
  >
    <Image
      src={type === 'prev' ? '/assets/icons/left-arrow.png' : '/assets/icons/right-arrow.png'}
      alt={`${type}-arrow`}
      width={24}
      height={24}
    />
  </Typography>
);

const HorizontalScrollbar: React.FC<HorizontalScrollbarProps> = ({
  data,
  bodyParts,
  setBodyPart,
  bodyPart
}) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomArrow type="prev" onClick={() => {}} />,  // Pass arrow components
    nextArrow: <CustomArrow type="next" onClick={() => {}}/>,  // Pass arrow components
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ position: 'relative', p: '20px' }}>
      <Slider {...settings}>
        {data.map((item) => (
          <Box
            key={typeof item === 'string' ? item : item.id}
            m="0 40px"
            sx={{ position: 'relative' }}
          >
            {bodyParts ? (
              <BodyPart
                item={typeof item === 'string' ? item : item.bodyPart || ''}
                setBodyPart={setBodyPart || (() => {})}
                bodyPart={bodyPart || ''} 
              />
            ) : (
              <ExerciseCard exercise={item as ExerciseItem} />
            )}
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default HorizontalScrollbar;
