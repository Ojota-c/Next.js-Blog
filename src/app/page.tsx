import { Suspense } from 'react';
import { SpinLoader } from '../components/SpinLoader';
import { PostsList } from '../components/PostsList';

export default async function HomePage() {
  return (
    <div>
      <header>
        <h1 className='text-6xl font-bold text-center py-8'>Aqui é a HEADER</h1>
      </header>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <p className='text-6xl font-bold text-center py-8'>FOOTER</p>
      </footer>
    </div>
  );
}
