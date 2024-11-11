'use client';

// imports
import { useState, useContext, useEffect } from 'react';
import { StepsContext } from '@/context/steps';
import CardComponent from './card';
import BasicInfoCardName from '@/components/basic_info_name';
import BasicInfoCardAge from '@/components/basic_info_age';
import BasicInfoCardGender from '@/components/basic_info_gender';
import BasicInfoCardHeightWeight from '@/components/basic_info_height_weight';
import MeasureQuestion from '@/components/measure_question';
export default function BasicInfoCard({
  title,
  description,
  id,
}: {
  title: string;
  description: string;
  id: string;
}) {
  // variables
  const {getAnswer, updateAnswer, blockNext, allowNext,step_num, sub_step_num, steps_list} = useContext(StepsContext);
  const answers =getAnswer(id);


  useEffect(() => {
    updateAnswer(id, answers);
    if (answers.name && answers.age && answers.gender && answers.height && answers.weight && answers.body_type) {
      allowNext();
    } else {
      blockNext();
    }
  }, [answers, id, updateAnswer, blockNext, allowNext]);

  const currentStep = steps_list[step_num];
  const currentSubStep = currentStep.sub_steps[sub_step_num];

  return (
    <CardComponent title={title} description={description}>
      <div className="grid w-full items-center gap-10 lg:gap-16">
      {currentSubStep.id === 'BasicInfoCardName' && <BasicInfoCardName id={id} />}
        {currentSubStep.id === 'BasicInfoCardAge' && <BasicInfoCardAge id={id} />}
        {currentSubStep.id === 'BasicInfoCardGender' && <BasicInfoCardGender id={id} />}
        {currentSubStep.id === 'BasicInfoCardHeightWeight' && <BasicInfoCardHeightWeight id={id} />}
        {currentSubStep.id === 'MeasureQuestion' && <MeasureQuestion id={id} />}
      </div>
    </CardComponent>
  );
}