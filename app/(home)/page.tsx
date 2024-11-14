import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import '../globals.css';
import { Typography, Box } from '@mui/material';

export default function Home() {
  return (
    <div className="w-full px-5 lg:w-4/6 mx-auto py-10 lg:py-28">
      {/* header */}
      <div className="flex flex-col gap-6 lg:gap-12 text-center w-full mx-auto">
        <h1 className="sunday-s text-customYellow text-4xl lg:text-6xl font-bold text-center leading-relaxed lg:leading-snug">
          Get Your Free 
          <br/>
          <span className="race-c text-customGreen">Fitness Plan</span>
            
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-10">
          <div className="lg:w-1/2 text-left">
            <p className="text-sm lg:text-xl text-neutral-400 lg:px-59 mx-auto lg:mx-0 leading-relaxed lg:leading-loose">
              Get started with our FREE personalized workout plan that&apos;s tailored just for you.
              No more excuses, every rep, every set is a step closer to becoming the strongest version of yourself.
              Stay committed, stay motivated.It’s time to prioritize YOU.
            </p>
            <Link href="/start">
              <Button size="lg" className="start-now-button w-60 mt-16 py-7 text-xl animate__animated animate__infinite animate__pulse rounded-full shadow-lg mx-auto lg:ml-0 ml-13">
                Start Now
              </Button>
             
            </Link>
          </div>
          <Box sx={{ position: 'relative', textAlign: 'center' }}>
            <Typography
              sx={{
                fontSize: { lg: '370px', xs: '100px' },
                background: 'linear-gradient(90deg, #20B2AA , #FFD700)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: { lg: 'block', xs: 'none' },
                opacity: 0.1,
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: -1,
                mt: -42,
              }}
            >
              Exercise
            </Typography>
          </Box>
          <Image src="/images/banner.png" width={500} height={500} alt="hero" className="mx-auto lg:mx-0 lg:w-1/2" />
        </div>
      </div>
    </div>
  );
}