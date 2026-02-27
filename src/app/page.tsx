import { Suspense } from 'react';
import { SpinLoader } from '../components/SpinLoader';
import { PostsList } from '../components/PostsList';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import Link from 'next/link';
import Image from 'next/image';

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
        <Link className='w-full h-full overflow-auto rounded-xl' href='#'>
          <Image
            className='group-hover:scale-105 transition duration-800 '
            src='/images/image01.png'
            width={1200}
            height={720}
            alt='Título do post'
            priority
          />
        </Link>
        <div className='flex flex-col gap-4'>
          <time className='text-slate-600 text-sm' dateTime='2025-06-14'>
            14/06/2026 10:00
          </time>

          <h1>
            <Link href='#'>Clique para testar</Link>
          </h1>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
            minus natus voluptates, ratione sunt alias enim corrupti iure quo
            cumque blanditiis suscipit consequatur amet aperiam. Rerum nihil
            molestiae sequi fuga.
          </p>
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <p className='text-6xl font-bold text-center py-8'>FOOTER</p>
      </footer>
    </Container>
  );
}
