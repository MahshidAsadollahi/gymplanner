import React from "react";
import { useContext } from "react";
import { StepsContext } from "@/context/steps";
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';
import Lottie from "lottie-react";
import chartAnimation from '@/animations/chart.json';
import type { stepType } from '@/types.h';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AnimatedChart = () => {
  const { steps_list } = useContext(StepsContext);
  const basicInfo = steps_list.find((step: stepType) => step.id === 'BasicInfoCard')?.answers;
  const fitGoal = steps_list.find((step: stepType) => step.id === 'FitGoal')?.answers;

  console.log('Basic Info:', basicInfo);
  console.log('Fit Goal:', fitGoal);

  const calculateDaysToGoal = () => {
    const { weight, height, age, gender } = basicInfo;
    const { fitness_goal, workout_days, fitness_level, average_meals, ideal_weight } = fitGoal;

    let days = 0;
    let goalMultiplier = 1;
    let levelMultiplier = 1;
    let mealsMultiplier = 1;

    // Adjust goal multiplier
    if (fitness_goal === 'burn_fats') {
      goalMultiplier = 10;
    } else if (fitness_goal === 'build_muscle') {
      goalMultiplier = 15;
    } else if (fitness_goal === 'cardiovascular') {
      goalMultiplier = 12;
    }

    // Adjust level multiplier
    if (fitness_level === 'beginner') {
      levelMultiplier = 1.5;
    } else if (fitness_level === 'intermediate') {
      levelMultiplier = 1.2;
    } else if (fitness_level === 'advanced') {
      levelMultiplier = 1;
    }

    // Adjust meals multiplier
    if (average_meals > 3) {
      mealsMultiplier = 1.5;
    } else if (average_meals === 3) {
      mealsMultiplier = 1.2;
    } else {
      mealsMultiplier = 1;
    }

    days = ((weight - ideal_weight) * goalMultiplier / workout_days) * levelMultiplier * mealsMultiplier;
    return Math.max(0, Math.round(days));
  };

  const daysToGoal = calculateDaysToGoal();
  const data = {
    labels: Array.from({ length: daysToGoal }, (_, i) => i + 1),
    datasets: [
      {
        label: 'Weight Progress',
        data: Array.from({ length: daysToGoal }, (_, i) => basicInfo.weight - (i * (basicInfo.weight - fitGoal.ideal_weight) / (daysToGoal - 1))),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        pointRadius: 3,
        pointBackgroundColor: 'rgba(75,192,192,1)',
        pointBorderColor: '#fff',
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        tension: 0,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    scales: {
      y: {
        beginAtZero: true,
        min: Math.min(basicInfo.weight, fitGoal.ideal_weight),
        max: Math.max(basicInfo.weight, fitGoal.ideal_weight),
        ticks: {
          stepSize: 5,
          callback: function (tickValue: string | number) {
            if (typeof tickValue === 'number') {
              if (tickValue === basicInfo.weight) {
                return `${tickValue} (Current Weight)`;
              }
              if (tickValue === fitGoal.ideal_weight) {
                return `${tickValue} (Goal Weight)`;
              }
            }
            return '';
          },
          color: "rgba(0,0,0,0.5)",
          font: {
            weight: "bold",
          },
          padding: 20,
        },
        grid: {
          drawTicks: false,
          display: false
        }
      },
      x: {
        grid: {
          color: "transparent"
        },
        ticks: {
          padding: 20,
          color: "rgba(0,0,0,0.5)",
          font: {
            weight: "bold"
          }
        }
      }
    },
    plugins: {
      legend: {
        position: "bottom"
      }
    },
    animations: {
      y: {
        duration: 1000,
        easing: 'linear',
        from: (ctx) => {
          if (ctx.type === 'data') {
            return ctx.chart.scales.y.getPixelForValue(50);
            
          }
          
        },
        
      },
    },
  };

  return (
    <div className="w-full px-1 lg:w-3/4 2xl:w-2/4 mx-auto">
      <h2 className="text-center mb-4">Estimated Days to Achieve Your Goal: {daysToGoal} days</h2>
      <div className="flex flex-col items-center">
        <Line data={data} options={options} />
        <Lottie animationData={chartAnimation} style={{ width: 500, height: 500 }} />
      </div>
    </div>
  );
};

export default AnimatedChart;