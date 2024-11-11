'use client'

// imports
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useState, useContext, useEffect } from 'react';
import { StepsContext } from '@/context/steps';
import CardComponent from './card'

export default function Lifestyle(
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

        {/* fitness level */}
        <div className="flex flex-col w-full space-y-1.5">
          <Label htmlFor="gender" className="text-lg">What&apos;s your current fitness level/experience ?</Label>
          <RadioGroup
            onValueChange={(e) => setAnswers({ ...answers, fitness_level: e })}
            defaultValue={answers.fitness_level}
            className="grid grid-cols-3 gap-4 w-full jfull"
          >
            {/* beginner */}
            <div className="w-full h-full col-span-1">
              <RadioGroupItem value="beginner" id="beginner" className="peer sr-only" />
              <Label
                htmlFor="beginner"
                className="flex h-full text-center text-2xl gap-2 flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <span className="text-3xl">👶</span>
                Beginner
                <span className="text-neutral-400 text-sm text-center font-normal">I have very limited or no experience</span>
              </Label>
            </div>

            {/* intermediate */}
            <div className="w-full h-full col-span-1">
              <RadioGroupItem value="intermediate" id="intermediate" className="peer sr-only" />
              <Label
                htmlFor="intermediate"
                className="flex h-full text-center text-2xl gap-2 flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <span className="text-3xl">🏃‍♀️</span>
                Intermediate
                <span className="text-neutral-400 text-sm text-center font-normal">I have some experience with structured workouts</span>
              </Label>
            </div>

            {/* advanced */}
            <div className="w-full h-full col-span-1">
              <RadioGroupItem value="advanced" id="advanced" className="peer sr-only" />
              <Label
                htmlFor="advanced"
                className="flex h-full text-center text-2xl gap-2 flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <span className="text-3xl">🏋️‍♂️</span>
                Advanced
                <span className="text-neutral-400 text-sm text-center font-normal">I have a high level of experience in fitness</span>
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </CardComponent>
  )
}
