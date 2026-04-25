import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold my-8">About Me</h1>
      <div className="flex flex-col items-center">
        <Image src="/assets/portfolio.png" alt="Portfolio Image" width={400} height={390} className="rounded-full" />
                <div style={{ height: '2rem' }} />
        <div className="mb-16 mx-4 p-6 rounded-lg max-w-2xl shadow-[0px_0px_15px_2px_#f9a8d4]" style={{ fontSize: '1.5rem' }}>
            <p className="text-center">Hey there, My name is Monique, but you can call me Mo! ❤️</p>
                        <p className="mt-4">I am a self-taught nail technician with 6+ years of experience. I do all kinds of services from acrylics, gel-x, manicures, and deluxe pedicures. I am a perfectionist in my craft and it shows with my detailed hand-painted designs. I love what I do and the people I'm about to meet. To see some of my beautiful Hand-painted Nails please check out my <Link href="/portfolio" style={{ textDecoration: 'none' }}><span className="font-bold" style={{ color: '#DE6FA1' }}>Portfolio</span></Link>! Thank you for stopping by, Hope to see you soon! ❤️</p>
          </div>
      </div>
    </div>
  );
}
