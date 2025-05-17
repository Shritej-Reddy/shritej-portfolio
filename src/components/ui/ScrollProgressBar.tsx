'use client';

import { useEffect, useState } from 'react';
import { useScrollProgress } from '@/hooks/useScrollProgress';

export default function ScrollProgressBar() {
  const scroll = useScrollProgress();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(scroll > 1);
  }, [scroll]);

  return (
    <div
      className={`fixed top-0 left-0 h-[4px] z-[9999] transition-all duration-300
        bg-gradient-to-r from-[#309898] via-[#FF9F00] to-[#F4631E]
        shadow-md rounded-full
        ${visible ? 'opacity-100' : 'opacity-0'}
      `}
      style={{ width: `${scroll}%` }}
    />
  );
}
 