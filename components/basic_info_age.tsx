import { Label } from '@/components/ui/label';
import Picker from '@/components/picker';
import { useContext,useEffect } from 'react';
import { StepsContext } from '@/context/steps';

export default function BasicInfoCardAge({ id }: { id: string }) {
  const { getAnswer, updateAnswer , blockNext, allowNext} = useContext(StepsContext);
  const answers = getAnswer(id);

  useEffect(() => {
    if (answers.age) {
      allowNext();
    } else {
      blockNext();
    }
  }, [answers.age]);

  return (
    <div className="flex flex-col space-y-3">
      <Label htmlFor="age" className="text-md lg:text-lg">
        How old are you?
      </Label>
      <Picker
        max={99}
        min={0}
        tag="years old"
        value={answers.age}
        onAdd={() => updateAnswer(id, { ...answers, age: answers.age + 1 })}
        onRemove={() => updateAnswer(id, { ...answers, age: answers.age - 1 })}
        onSlide={(e) => updateAnswer(id, { ...answers, age: e })}
      />
    </div>
  );
}