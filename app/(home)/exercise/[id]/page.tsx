'use client'; 
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; 
import { Box } from '@mui/material';
import { exerciseOptions, fetchData, youtubeOptions } from '@/lib/fetchData';
import Detail from "@/components/Detail";
import ExerciseVideos from '@/components/ExerciseVideos';
import SimilarExercises from '@/components/SimilarExercises';
import { ExerciseItem , Video } from '@/types.h';

interface ExerciseDetailProps {
  params: { id: string }; 
}

const ExerciseDetail: React.FC<ExerciseDetailProps> = ({ params }) => {
  const [exerciseDetail, setExerciseDetail] = useState<ExerciseItem | null>(null);
  const [exerciseVideos, setExerciseVideos] = useState<Video[]>([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState<ExerciseItem[]>([]);

  
  const router = useRouter();  
  const { id } = params; 

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchExercisesData = async () => {
      if (!id) return;

      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      try {
        const exerciseDetailData: ExerciseItem = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
        setExerciseDetail(exerciseDetailData);
        console.log('Fetched Exercise Detail:', exerciseDetailData);

        const exerciseVideosData: { contents: Video[] } = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
        setExerciseVideos(exerciseVideosData.contents);
        console.log('Fetched Exercise Videos:', exerciseVideosData.contents);

        const targetMuscleExercisesData: ExerciseItem[] = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
        setTargetMuscleExercises(targetMuscleExercisesData);
        console.log('Fetched Target Muscle Exercises:', targetMuscleExercisesData);

      } catch (error) {
        console.error('Error fetching exercise data:', error);
      }
    };

    fetchExercisesData();
  }, [id]);

  if (!exerciseDetail) return <div>No Data</div>;

  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} exerciseDetail={exerciseDetail} />
    </Box>
  );
};

export default ExerciseDetail;