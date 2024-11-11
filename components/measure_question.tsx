import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useContext, useState } from 'react';
import { StepsContext } from '@/context/steps';
import Picker from './picker';

export default function MeasureQuestion({ id }: { id: string }) {
  const { getAnswer, updateAnswer, blockNext, allowNext } = useContext(StepsContext);
  const initialAnswers = getAnswer(id);
  const [answers, setAnswers] = useState(initialAnswers);
  const [is_accurate, setIsAccurate] = useState<boolean>(answers.is_fat_accurate === 'yes');
  const [is_choose, setIsChoose] = useState<boolean>(answers.is_fat_accurate);

  return (
    <>
      {/* Measure question */}
      <div className="flex flex-col w-full gap-3">
        <Label htmlFor="name" className="text-md lg:text-lg">
          Do you have a measuring tape ?
        </Label>
        <RadioGroup
          defaultValue={answers.is_fat_accurate}
          onValueChange={(e) => {
            setAnswers({ ...answers, is_fat_accurate: e });
            setIsChoose(true);
            setIsAccurate(e === 'yes');
          }}
          className="flex gap-6 items-center"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="yes" />
            <Label htmlFor="yes" className="text-md">
              Yes
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="no" />
            <Label htmlFor="no" className="text-md">
              No
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Body composition - Approximate */}
      {is_choose && !is_accurate && (
        <div className="flex flex-col w-full space-y-3">
          <Label htmlFor="gender" className="text-md lg:text-lg">
            What's your current body fat percentage?
          </Label>
          <RadioGroup
            onValueChange={(e) => setAnswers({ ...answers, body_type: e })}
            defaultValue={answers.body_type}
            className="grid grid-cols-2 lg:grid-cols-3 gap-4 w-full h-full">

              {/* Lean */}
              <div className="w-full col-span-1 h-full">
                <RadioGroupItem
                  value="lean"
                  id="lean"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="lean"
                  className="flex h-full text-center text-lg lg:text-2xl gap-2 flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <img src='/images/skinny.png' alt='skinny' className='w-40 h-40' />  
                  <span>Thin</span>
                  
                  <span className="text-neutral-400 text-sm text-center font-normal">
                    1% - 10% body fat
                  </span>
                </Label>
              </div>

              {/* Healthy */}
              <div className="w-full col-span-1 h-full">
                <RadioGroupItem
                  value="healthy"
                  id="healthy"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="healthy"
                  className="flex h-full text-center text-lg lg:text-2xl gap-2 flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <img src='/images/healty.png' alt='healthy' className='w-40 h-40' />  
                  <span>Healthy</span>
                  
                  <span className="text-neutral-400 text-sm text-center font-normal">
                    11% - 20% body fat
                  </span>
                </Label>
              </div>

              {/* Moderately Overweight */}
              <div className="w-full col-span-1 h-full">
                <RadioGroupItem
                  value="moderatelyoverweight"
                  id="moderatelyoverweight"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="moderatelyoverweight"
                  className="flex h-full text-center text-lg lg:text-2xl gap-2 flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <img src='/images/mooverweight.png' alt='overweight' className='w-40 h-40' />  
                  <span>Moderately overweight</span>
                  
                  <span className="text-neutral-400 text-sm text-center font-normal">
                    21% - 30% body fat
                  </span>
                </Label>
              </div>

              {/* overweight */}
              <div className="w-full col-span-1 h-full">
                <RadioGroupItem
                  value="overweight"
                  id="overweight"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="overweight"
                  className="flex h-full text-center text-lg lg:text-2xl gap-2 flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <img src='/images/overweight.png' alt='overweight' className='w-40 h-40' />  
                  <span>Overweight</span>
                  <span className="text-neutral-400 text-sm text-center font-normal">
                    31% - 40% body fat
                  </span>
                </Label>
              </div>

              {/* obese */}
              <div className="w-full col-span-1 h-full">
                <RadioGroupItem
                  value="obese"
                  id="obese"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="obese"
                  className="flex h-full text-center text-lg lg:text-2xl gap-2 flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <img src='/images/obese.png' alt='obese' className='w-40 h-40' />  
                  <span>Obese</span>
                  
                  <span className="text-neutral-400 text-sm text-center font-normal">
                    41% - 50% body fat
                  </span>
                </Label>
              </div>

              {/* extremly obese */}
              <div className="w-full col-span-1 h-full">
                <RadioGroupItem
                  value="extremly_obese"
                  id="extremly_obese"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="extremly_obese"
                  className="flex h-full text-center text-lg lg:text-2xl gap-2 flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <img src='/images/exobese.png' alt='exobese' className='w-40 h-40' />  
                  <span>Extremely obese</span>
                  
                  <span className="text-neutral-400 text-sm text-center font-normal">
                  51% and higher body fat
                  </span>
                </Label>
              </div>
          </RadioGroup>
        </div>
      )}


       {/* Body composition - Accurate */}
       {is_choose && is_accurate && (
          <div className="flex flex-col w-full gap-3">
            <Label htmlFor="gender" className="text-md lg:text-lg">
            What is the current body fat percentage?
            </Label>

            <p className="text-neutral-400 text-sm mb-3">
            To accurately determine the body fat percentage, we need two
             measurements: neck circumference and waist circumference.
              These essential measurements allow us to calculate the body fat
               percentage.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full h-full">
              <div className="flex flex-col space-y-2 w-full h-full">
                <Label htmlFor="age" className="text-md lg:text-lg">
                  Neck
                </Label>
                <div className="ml-0">
                <Picker
                  max={100}
                  min={20}
                  tag="cm"
                  value={answers.neck}
                  onAdd={() => {
                    setAnswers({ ...answers, neck: answers.neck + 1 });
                  }}
                  onRemove={() => {
                    setAnswers({ ...answers, neck: answers.neck - 1 });
                  }}
                  onSlide={(e) => setAnswers({ ...answers, neck: e })}
                />
              </div>
              </div>

              
              <div className="flex flex-col space-y-2 w-full h-full">
                <Label htmlFor="age" className="text-md lg:text-lg">
                Waist
                </Label>
                <div className="ml-0">
                <Picker
                  max={200}
                  min={50}
                  tag="cm"
                  value={answers.waist}
                  onAdd={() => {
                    setAnswers({ ...answers, waist: answers.waist + 1 });
                  }}
                  onRemove={() => {
                    setAnswers({ ...answers, waist: answers.waist - 1 });
                  }}
                  onSlide={(e) => setAnswers({ ...answers, waist: e })}
                />
              </div>
              </div>

              {answers.gender === 'F' && (
                <>
                  
                  <div className="flex flex-col space-y-2 w-full h-full">
                    <Label htmlFor="age" className="text-md lg:text-lg">
                    Hip
                    </Label>
                    <div className="ml-0">
                    <Picker
                      max={200}
                      min={30}
                      tag="cm"
                      value={answers.hip}
                      onAdd={() => {
                        setAnswers({ ...answers, hip: answers.hip + 1 });
                      }}
                      onRemove={() => {
                        setAnswers({ ...answers, hip: answers.hip - 1 });
                      }}
                      onSlide={(e) => setAnswers({ ...answers, hip: e })}
                    />
                  </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
    </>
  );
}