import { Input } from '@/components/ui/input';
import { useContext, useEffect, useState } from 'react';
import { StepsContext } from '@/context/steps';

export default function BasicInfoCardName({ id }: { id: string }) {
  const { getAnswer, updateAnswer, blockNext, allowNext } = useContext(StepsContext);
  const answers = getAnswer(id);
  const [error, setError] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (answers.name === undefined || answers.name === '') {
      blockNext();
      setError(null);
    } else if (!isTyping && validateEmail(answers.name)) {
      allowNext();
      setError(null);
    } else if (!isTyping) {
      blockNext();
      setError('Please enter a valid email address');
    }
  }, [answers.name, allowNext, blockNext, isTyping]);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsTyping(true);
    updateAnswer(id, { ...answers, name: e.target.value });
  };

  const handleBlur = () => {
    setIsTyping(false);
  };

  return (
    <div className="form__group">
      <Input
        id="name"
        value={answers.name}
        onChange={handleChange}
        onBlur={handleBlur}
        className="form__field w-full"
        placeholder='Email address?'
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}