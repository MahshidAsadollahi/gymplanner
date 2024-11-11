import { Input } from '@/components/ui/input';
import { useContext, useEffect } from 'react';
import { StepsContext } from '@/context/steps';

export default function BasicInfoCardName({ id }: { id: string }) {
  const { getAnswer, updateAnswer, blockNext, allowNext } = useContext(StepsContext);
  const answers = getAnswer(id);

  useEffect(() => {
    if (answers.name) {
      allowNext();
    } else {
      blockNext();
    }
  }, [answers.name, allowNext, blockNext]);

  return (
    <div className="form__group">
      <Input
        id="name"
        value={answers.name}
        onChange={(e) => updateAnswer(id, { ...answers, name: e.target.value })}
        className="form__field w-full"
        placeholder='Email address?'
      />
    </div>
  );
}