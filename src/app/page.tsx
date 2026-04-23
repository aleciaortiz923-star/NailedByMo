import ImageCarousel from '@/components/ImageCarousel';

export default function Home() {
  return (
    <main className="flex-grow flex flex-col items-center justify-center p-4 sm:p-8 md:p-12">
      <div className="w-full max-w-xs">
        <ImageCarousel />
      </div>
    </main>
  );
}
