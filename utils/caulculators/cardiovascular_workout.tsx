import { AiFillYoutube } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';

interface Exercise {
  name: string;
  sets: string;
  reps: string;
}

interface Day {
  workout_type: string;
  exercices: Exercise[];
}

interface Programs {
  days_2: Day[];
  days_3: Day[];
}

export default function CardiovascularWorkout({
  workout_days,
  isSubscribed,
}: {
  workout_days: number;
  isSubscribed: boolean;
}) {
  const programs: Programs = {
    days_2: [
      {
        workout_type: 'Aerobic',
        exercices: [
          {
            name: 'Cycling / brisk walking / swimming / running',
            sets: '1',
            reps: '20-30 minutes',
          },
        ],
      },
      {
        workout_type: 'HIIT',
        exercices: [{ name: 'Sprint', sets: '6 - 8', reps: '30 seconds' }],
      },
    ],

    days_3: [
      {
        workout_type: 'Aerobic',
        exercices: [
          {
            name: 'Cycling / brisk walking / swimming / running',
            sets: '1',
            reps: '20-30 minutes',
          },
        ],
      },
      {
        workout_type: 'HIIT',
        exercices: [{ name: 'Sprint', sets: '6 - 8', reps: '30 seconds' }],
      },
      {
        workout_type: 'Circuit Training',
        exercices: [
          { name: 'Jumping jacks', sets: '3 - 4', reps: '1 minute' },
          { name: 'Bodyweight squats', sets: '3 - 4', reps: '10 - 15' },
          { name: 'Push-ups', sets: '3 - 4', reps: '10 - 15' },
          { name: 'Burpees', sets: '3 - 4', reps: '10 - 15' },
        ],
      },
    ],
  };

  const renderExercises = (exercises: Exercise[]) => (
    <div className="flex flex-col gap-6">
      {exercises.map((exercice) => (
        <div
          key={exercice.name}
          className="flex gap-3 relative h-fit items-stretch"
        >
          <div className="flex flex-col pt-1">
            <div className="w-4 h-4 bg-neutral-300 rounded-full" />
            <div className="h-full w-0.5 bg-gradient-to-b from-neutral-300 mx-auto" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">{exercice.name}</h3>
            <div className="flex items-center gap-2">
              <span className="font-medium">Sets:</span>
              <span>{exercice.sets}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-medium">Reps:</span>
              <span>{exercice.reps}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-medium">Help:</span>
              <div className="flex gap-6 items-center">
                <Link
                  target="_blank"
                  className="flex gap-1 items-center text-sm text-sky-500 hover:underline underline-offset-4"
                  href={`https://www.youtube.com/results?search_query=${exercice.name}`}
                >
                  <span>Watch Videos</span>
                  <span className="text-red-500 text-xl">
                    <AiFillYoutube />
                  </span>
                </Link>
                <Link
                  target="_blank"
                  className="flex gap-1 items-center text-sm text-sky-500 hover:underline underline-offset-4"
                  href={`https://www.google.com/search?q=${exercice.name}&tbm=isch`}
                >
                  <span>See Images</span>
                  <span className="text-xl">
                    <FcGoogle />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderDay = (day: Day, i: number) => (
    <div key={day.workout_type} className="flex flex-col gap-6">
      <h3 className="text-xl font-semibold">
        Day {i + 1} - {day.workout_type}
      </h3>
      {renderExercises(day.exercices)}
    </div>
  );

  const renderPreview = () => (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-3">
        <h2 className="font-bold text-4xl flex-shrink-0">Workout Plan</h2>
        <span className="text-neutral-400 text-sm font-normal">
          Tailored Workout Program for You
        </span>
      </div>
      <div className="flex flex-col gap-16">
        {renderDay(programs.days_3[0], 0)}
        <div className="blur-sm pointer-events-none select-none">{renderDay(programs.days_3[1], 1)}</div>
        <div className="text-center text-neutral-400 text-4xl">...</div>
        <div className="text-center border border-teal-400 rounded-lg p-6 bg-teal-50 shadow-lg">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-teal-700">Monthly</h3>
            <p className="text-4xl text-teal-600 font-bold mt-3">$29.99</p>
            <ul className="list-disc list-inside text-teal-600 mt-3">
              <li>Personalized workout plans</li>
              <li>Access to exclusive workout videos</li>
              <li>Nutrition and diet tips</li>
              <li>24/7 support from our fitness experts</li>
            </ul>
          </div>
          <button className="mt-3 relative bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <span className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-500 rounded-full opacity-50 blur-lg"></span>
            <span className="relative">Get your monthly plan for $29.99</span>
          </button>
        </div>
      </div>
    </div>
  );

  if (!isSubscribed) {
    return renderPreview();
  }

  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-3">
        <h2 className="font-bold text-4xl flex-shrink-0">Workout Plan</h2>
        <span className="text-neutral-400 text-sm font-normal">
          Tailored Workout Program for You
        </span>
      </div>
      <div className="flex flex-col gap-16">
        {workout_days === 2
          ? programs.days_2.map((day, i) => renderDay(day, i))
          : programs.days_3.map((day, i) => renderDay(day, i))}
      </div>
    </div>
  );
}