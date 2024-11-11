// components/ProgramPage.tsx
'use client';
import React from 'react';
import { useState } from 'react';
import { Separator } from '@/components/ui/separator';
import { FaInfoCircle } from 'react-icons/fa';
import {
  Card,
  CardContent,
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import getBMI from '@/utils/caulculators/bmi';
import CardiovascularWorkout from '@/utils/caulculators/cardiovascular_workout';
import calculateCalories from '@/utils/caulculators/calories'
import FatWorkout from '@/utils/caulculators/fat_workout';
import Factors from '@/utils/caulculators/factors';
import MuscleWorkout from '@/utils/caulculators/muscle_workout';
import getCompositionData from '@/utils/caulculators/composition';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import CopyLink from '@/components/copy';

export default function ProgramPage({ data }: { data: any }) {
  const [isSubscribed, setIsSubscribed] = useState(false);

  // returns
  if (!data) return <h1>NO DATA</h1>;

  // bmi
  const {
    bmi, healthy, overweight, status, underweight, ideal_weight,
  } = getBMI({
    height: data.overview.height,
    weight: data.overview.weight,
    gender: data.overview.gender,
    fitness_goal: data.overview.fitness_goal,
  });

  // composition
  const composition = getCompositionData({
    age: data.overview.age,
    body_type: data.overview.body_type,
    gender: data.overview.gender,
    height: data.overview.height,
    hip: data.overview.hip,
    is_fat_accurate: data.overview.is_fat_accurate,
    neck: data.overview.neck,
    waist: data.overview.waist,
    fitness_goal: data.overview.fitness_goal,
    specific_dietary: data.overview.specific_dietary || [],
    medical_conditions: data.overview.medical_conditions || [],
  });

  // calories
  const calory_data = calculateCalories({
    activity: data.overview.activity,
    age: data.overview.age,
    current_weight: data.overview.weight,
    fitness_goal: data.overview.fitness_goal,
    gender: data.overview.gender,
    height: data.overview.height,
    ideal_weight,
    workout_days: data.overview.workout_days,
  })

  return (
    <div className="px-6 xl:w-3/4 mx-auto py-10 flex flex-col gap-20 text-md">
      {/* share */}
      <CopyLink params={{slug: data.slug }}/>

      {/* overview */}
      <div className="flex flex-col gap-20">
        {/* Header - General overview */}
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-3xl lg:text-4xl flex-shrink-0">General Overview</h2>
          <span className="text-neutral-400 text-sm font-normal">
          A general overview on the fitness plan and current health
          </span>
        </div>

        {/* */}
        <div className="flex flex-col lg:flex-row items-center w-full h-full justify-between gap-10">
          {/* weight */}
          <div className="flex flex-col gap-5 w-full h-full">
            <h3 className="text-xl font-semibold">Weight Assessment</h3>
            <div>
            Your current weight (
              {data.overview?.weight}
              {' '}
              Kg) is considered
              {status === 'healthy' && (
                <span className="font-semibold text-xl text-green-400">
                  {' '}
                  Healthy
                </span>
              )}
              {status === 'underweight' && (
                <span className="font-semibold text-xl text-yellow-400">
                  {' '}
                  Underweight
                </span>
              )}
              {status === 'overweight' && (
                <span className="font-semibold text-xl text-yellow-400">
                  {' '}
                  Overweight
                </span>
              )}
              {status === 'obese' && (
                <span className="font-semibold text-xl text-orange-400">
                  {' '}
                  Obese
                </span>
              )}
            </div>

            {/* chart v2 */}
            <div className="w-full flex flex-col gap-0 mb-10">
              <div className="w-full h-8 rounded-md shadow-md flex gap-0 text-neutral-50 font-semibold text-xs">
                <div className="rounded-l-md flex items-center w-[18%] bg-yellow-400 h-full">
                  <span className="text-center mx-auto">underweight</span>
                </div>

                <div className="w-[4%] relative h-full bg-gradient-to-r from-yellow-400 to-green-400">
                  <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1">
                    <div className="mx-auto w-0.5 h-3 bg-neutral-300" />
                    <div className="text-neutral-400 w-10 text-center mx-auto font-normal">
                      {underweight}
                    </div>
                  </div>
                </div>

                <div className="flex items-center w-[38%] bg-green-400 h-full">
                  <span className="text-center mx-auto">Healthy</span>
                </div>

                <div className="w-[4%] h-full bg-gradient-to-r from-green-400 to-yellow-400 relative">
                  <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1">
                    <div className="mx-auto w-0.5 h-3 bg-neutral-300" />
                    <div className="text-neutral-400 w-10 text-center mx-auto font-normal">
                      {healthy}
                    </div>
                  </div>
                </div>

                <div className="flex items-center w-[20%] bg-yellow-400 h-full">
                  <span className="text-center mx-auto">Overweight</span>
                </div>

                <div className="w-[4%] h-full bg-gradient-to-r from-yellow-400 to-orange-400 relative">
                  <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1">
                    <div className="mx-auto w-0.5 h-3 bg-neutral-300" />
                    <div className="text-neutral-400 w-10 text-center mx-auto font-normal">
                      {overweight}
                    </div>
                  </div>
                </div>

                <div className="flex rounded-r-md items-center w-[20%] bg-orange-400 h-full">
                  <span className="text-center mx-auto">Obese</span>
                </div>
              </div>
            </div>

            <Card className="bg-neutral-50 text-sm text-neutral-600 pt-2">
              <CardContent className="flex flex-col gap-2">
                <div className="text-lg font-semibold text-sky-400 flex items-center gap-2">
                  <FaInfoCircle />
                  Note
                </div>
                <p className="flex flex-wrap gap-1">
                This result was calculated based on your
                  <Sheet>
                    <SheetTrigger className="flex gap-1 items-center text-sm text-sky-400 hover:underline underline-offset-4">
                      BMI.
                    </SheetTrigger>
                    <SheetContent side="left" className="max-w-md">
                      <div className="flex flex-col gap-6">
                        <div className="text-xl font-semibold">
                          Body Mass Index (BMI)
                        </div>
                        <div>
                          bmi = weight
                          <span className="text-sm text-neutral-400">
                            {' '}
                            (in kg)
                            {' '}
                          </span>
                          {' '}
                          / height ^ 2
                          {' '}
                        </div>
                        <div>
                          bmi =
                          {' '}
                          {data.overview.weight}
                          {' '}
                          / (
                          {data.overview.height / 100}
                          {' '}
                          ^ 2)
                        </div>
                        <div>
                          bmi =
                          {bmi}
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                  The BMI offers insight into your weight status but overlooks factors like muscle
                  mass and body composition. Two people with the same BMI may have differing health profiles.
                </p>
              </CardContent>
            </Card>
          </div>

          <Separator orientation="vertical" className="h-80 hidden lg:block" />

          {/* composition */}
          <div className="flex flex-col gap-5 w-full h-full">
            <h3 className="text-xl font-semibold">Body Composition Analysis</h3>
            <div className="flex items-center gap-2">
            Your current body composition (
              {composition.fat_percentage}
              %) is considered
              {composition.is_healthy ? (
                <span className="font-semibold text-xl text-green-400">
                  Healthy
                </span>
              ) : (
                <span className="font-semibold text-xl text-yellow-400">
                  Overfat
                </span>
              )}
            </div>

            {/* chart v2 */}
            <div className="w-full flex flex-col gap-0 mb-10">
              <div className="w-full h-8 rounded-md shadow-md flex gap-0 text-neutral-50 font-semibold text-xs">
                <div className="flex rounded-l-md items-center w-[48%] bg-green-400 h-full">
                  <span className="text-center mx-auto">Healthy</span>
                </div>

                <div className="w-[4%] h-full bg-gradient-to-r from-green-400 to-yellow-400 relative">
                  <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1">
                    <div className="mx-auto w-0.5 h-3 bg-neutral-300" />
                    <div className="text-neutral-400 w-10 text-center mx-auto font-normal">
                      {composition.max_value}
                      %
                    </div>
                  </div>
                </div>

                <div className="flex rounded-r-md items-center w-[48%] bg-yellow-400 h-full">
                  <span className="text-center mx-auto">Overfat</span>
                </div>
              </div>
            </div>

            <Card className="bg-neutral-50 text-sm text-neutral-600 pt-3">
              <CardContent className="flex flex-col gap-2">
                <div className="text-lg font-semibold text-sky-400 flex items-center gap-2">
                  <FaInfoCircle />
                  Note
                </div>
                <p>
                Your current body composition health result has been calculated taking into
                account your gender and age. This personalized approach helps provide a more
                accurate assessment of your specific health status
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* suggested weight and fat */}
        <div className="flex flex-col lg:flex-row items-center w-full h-full justify-between gap-10">
          {/* weight target */}
          <div className="flex flex-col gap-5 w-full h-full">
            <h3 className="text-xl font-semibold">
            Target Weight Recommendation
            </h3>
            <div className="text-3xl font-semibold text-emerald-500">
              {ideal_weight}
              {' '}
              Kg
            </div>

            {ideal_weight === data.overview.weight && data.overview.fitness_goal !== 'build_muscle' && (
              <p>
                Based D. R. Miller Formula, your current weight is 
                considered perfect, make sure to maitain this weight.
              </p>
            )}

            {ideal_weight !== data.overview.weight && data.overview.fitness_goal !== 'build_muscle' && (
              <p>
                Based on D.R. Miller's formula and your fitness goals,
                 the ideal weight you could achieve is
                {' '}
                {ideal_weight}
                {' '}
                Kg.
              </p>
            )}

            {data.overview.fitness_goal === 'build_muscle' && (
              <p>
                Since your fitness goal is to build muscle, you should aim for
                {' '}
                {ideal_weight}
                {' '}
                kg to appear muscular. Keep in mind that weight alone is not 
                enough; body fat percentage is also an important factor.
              </p>
            )}
          </div>

          <Separator orientation="vertical" className="h-28 hidden lg:block" />

          {/* composition target */}
          <div className="flex flex-col gap-5 w-full h-full">
            <h3 className="text-xl font-semibold">
            Body Composition Recommendation
            </h3>
            <div className="text-3xl font-semibold text-emerald-500">
              {composition.ideal_fat <= composition.fat_percentage
                ? composition.ideal_fat
                : composition.fat_percentage}
              %
            </div>
            {composition.ideal_fat >= composition.fat_percentage ? (
              <p>
                Your current body fat percentage is already considered perfect,
                 so our task is to ensure that you maintain this body composition.
              </p>
            ) : (
              <p>
             Based on the ideal body fat percentages according to Jackson & Pollock and your
              fitness goals, the perfect body composition you can aim for is
                {' '}
                {composition.ideal_fat}
                %.
              </p>
            )}
          </div>
        </div>

        <Factors fitness_goal={data.overview.fitness_goal} />

        {/* summary */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-semibold">Summary</h3>
          <p>
             In conclusion, your goal is to
            {data.overview.weight > ideal_weight
              && ` Lose ${
                data.overview.weight - ideal_weight
              } Kg to reach the suggested ideal weight (${ideal_weight} kg), `}
            {data.overview.weight < ideal_weight
              && ` Gain ${
                ideal_weight - data.overview.weight
              } Kg to reach the suggested ideal weight (${ideal_weight} kg), `}
            {data.overview.weight === ideal_weight
              && ' Maintain your current weight, '}
            and for the body composition you should
            {composition.fat_percentage > composition.ideal_fat
              && ` Burn ${
                composition.fat_percentage - composition.ideal_fat
              } % body fat to achieve the suggested ideal body composition (${
                composition.ideal_fat
              } %).`}
            {composition.fat_percentage <= composition.ideal_fat
              && ' Maintain your current body fat percentage.'}
          </p>
        </div>
      </div>

      {/* Subscription Notice */}
      {!isSubscribed && (
      <div className='bg-teal-100 border border-teal-400 text-teal-700 px-4 py-3 rounded relative' role='alert'>  
      <strong className='font-bold'>Subscribe now!</strong>
      <span className='block sm:inline'>Get your workout plan.</span>
      <button
      className='relative ml-4 bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold py-2 px-4 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out'
      onClick={() => setIsSubscribed(true)}
      >
      <span className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-500 rounded-full opacity-50 blur-lg"></span>
      <span className="relative">Subscribe</span>
     </button>
      </div>
   )}

         {/* workout */}

        {data.overview.fitness_goal === 'build_muscle' && (
        <MuscleWorkout workout_days={data.overview.workout_days} isSubscribed={isSubscribed} />
       )}

        {data.overview.fitness_goal === 'cardiovascular' && (
        <CardiovascularWorkout workout_days={data.overview.workout_days} isSubscribed={isSubscribed} />
       )}

        {data.overview.fitness_goal === 'burn_fats' && (
        <FatWorkout workout_days={data.overview.workout_days} isSubscribed={isSubscribed} />
       )}


      {/* Diet */}
      <div className="flex flex-col gap-20">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-4xl flex-shrink-0">Diet Plan</h2>
          <span className="text-neutral-400 text-sm font-normal">
          Your Weekly Meal Plan
          </span>
        </div>

        {/* Calories */}
        <div className="flex flex-col gap-5 w-full h-full">
          <h3 className="text-xl font-semibold">Daily Calory Intake</h3>
          <div className="text-3xl font-semibold text-emerald-500">
            {ideal_weight < data.overview.weight && calory_data.lose_05}
            {ideal_weight > data.overview.weight && calory_data.gain_05}
            {ideal_weight === data.overview.weight && calory_data.calories}
            {' '}
            Calories
          </div>
          <p>
            {ideal_weight < data.overview.weight && `In order to lose 0.5 kg per week, you need to consume ${calory_data.lose_05} calories a day.`}
            {ideal_weight > data.overview.weight && `In order to gain 0.5 kg per week, you need to consume ${calory_data.gain_05} calories a day.`}
            {ideal_weight === data.overview.weight && `In order to maitain your current weight, you need to comsume ${calory_data.calories} calories a day.`}
          </p>

          {/* chart v2 */}
          <div className="w-full hidden lg:flex flex-col gap-0 mb-10">
            <div className="w-full h-8 rounded-md shadow-md flex gap-0 text-white font-bold text-xs">
              <div className="rounded-l-md flex items-center w-[10%] bg-red-400 h-full">
                <span className="text-center mx-auto">-1 Kg/per week</span>
              </div>

              <div className="w-[5%] relative h-full bg-gradient-to-r from-red-400 to-orange-400">
                <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1">
                  <div className="mx-auto w-0.5 h-3 bg-neutral-300" />
                  <div className="text-neutral-400 w-10 text-center mx-auto font-normal">
                    {calory_data.lose_1}
                    {' '}
                    Calories
                  </div>
                </div>
              </div>

              <div className="flex items-center w-[10%] bg-orange-400 h-full">
                <span className="text-center mx-auto">- 0.5 Kg/per week</span>
              </div>

              <div className="w-[5%] h-full bg-gradient-to-r from-orange-400 to-lime-400 relative">
                <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1">
                  <div className="mx-auto w-0.5 h-3 bg-neutral-300" />
                  <div className="text-neutral-400 w-10 text-center mx-auto font-normal">
                    {calory_data.lose_05}
                    {' '}
                    Calories
                  </div>
                </div>
              </div>

              <div className="flex items-center w-[10%] bg-lime-400 h-full">
                <span className="text-center mx-auto">- 0.25 Kg/per week</span>
              </div>

              <div className="w-[5%] h-full bg-gradient-to-r from-lime-400 to-green-400 relative">
                <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1">
                  <div className="mx-auto w-0.5 h-3 bg-neutral-300" />
                  <div className="text-neutral-400 w-10 text-center mx-auto font-normal">
                    {calory_data.lose_025}
                    {' '}
                    Calories
                  </div>
                </div>
              </div>

              <div className="flex items-center w-[10%] bg-green-400 h-full">
                <span className="text-center mx-auto">Maintain your weight</span>
              </div>

              <div className="w-[5%] h-full bg-gradient-to-r from-green-400 to-cyan-400 relative">
                <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1">
                  <div className="mx-auto w-0.5 h-3 bg-neutral-300" />
                  <div className="text-neutral-400 w-10 text-center mx-auto font-normal">
                    {calory_data.calories}
                    {' '}
                    Calories
                  </div>
                </div>
              </div>

              <div className="flex items-center w-[10%] bg-cyan-400 h-full">
                <span className="text-center mx-auto">+ 0.25 Kg/per week</span>
              </div>

              <div className="w-[5%] h-full bg-gradient-to-r from-cyan-400 to-sky-400 relative">
                <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1">
                  <div className="mx-auto w-0.5 h-3 bg-neutral-300" />
                  <div className="text-neutral-400 w-10 text-center mx-auto font-normal">
                    {calory_data.gain_025}
                    {' '}
                    Calories
                  </div>
                </div>
              </div>

              <div className="flex items-center w-[10%] bg-sky-400 h-full">
                <span className="text-center mx-auto">+ 0.5 Kg/per week</span>
              </div>

              <div className="w-[5%] h-full bg-gradient-to-r from-sky-400 to-indigo-400 relative">
                <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1">
                  <div className="mx-auto w-0.5 h-3 bg-neutral-300" />
                  <div className="text-neutral-400 w-10 text-center mx-auto font-normal">
                    {calory_data.gain_05}
                    {' '}
                    Calories
                  </div>
                </div>
              </div>

              <div className="flex items-center w-[10%] bg-indigo-400 h-full">
                <span className="text-center mx-auto">+ 1 Kg/per week</span>
              </div>

              <div className="w-[5%] h-full bg-gradient-to-r from-indigo-400 to-indigo-400 relative rounded-r-md">
                <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1 rounded-r-md">
                  <div className="mx-auto w-0.5 h-3 bg-neutral-300" />
                  <div className="text-neutral-400 w-10 text-center mx-auto font-normal">
                    {calory_data.gain_1}
                    {' '}
                    Calories
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Table for Mobile */}
          <Table className="block lg:hidden w-full">
            <TableHeader>
              <TableRow>
                <TableHead>Kg</TableHead>
                <TableHead>Calories</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">-1 Kg/per week</TableCell>
                <TableCell>{calory_data.lose_1}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">-0.5 Kg/per week</TableCell>
                <TableCell>{calory_data.lose_05}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">-0.25 Kg/per week</TableCell>
                <TableCell>{calory_data.lose_025}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">Maintain the weight</TableCell>
                <TableCell>{calory_data.calories}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">+0.25 Kg/per week</TableCell>
                <TableCell>{calory_data.gain_025}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">+0.5 Kg/per week</TableCell>
                <TableCell>{calory_data.gain_05}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">+1 Kg/per week</TableCell>
                <TableCell>{calory_data.gain_1}</TableCell>
              </TableRow>
            </TableBody>
          </Table>

        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Protein */}
          <div className="flex flex-col gap-5 w-full h-full">
            <h3 className="text-xl font-semibold">
            Daily Protein Requirements
            </h3>
            <div className="text-3xl font-semibold text-emerald-500">
              {calory_data.protein_1}
              g to
              {' '}
              {calory_data.protein_2}
              g
            </div>
            <p>
              {data.overview.fitness_goal === 'build_muscle' && 'Since your goal is to build muscles, high protein intake is an important factor to build lean muscle mass'}
            </p>
            <div className="flex flex-col gap-1">
              <div className="font-semibold">Sources:</div>
              <ul className="list-disc list-inside">
                <li>Meat</li>
                <li>Eggs</li>
                <li>Fish</li>
                <li>Poultry</li>
                <li>Legumes (e.g., lentils, chickpeas)</li>
                <li>Nuts (e.g., almonds, peanuts)</li>
                <li>Seeds (e.g., chia seeds, sunflower seeds)</li>
                <li>Tofu</li>
                <li>Quinoa</li>
                <li>Dairy (e.g., cheese, yogurt)</li>
                <li>Beans (e.g., black beans, kidney beans)</li>
                <li>Greek Yogurt</li>
                <li>Cottage Cheese</li>
              </ul>
            </div>
          </div>

          {/* Carbs */}
          <div className="flex flex-col gap-5 w-full h-full">
            <h3 className="text-xl font-semibold">
            Daily Carbs Requirement
            </h3>
            <div className="text-3xl font-semibold text-emerald-500">
              {calory_data.carbs_1}
              g to
              {' '}
              {calory_data.carbs_2}
              g
            </div>
            <p>
              {data.overview.fitness_goal === 'build_muscle' && 'Carbohydrates are a crucial macronutrient for bodybuilders due to their role in providing energy for intense workouts and aiding in muscle recovery'}
            </p>
            <div className="flex flex-col gap-1">
              <div className="font-semibold">Sources:</div>
              <ul className="list-disc list-inside">
                <li>Rice (e.g., white rice, brown rice)</li>
                <li>Pasta (e.g., spaghetti, penne)</li>
                <li>Bread (e.g., whole wheat bread, baguette)</li>
                <li>Potatoes</li>
                <li>Quinoa</li>
                <li>Oats</li>
                <li>Cereals (e.g., cornflakes, oatmeal)</li>
                <li>Beans (e.g., black beans, kidney beans)</li>
                <li>Lentils</li>
                <li>Sweet Potatoes</li>
                <li>Barley</li>
                <li>Millet</li>
                <li>Fruits (e.g, Bananas, apples)</li>
              </ul>
            </div>
          </div>

          {/* Fats */}
          <div className="flex flex-col gap-5 w-full h-full">
            <h3 className="text-xl font-semibold">
            Daily Fats Requirement
            </h3>
            <div className="text-3xl font-semibold text-emerald-500">
              {calory_data.fats_1}
              g to
              {' '}
              {calory_data.fats_2}
              g
            </div>
            <p>
              {data.overview.fitness_goal === 'build_muscle' && 'You need to take from 20% to 25% fats of total calories'}
            </p>
            <div className="flex flex-col gap-1">
              <div className="font-semibold">Sources:</div>
              <ul className="list-disc list-inside">
                <li>Avocado</li>
                <li>Olive oil</li>
                <li>Coconut oil</li>
                <li>Fatty fish (e.g., salmon, mackerel)</li>
                <li>Nuts (e.g., almonds, walnuts)</li>
                <li>Seeds (e.g., chia seeds, flaxseeds)</li>
                <li>Nut butters (e.g., almond butter, peanut butter)</li>
                <li>Dark chocolate (with high cocoa content)</li>
                <li>Full-fat yogurt</li>
                <li>Cheese (in moderation)</li>
                <li>Eggs (contain healthy fats in the yolk)</li>
                <li>Olives</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* share */}
      <CopyLink params={{slug: data.slug}} />
    </div>
  );
}