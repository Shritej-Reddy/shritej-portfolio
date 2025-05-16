'use client';

import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const move = (e: MouseEvent) => {
      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;
    };

    const onClick = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 150);
    };

    const onMouseOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (
        el.tagName === 'BUTTON' ||
        el.tagName === 'A' ||
        el.getAttribute('data-cursor-hover') !== null
      ) {
        setHovered(true);
      }
    };

    const onMouseOut = () => setHovered(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', onClick);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mouseout', onMouseOut);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', onClick);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed z-50 pointer-events-none transition-all duration-150 ease-out 
        rounded-full mix-blend-difference
        ${hovered ? 'w-10 h-10 bg-white/10 border border-[#309898]' : 'w-4 h-4 bg-[#309898]'} 
        ${clicked ? 'scale-75' : 'scale-100'}
        `}
      style={{
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
}
