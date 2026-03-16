import { Suspense } from 'react';
import { SpinLoader } from '../components/SpinLoader';
import { PostsList } from '../components/PostsList';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { PostHeading } from '../components/PostHeading';
import { PostCoverImage } from '../components/PostCoverImage';

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
        <PostCoverImage
          linkProps={{
            href: '/post/image02.png',
          }}
          imageProps={{
            width: 1200,
            height: 720,
            src: '/images/image02.png',
            alt: 'Imagem de Teste',
          }}
        />
        <div className='flex flex-col gap-4 sm:justify-center'>
          <time
            className='text-slate-600 block text-sm/tight'
            dateTime='2025-06-14'
          >
            14/06/2026 10:00
          </time>

          <PostHeading as='h1' url='#'>
            Teste Titulo
          </PostHeading>

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
