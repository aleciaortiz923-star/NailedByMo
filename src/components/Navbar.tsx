import Image from 'next/image';
import SlideOutMenu from './SlideOutMenu';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: 'var(--brand-pink)', zIndex: 10 }} className="p-[18px]">
      <div className="relative flex items-center justify-between w-full">
        <Image src="/Logo.webp" alt="Nailed by Mo Logo" width={104} height={80} />
        <h1 className="text-2xl font-bold absolute left-1/2 -translate-x-1/2">Welcome to Nailed By Mo</h1>
        <SlideOutMenu />
      </div>
    </nav>
  );
};

export default Navbar;
