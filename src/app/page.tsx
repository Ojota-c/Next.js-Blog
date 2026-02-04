import clsx from 'clsx';
import { SpinLoader } from '../components/SpinLoader';

export default function HomePage() {
  console.log('HomePage');
  return (
    <div>
      <SpinLoader containerClasses={clsx('min-h-125', 'bg-amber-400')} />
    </div>
  );
}
