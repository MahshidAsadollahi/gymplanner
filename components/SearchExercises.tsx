import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '@/lib/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';
import { ExerciseItem } from '@/types.h';

interface SearchExercisesProps {
  setExercises: React.Dispatch<React.SetStateAction<ExerciseItem[]>>;
  bodyPart: string;
  setBodyPart: React.Dispatch<React.SetStateAction<string>>;
}

const SearchExercises: React.FC<SearchExercisesProps> = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState ('');
  const [bodyParts, setBodyParts] = useState<string[]>([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
        const bodyPartsData= await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises/bodyPartList', 
          exerciseOptions);
          if(Array.isArray(bodyPartsData)){
              setBodyParts(['all', ...bodyPartsData]);
          }else{
            console.log('error');
          }
        };

    
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData:ExerciseItem[] = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises =exercisesData.filter(
        (item) => 
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search),
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
          input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px', height:'76px' }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="start-now-color"
          sx={{ textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar 
        data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
