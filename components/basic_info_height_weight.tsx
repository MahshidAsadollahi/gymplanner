import { Label } from '@/components/ui/label';
import Picker from '@/components/picker';
import { Separator } from '@/components/ui/separator';
import { useContext, useEffect, useState } from 'react';
import { StepsContext } from '@/context/steps';

export default function BasicInfoCardHeightWeight({ id}: { id: string }) {
    const { getAnswer, updateAnswer } = useContext(StepsContext);
    const initialAnswers = getAnswer(id);

    const [answers, setAnswers] = useState({
        height: initialAnswers.height || 0,
        weight: initialAnswers.weight || 0,
    });

    useEffect(() => {

        if (
            initialAnswers.height !== answers.height ||
            initialAnswers.weight !== answers.weight
        ) {
            updateAnswer(id, answers);
        }
    }, [answers, id, updateAnswer, initialAnswers.height, initialAnswers.weight]);

    return (
        <div className="flex flex-col lg:flex-row w-full gap-4 h-full">
            <div className="flex flex-col space-y-2 w-full h-full">
                <Label htmlFor="height" className="text-md lg:text-lg">
                    Height 📏
                </Label>
                <div className="-ml-9">
                    <Picker
                        max={270}
                        min={120}
                        tag="cm"
                        value={answers.height}
                        onAdd={() => setAnswers({ ...answers, height: answers.height + 1 })}
                        onRemove={() => setAnswers({ ...answers, height: answers.height - 1 })}
                        onSlide={(e) => setAnswers({ ...answers, height: e })}
                    />
                </div>
            </div>

            <Separator orientation="vertical" className="hidden lg:block" />

            <div className="flex flex-col space-y-2 w-full h-full">
                <Label htmlFor="weight" className="text-md lg:text-lg">
                    Weight ⚖️
                </Label>
                <div className="-ml-9">
                    <Picker
                        max={160}
                        min={30}
                        tag="Kg"
                        value={answers.weight}
                        onAdd={() => setAnswers({ ...answers, weight: answers.weight + 1 })}
                        onRemove={() => setAnswers({ ...answers, weight: answers.weight - 1 })}
                        onSlide={(e) => setAnswers({ ...answers, weight: e })}
                    />
                </div>
            </div>
        </div>
    );
}
