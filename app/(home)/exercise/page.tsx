"use client";
import React,{useState} from "react";
import SearchExercises from "@/components/SearchExercises";
import Exercises from "@/components/Exercises";
import { ExerciseItem } from "@/types.h";


export default function ExercisesPage(){
    const [exercises, setExercises]= useState<ExerciseItem[]>([]);
    const [bodyPart, setBodyPart]= useState('all');



    return(
        <div>
        <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}

        />

        <Exercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
/>
        
        </div>
    );
}