
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import { sendProgramEmail } from '../emailService';


export async function POST(request: Request): Promise<any> {
  // get data from request
  let error: any = null;
  let result: any = {};
  await request
    .json()
    .then((res) => {
      result = res;
    })
    .catch((err) => {
      error = err.toString();
    });

  // validate data
  if (error) {
    console.error('Error parsing request JSON:', error);
    return NextResponse.json(
      {
        message: 'Bad Request',
        error,
      },
      { status: 400 },
    );
  }
  if (typeof result !== 'object') {
    console.error('Invalid request data:', result);
    return NextResponse.json(
      {
        message: 'Bad request',
      },
      { status: 400 },
    );
  }

  // overview data
  const overview = {
    name: result.name || null,
    age: result.age,
    gender: result.gender,
    weight: result.weight,
    height: result.height,
    is_fat_accurate: result.is_fat_accurate === 'yes',
    neck: result.neck,
    waist: result.waist,
    hip: result.hip,
    body_type: result.body_type,
    fitness_goal: result.fitness_goal,
    workout_days: result.workout_days,
    activity: result.activity,
  };

  // save data to DB
  const prisma = new PrismaClient();
  const sanitizeSlug = (name: string) => name.replace(/[^a-zA-Z0-9]/g, '-');
  const slug = result.name ? sanitizeSlug(result.name) + uuidv4().substring(0, 4) : uuidv4().substring(0, 5);
  try {
    await prisma.program.create({
      data: {
        slug,
        email: result.name,
        diet: {},
        overview,
        workout: {},
      },
    });
    console.log('DATA ADDED TO DB');
  } catch (err) {
    console.error('Error adding data to DB:', err);
    return NextResponse.json(
      {
        message: 'Internal Server Error',
        error: (err as Error).toString(),
      },
      { status: 500 },
    );
  }

  // Send email
  sendProgramEmail([result.name], slug).catch((emailError) => {
    console.error('Error sending email:', emailError);
  });

  return NextResponse.json({slug,});
}