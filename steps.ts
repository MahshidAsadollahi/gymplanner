// imports
import type { stepType } from '@/types.h';
import BasicInfoCard from '@/components/basic_info';
import BasicInfoCardName from '@/components/basic_info_name';
import BasicInfoCardAge from '@/components/basic_info_age';
import BasicInfoCardGender from '@/components/basic_info_gender';
import BasicInfoCardHeightWeight from '@/components/basic_info_height_weight';
import MeasureQuestion from '@/components/measure_question';
import FitGoal from '@/components/fit_goal';
import MedicalCard from './components/medical';
import SleepCard from './components/sleep';
import Lifestyle from './components/lifestyle';
import AvailabilityCard from './components/availability';
import DietCard from './components/diet';
import AnimatedChart from './components/AnimatedChart';


const steps_list: stepType[] = [
  {
    id: 'BasicInfoCard',
    icon: '📝',
    title: 'Personal Informations 📝',
    description: 'We need some basic informations from you to start',
    component: BasicInfoCard,
    sub_steps: [
      { id: 'BasicInfoCardName', title: 'Name', component: BasicInfoCardName },
      { id: 'BasicInfoCardAge', title: 'Age', component: BasicInfoCardAge },
      { id: 'BasicInfoCardGender', title: 'Gender', component: BasicInfoCardGender },
      { id: 'BasicInfoCardHeightWeight', title: 'Height & Weight', component: BasicInfoCardHeightWeight },
      { id: 'MeasureQuestion', title: 'Body Measurement', component: MeasureQuestion },

    ],
    answers: {
      name: '',
      age: 22,
      gender: 'M',
      height: 0,
      weight: 0,
      body_type: 'healthy',
      neck: 50,
      waist: 90,
      hip: 60,
      is_fat_accurate: null,
    },
  },
  {
    id: 'FitGoal',
    icon: '🏃',
    title: 'Fitness Goal 🏃',
    description: 'What do you want to achieve in your new fitness journey',
    component: FitGoal,
    sub_steps: [], 
    answers: {
      fitness_goal: 'burn_fats',
      workout_days: 3,
      activity: '0',
      ideal_weight: 50,
    },
  },
  {
    id: 'MedicalCard',
    icon: '💊',
    title: 'Medical Conditions 💊',
    description: 'Do you have any existing medical conditions',
    component: MedicalCard,
    sub_steps: [],
    answers: {
      medical_conditions: '',
      specific_dietary: '',
    },
  },
  {
    id: 'SleepCard',
    icon: '🛌',
    title: 'Sleep Information 🛌',
    description: 'Please provide your sleep information',
    component: SleepCard,
    sub_steps: [],
    answers: {
      avg_sleep_hours: 8,
      morning_or_night: '',
      sleep_time:'',
      wakeup_time:'',
  },
},
{
  id: 'Lifestyle',
  icon: '🏠',
  title: 'Lifestyle Information 🏠',
  description: 'Please provide your lifestyle information',
  component: Lifestyle,
  sub_steps: [],
  answers: {
    fitness_level:'',
},
},
{
  id: 'AvailabilityCard',
  icon: '📅',
  title: 'Availability 📅',
  description: 'Please provide your availability',
  component: AvailabilityCard,
  sub_steps: [],
  answers: {
    gym_access:'',

},
},
{
  id: 'DietCard',
  icon: '🍎',
  title: 'Diet Information 🍎',
  description: 'Please provide your diet information',
  component: DietCard,
  sub_steps: [],
  answers: {
    avg_meals_day: 3,
},
},
{
  id: 'AnimatedChart',
  icon: '📊',
  title: 'Progress Chart 📊',
  description: 'See your estimated progress to achieve your goal',
  component: AnimatedChart,
  sub_steps: [],
  answers: {},
},
];

export default steps_list;