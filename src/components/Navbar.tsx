import Image from 'next/image';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: 'rgba(255, 192, 203, 0.5)' }} className="p-[18px]">
      <div className="relative flex items-center justify-center">
        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <Image src="/Logo.webp" alt="Nailed by Mo Logo" width={104} height={80} />
        </div>
        <h1 className="text-2xl font-bold">Welcome to Nailed By Mo</h1>
      </div>
    </nav>
  );
};

export default Navbar;
