'use client';

// imports
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { useState, useContext, useEffect } from 'react';
import { StepsContext } from '@/context/steps';
import CardComponent from './card';
import Picker from './picker';

export default function DietCard(
  { title, description, id }:
  { title: string, description: string, id: string },
) {
  // variables
  const { getAnswer, updateAnswer } = useContext(StepsContext);
  const [answers, setAnswers] = useState<any>(getAnswer(id));

  // functions
  useEffect(() => {
    updateAnswer(id, answers);
  }, [answers]);

  // returns
  return (
    <CardComponent title={title} description={description}>
      <div className="grid w-full items-center gap-12">
        {/* Meals */}
        <div className="flex flex-col space-y-2">
          <Label htmlFor="meals" className="text-lg">
            How much average meals you eat per day ?
          </Label>
          <Picker
            max={8}
            min={1}
            tag={`Meal${answers.avg_meals_day !== 1 ? 's' : ''} per day`}
            value={answers.avg_meals_day}
            onAdd={() => setAnswers({ ...answers, avg_meals_day: answers.avg_meals_day + 1 })}
            onRemove={() => {
              setAnswers({ ...answers, avg_meals_day: answers.avg_meals_day - 1 })
            }}
            onSlide={(e) => setAnswers({ ...answers, avg_meals_day: e })}
          />
        </div>
      </div>
    </CardComponent>
  );
}
