import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useContext,useEffect } from 'react';
import { StepsContext } from '@/context/steps';

export default function BasicInfoCardGender({ id }: { id: string }) {
  const { getAnswer, updateAnswer, blockNext, allowNext } = useContext(StepsContext);
  const answers = getAnswer(id);

  useEffect(() => {
    if (answers.gender) {
      allowNext();
    } else {
      blockNext();
    }
  }, [answers.gender]);

  return (
    <div className="flex flex-col w-full space-y-3">
      <Label htmlFor="gender" className="text-md lg:text-lg">
        Sex
      </Label>
      <RadioGroup
        defaultValue={answers.gender}
        onValueChange={(e) => updateAnswer(id, { ...answers, gender: e })}
        className="flex gap-4 w-full"
      >
        <div className="w-full">
          <RadioGroupItem value="M" id="M" className="peer sr-only" />
          <Label
            htmlFor="M"
            className="flex relative h-full text-center text-xl lg:text-2xl gap-2 flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-secondary [&:has([data-state=checked])]:border-primary"
          >
            <img src='/images/boy.png' alt='boy' className='w-40 h-40' />  
            <span>Male</span>
          </Label>
        </div>
        <div className="w-full">
          <RadioGroupItem value="F" id="female" className="peer sr-only" />
          <Label
            htmlFor="female"
            className="flex h-full text-center text-xl lg:text-2xl gap-2 flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            <img src='/images/girl.png' alt='girl' className='w-40 h-40' />
            <span>Female</span>
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
}