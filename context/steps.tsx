// context/steps.tsx
'use client';

import { ReactNode, createContext, useReducer, useEffect, useCallback } from 'react';
import type { stepsType } from '@/types.h';
import steps_list from '@/steps';
import Axios from 'axios';
import { useRouter } from 'next/navigation';

// initial state
const initial_state: stepsType = {
  step_num: 0,
  sub_step_num: 0,
  animation: 'animate__fadeInRight',
  is_generate_btn: false,
  is_next_btn: true,
  is_previous_btn: false,
  steps_list,
  is_blocked: false,
};

// Reducer Function
const reducer = (
  state: stepsType,
  action: {
    type: string;
    payload: any;
  },
): stepsType => {
  switch (action.type) {
    case 'NEXT_STEP':
      const currentStep = state.steps_list[state.step_num];
      const hasSubSteps = currentStep.sub_steps.length > 0;
      const isLastSubStep = state.sub_step_num === currentStep.sub_steps.length - 1;

      if (hasSubSteps) {
        return {
          ...state,
          step_num: isLastSubStep ? state.step_num + 1 : state.step_num,
          sub_step_num: isLastSubStep ? 0 : state.sub_step_num + 1,
          is_previous_btn: true,
          animation: 'animate__fadeInRight',
          is_next_btn: state.step_num === state.steps_list.length - 2 && isLastSubStep ? false : true,
          is_generate_btn: state.step_num === state.steps_list.length - 2 && isLastSubStep ? true : false,
        };
      } else {
        return {
          ...state,
          step_num: state.step_num + 1,
          sub_step_num: 0,
          is_previous_btn: true,
          animation: 'animate__fadeInRight',
          is_next_btn: state.step_num === state.steps_list.length - 2 ? false : true,
          is_generate_btn: state.step_num === state.steps_list.length - 2 ? true : false,
        };
      };
    
    case 'PREVIOUS_STEP':
      const isFirstSubStep = state.sub_step_num === 0;
      const previousStepNum = state.step_num - 1;
      return {
        ...state,
        step_num: isFirstSubStep ? Math.max(previousStepNum, 0) : state.step_num,
        sub_step_num: isFirstSubStep ? (previousStepNum >= 0 ? state.steps_list[previousStepNum].sub_steps.length - 1 : 0) : state.sub_step_num - 1,
        animation: 'animate__fadeInLeft',
        is_previous_btn: isFirstSubStep ? previousStepNum > 0 : true,
        is_next_btn: true,
        is_generate_btn: false,
      };

    case 'CHANGE_STEP':
      return {
        ...state,
        step_num: action.payload,
        sub_step_num: 0,
        is_previous_btn: action.payload ? true : false,
        is_next_btn: action.payload + 1 === steps_list.length ? false : true,
        is_generate_btn: action.payload + 1 === steps_list.length ? true : false,
      };

    case 'BLOCK_NEXT':
      return {
        ...state,
        is_blocked: true,
      };

    case 'ALLOW_NEXT':
      return {
        ...state,
        is_blocked: false,
      };

    case 'LOAD_COMPONENT':
      const tmp = state.steps_list.map((elt) => {
        if (elt.id === action.payload.id)
          return {
            ...elt,
            component: action.payload.component,
          };
        return elt;
      });
      return {
        ...state,
        steps_list: tmp,
      };

    case 'UPDATE_ANSWER':
      return {
        ...state,
        steps_list: state.steps_list.map((elt) => {
          if (elt.id === action.payload.id){
            return {
              ...elt,
              answers: {
                ...elt.answers,
                ...action.payload.data,
            },
          };
        }
          return elt;
        }),
      };

    default:
      return state;
  }
};

// Context
const StepsContext = createContext<any>(initial_state);

function StepsProvider({ children }: { children: ReactNode }) {
  // variables
  const [steps, dispatch] = useReducer(reducer, initial_state);
  const router = useRouter();

  // functions
  // replace the null component on each step with a real component
  const loadComponent = (id: string, component: any) =>
    dispatch({ type: 'LOAD_COMPONENT', payload: { id, component } });

  // handle the click of "Next" Button
  const nextStep = () => {
    dispatch({ type: 'NEXT_STEP', payload: null });
  };

  // handle the click of "Previous" Button
  const previousStep = () => dispatch({ type: 'PREVIOUS_STEP', payload: null });

  // Manually change the step (used in the stepBar)
  const changeStep = (step_number: number) => {
    dispatch({ type: 'CHANGE_STEP', payload: step_number });
  };

  // get the current answer for a specific step
  const getAnswer = (id: string) => {
    const step = steps.steps_list.find((elt) => elt.id === id);
    return step ? step.answers : {};
  };

  // get all questions
  const getAllAnswers = async (): Promise<any> => {
    let data = {};
    steps.steps_list.forEach((elt) => {
      const answers = elt.answers;
      data = {
        ...data,
        ...answers,
      };
    });

    const { data: response } = await Axios({
      method: 'POST',
      url: '/api/generate',
      data,
    }).catch((err) => {
      throw err;
    });

    const { slug } = response;
    router.push(`/program/${slug}`);

    return response;
  };

  // updateAnswer
  const updateAnswer = (id: string, data: object) => {
    dispatch({
      type: 'UPDATE_ANSWER',
      payload: {
        id,
        data,
      },
    });
  };

  // block next button
  const blockNext = useCallback(() => {
    dispatch({ type: 'BLOCK_NEXT', payload: null });
  }, []);

  // allow next button
  const allowNext = useCallback(() => {
    dispatch({ type: 'ALLOW_NEXT', payload: null });
  }, []);

  // generate an overview
  const generateOverview = async () => {
    // get answers of 1st and 2nd steps
    const data = {
      ...steps.steps_list[0].answers,
      ...steps.steps_list[1].answers,
    };

    // send data to server
    Axios({
      method: 'POST',
      url: '/api/generate/overview',
      data,
    });
  };

  useEffect(() => {}, [steps]);

  // returns
  return (
    <StepsContext.Provider
      value={{
        ...steps,
        nextStep,
        previousStep,
        updateAnswer,
        getAnswer,
        changeStep,
        loadComponent,
        getAllAnswers,
        blockNext,
        allowNext,
      }}
    >
      {children}
    </StepsContext.Provider>
  );
}

// exports
export { StepsContext, StepsProvider };