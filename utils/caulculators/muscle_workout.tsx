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
  days_4: Day[];
  days_5: Day[];
  days_6: Day[];
}

export default function MuscleWorkout({
  workout_days,
  isSubscribed,
}: {
  workout_days: number;
  isSubscribed: boolean;
}) {
  const programs: Programs = {
    days_2: [
      {
        workout_type: 'Upper Body',
        exercices: [
          { name: 'Bench Press', sets: '4', reps: '8 - 10' },
          { name: 'Bent Over Barbell Rows', sets: '3', reps: '8 - 10' },
          { name: 'Shoulder Press', sets: '3', reps: '8 - 10' },
          { name: 'Dumbbell Bicep Curls', sets: '3', reps: '8 - 10' },
          { name: 'Dumbbell Tricep Extensions', sets: '3', reps: '8 - 10' },
        ],
      },
      {
        workout_type: 'Lower Body',
        exercices: [
          { name: 'Barbell Squats', sets: '4', reps: '8 - 10' },
          { name: 'Dumbbell Lunges', sets: '3', reps: '10 - 12' },
          { name: 'Deadlift', sets: '3', reps: '8 - 10' },
          { name: 'Calf Raises', sets: '3', reps: '12 - 15' },
          { name: 'Hanging Leg Raises', sets: '3', reps: '12 - 15' },
        ],
      },
    ],

    days_3: [
      {
        workout_type: 'Chest and Triceps',
        exercices: [
          { name: 'Bench Press', sets: '4', reps: '8 - 10' },
          { name: 'Incline Dumbbell Press', sets: '3', reps: '8 - 10' },
          { name: 'Dumbbell Flyes', sets: '3', reps: '10 - 12' },
          { name: 'Close Grip Bench Press', sets: '3', reps: '8 - 10' },
          { name: 'Tricep Dumbbell Kickbacks', sets: '3', reps: '10 - 12' },
          { name: 'Tricep Dips', sets: '3', reps: 'until failure' },
        ],
      },
      {
        workout_type: 'Back and Biceps',
        exercices: [
          { name: 'Deadlifts', sets: '4', reps: '6 - 8' },
          { name: 'Bent-Over Rows', sets: '3', reps: '8 - 10' },
          { name: 'One-Arm Dumbbell Rows', sets: '3', reps: '8 - 10' },
          { name: 'Barbell Bicep Curls', sets: '3', reps: '8 - 10' },
          { name: 'Hammer Curls', sets: '3', reps: '10 - 12' },
          { name: 'Concentration Curls', sets: '3', reps: '10 - 12' },
        ],
      },
      {
        workout_type: 'Legs and shoulders',
        exercices: [
          { name: 'Barbell Squats', sets: '4', reps: '8 - 10' },
          { name: 'Shoulders Press', sets: '4', reps: '8 - 10' },
          { name: 'Dumbbell Lunges', sets: '3', reps: '10 - 12' },
          { name: 'Deadlift', sets: '3', reps: '8 - 10' },
          { name: 'Calf Raises', sets: '3', reps: '12 - 15' },
          { name: 'Hanging Leg Raises', sets: '3', reps: '12 - 15' },
        ],
      },
    ],

    days_4: [
      {
        workout_type: 'Chest and Triceps',
        exercices: [
          { name: 'Bench Press', sets: '4', reps: '8 - 10' },
          { name: 'Incline Dumbbell Press', sets: '3', reps: '8 - 10' },
          { name: 'Dumbbell Flyes', sets: '3', reps: '10 - 12' },
          { name: 'Close Grip Bench Press', sets: '3', reps: '8 - 10' },
          { name: 'Tricep Dumbbell Kickbacks', sets: '3', reps: '10 - 12' },
          { name: 'Tricep Dips', sets: '3', reps: 'until failure' },
        ],
      },
      {
        workout_type: 'Back and Biceps',
        exercices: [
          { name: 'Deadlifts', sets: '4', reps: '6 - 8' },
          { name: 'Bent-Over Rows', sets: '3', reps: '8 - 10' },
          { name: 'One-Arm Dumbbell Rows', sets: '3', reps: '8 - 10' },
          { name: 'Barbell Bicep Curls', sets: '3', reps: '8 - 10' },
          { name: 'Hammer Curls', sets: '3', reps: '10 - 12' },
          { name: 'Concentration Curls', sets: '3', reps: '10 - 12' },
        ],
      },
      {
        workout_type: 'Shoulders and Abs',
        exercices: [
          { name: 'Shoulder Press', sets: '4', reps: '8 - 10' },
          { name: 'Dumbbell Lateral Raises', sets: '3', reps: '10 - 12' },
          { name: 'Dumbbell Front Raises', sets: '3', reps: '10 - 12' },
          { name: 'Dumbbell Shrugs', sets: '3', reps: '10 - 12' },
          { name: 'Plank', sets: '3', reps: '30 - 60 seconds' },
        ],
      },
      {
        workout_type: 'Legs',
        exercices: [
          { name: 'Barbell Squats', sets: '4', reps: '8 - 10' },
          { name: 'Dumbbell Lunges', sets: '3', reps: '10 - 12' },
          { name: 'Deadlift', sets: '3', reps: '8 - 10' },
          { name: 'Calf Raises', sets: '3', reps: '12 - 15' },
          { name: 'Hanging Leg Raises', sets: '3', reps: '12 - 15' },
        ],
      },
    ],

    days_5: [
      {
        workout_type: 'Chest and Triceps',
        exercices: [
          { name: 'Bench Press', sets: '4', reps: '8 - 10' },
          { name: 'Incline Dumbbell Press', sets: '3', reps: '8 - 10' },
          { name: 'Dumbbell Flyes', sets: '3', reps: '10 - 12' },
          { name: 'Close Grip Bench Press', sets: '3', reps: '8 - 10' },
          { name: 'Tricep Dumbbell Kickbacks', sets: '3', reps: '10 - 12' },
          { name: 'Tricep Dips', sets: '3', reps: 'until failure' },
        ],
      },
      {
        workout_type: 'Back and Biceps',
        exercices: [
          { name: 'Deadlifts', sets: '4', reps: '6 - 8' },
          { name: 'Bent-Over Rows', sets: '3', reps: '8 - 10' },
          { name: 'One-Arm Dumbbell Rows', sets: '3', reps: '8 - 10' },
          { name: 'Barbell Bicep Curls', sets: '3', reps: '8 - 10' },
          { name: 'Hammer Curls', sets: '3', reps: '10 - 12' },
          { name: 'Concentration Curls', sets: '3', reps: '10 - 12' },
        ],
      },
      {
        workout_type: 'Shoulders and Abs',
        exercices: [
          { name: 'Shoulder Press', sets: '4', reps: '8 - 10' },
          { name: 'Dumbbell Lateral Raises', sets: '3', reps: '10 - 12' },
          { name: 'Dumbbell Front Raises', sets: '3', reps: '10 - 12' },
          { name: 'Dumbbell Shrugs', sets: '3', reps: '10 - 12' },
          { name: 'Plank', sets: '3', reps: '30 - 60 seconds' },
        ],
      },
      {
        workout_type: 'Legs',
        exercices: [
          { name: 'Barbell Squats', sets: '4', reps: '8 - 10' },
          { name: 'Dumbbell Lunges', sets: '3', reps: '10 - 12' },
          { name: 'Deadlift', sets: '3', reps: '8 - 10' },
          { name: 'Calf Raises', sets: '3', reps: '12 - 15' },
          { name: 'Hanging Leg Raises', sets: '3', reps: '12 - 15' },
        ],
      },
      {
        workout_type: 'Full Body',
        exercices: [
          { name: 'Barbell Squats', sets: '4', reps: '8 - 10' },
          { name: 'Bench Press', sets: '4', reps: '8 - 10' },
          { name: 'Bent-Over Rows', sets: '4', reps: '8 - 10' },
          { name: 'Shoulder Press', sets: '3', reps: '8 - 10' },
          { name: 'Bicep Curls', sets: '3', reps: '8 - 10' },
          { name: 'Tricep Dips', sets: '3', reps: '10 - 12' },
        ],
      },
    ],

    days_6: [
      {
        workout_type: 'Chest and Triceps',
        exercices: [
          { name: 'Bench Press', sets: '4', reps: '8 - 10' },
          { name: 'Incline Dumbbell Press', sets: '3', reps: '8 - 10' },
          { name: 'Dumbbell Flyes', sets: '3', reps: '10 - 12' },
          { name: 'Close Grip Bench Press', sets: '3', reps: '8 - 10' },
          { name: 'Tricep Dumbbell Kickbacks', sets: '3', reps: '10 - 12' },
          { name: 'Tricep Dips', sets: '3', reps: 'until failure' },
        ],
      },
      {
        workout_type: 'Back and Biceps',
        exercices: [
          { name: 'Deadlifts', sets: '4', reps: '6 - 8' },
          { name: 'Bent-Over Rows', sets: '3', reps: '8 - 10' },
          { name: 'One-Arm Dumbbell Rows', sets: '3', reps: '8 - 10' },
          { name: 'Barbell Bicep Curls', sets: '3', reps: '8 - 10' },
          { name: 'Hammer Curls', sets: '3', reps: '10 - 12' },
          { name: 'Concentration Curls', sets: '3', reps: '10 - 12' },
        ],
      },
      {
        workout_type: 'Legs',
        exercices: [
          { name: 'Barbell Squats', sets: '4', reps: '8 - 10' },
          { name: 'Dumbbell Lunges', sets: '3', reps: '10 - 12' },
          { name: 'Deadlift', sets: '3', reps: '8 - 10' },
          { name: 'Calf Raises', sets: '3', reps: '12 - 15' },
          { name: 'Hanging Leg Raises', sets: '3', reps: '12 - 15' },
        ],
      },
      {
        workout_type: 'Shoulders and Abs',
        exercices: [
          { name: 'Shoulder Press', sets: '4', reps: '8 - 10' },
          { name: 'Dumbbell Lateral Raises', sets: '3', reps: '10 - 12' },
          { name: 'Dumbbell Front Raises', sets: '3', reps: '10 - 12' },
          { name: 'Dumbbell Shrugs', sets: '3', reps: '10 - 12' },
          { name: 'Plank', sets: '3', reps: '30 - 60 seconds' },
        ],
      },
      {
        workout_type: 'Full Body',
        exercices: [
          { name: 'Barbell Squats', sets: '4', reps: '8 - 10' },
          { name: 'Bench Press', sets: '4', reps: '8 - 10' },
          { name: 'Bent-Over Rows', sets: '4', reps: '8 - 10' },
          { name: 'Shoulder Press', sets: '3', reps: '8 - 10' },
          { name: 'Bicep Curls', sets: '3', reps: '8 - 10' },
          { name: 'Tricep Dips', sets: '3', reps: '10 - 12' },
        ],
      },
      {
        workout_type: 'Cardio',
        exercices: [
          { name: 'Cardio', sets: '1', reps: '20 - 30 Min (gradually increase the duration and intensity over time)' },
        ],
      },
    ],
  }

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
        <p className="text-4xl text-teal-600 font-bold mt-3">
        $29.99
      </p>
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

  if (workout_days === 2) {
    return (
      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-4xl flex-shrink-0">Workout Plan</h2>
          <span className="text-neutral-400 text-sm font-normal">
            Tailored Workout Program for You (2 days workout as you requested)
          </span>
        </div>
        <div className="flex flex-col gap-16">
          {programs.days_2.map((day, i) => renderDay(day, i))}
        </div>
      </div>
    );
  }

  if (workout_days === 3) {
    return (
      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-4xl flex-shrink-0">Workout Plan</h2>
          <span className="text-neutral-400 text-sm font-normal">
            Tailored Workout Program for You (3 days workout as you requested)
          </span>
        </div>
        <div className="flex flex-col gap-16">
          {programs.days_3.map((day, i) => renderDay(day, i))}
        </div>
      </div>
    );
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
        {programs.days_4.map((day, i) => renderDay(day, i))}
      </div>
    </div>
  );
}