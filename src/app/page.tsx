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

      <section>
        <Link href='#'>
          <Image src='' width={1200} height={720} alt='Título do post' />
        </Link>
        <div></div>
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
