'use client'

import clsx from 'clsx';

export function Header() {
  console.log('Header')
  return (
    <h1
      className={clsx(
        'text-xl',
        'font-bold',
        'text-green-400',
        'hover:text-white',
        'cursor-pointer',
        'hover:bg-green-400',
        'transition',
        'duration-300',
      )}
      onClick={()=> alert('ok')}

    >
      Hello World! Congratulation you are a great Dev!
    </h1>
  );
}
