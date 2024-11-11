// app/(home)/program/[slug]/page.tsx
import { PrismaClient } from '@prisma/client';
import ProgramPage from '@/components/ProgramPage';

const prisma = new PrismaClient();

async function getProgramData(slug: string) {
  const data = await prisma.program.findUnique({
    where: { slug },
  });

  if (!data) {
    throw new Error('Program not found');
  }

  return data;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getProgramData(params.slug);

  return <ProgramPage data={data} />;
}