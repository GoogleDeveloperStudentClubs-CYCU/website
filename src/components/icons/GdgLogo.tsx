import type { SVGProps } from 'react';
import Image, {StaticImageData} from 'next/image';
import logo from '@/image/GDG On Campus - Centered - Small - Square.jpg';

export function GdgLogo(props: SVGProps<SVGSVGElement>) {

  return (
    <Image
      src={logo as StaticImageData}
      alt="GDG Logo"
      width={40}
      height={40}
      className="rounded-full"
    />
  );

  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="GDG Logo"
      {...props}
    >
      <rect width="50" height="50" x="0" y="0" fill="#4285F4" /> {/* Blue */}
      <rect width="50" height="50" x="50" y="0" fill="#0F9D58" /> {/* Green */}
      <rect width="50" height="50" x="0" y="50" fill="#DB4437" /> {/* Red */}
      <rect width="50" height="50" x="50" y="50" fill="#F4B400" /> {/* Yellow */}
    </svg>
  );
}
