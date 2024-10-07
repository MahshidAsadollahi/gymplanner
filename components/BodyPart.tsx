import React from 'react';
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';

const bodyPartImages: Record<string, string> = {
  all: '/assets/icons/all.png',
  back: '/assets/icons/back.png',
  cardio: '/assets/icons/cardio.png',
  lowerarms: '/assets/icons/lowerarms.png',
  lowerlegs: '/assets/icons/lowerlegs.png',
  neck: '/assets/icons/neck.png',
  shoulders: '/assets/icons/shoulders.png',
  upperarms: '/assets/icons/upperarms.png',
  upperlegs: '/assets/icons/upperlegs.png',
  waist: '/assets/icons/waist.png',
  chest: '/assets/icons/chest.png',
};

const normalizeItemName = (name: string) => {
  return name.toLowerCase().replace(/\s+/g, '');
};

interface BodyPartProps {
  item: string;
  setBodyPart?: (bodyPart: string) => void;
  bodyPart?: string;
}

const BodyPart: React.FC<BodyPartProps> = ({ item, setBodyPart, bodyPart }) => {
  const normalizedItem = normalizeItemName(item);

  return (
    <Stack
      component="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        background: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '282px',
        cursor: 'pointer',
        gap: '47px',
        borderTop: bodyPart === item ? '4px solid #00FFCB' : 'none',
      }}
      onClick={() => {
        if (setBodyPart) {
          setBodyPart(item);
        }
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
    >
      <Image
        src={bodyPartImages[normalizedItem] || '/assets/icons/gym.png'} 
        alt={item}
        width={40}
        height={40}
      />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        fontFamily="Alegreya"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
