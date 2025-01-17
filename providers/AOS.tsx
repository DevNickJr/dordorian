'use client'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import React from 'react';

interface Props {
    children: React.ReactNode
}

export default function Providers({ children }: Props) {
    React.useEffect(() => {
      AOS.init({
      });
    }, []);
  
    return (
        <>
            {children}
        </>
    )
}