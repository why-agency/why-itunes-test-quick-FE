import MusicGrid from './components/MusicGrid';

export default function Home() {
  return (
    <div className="font-sans h-dvh w-full">
      <main className="flex flex-col items-center size-full py-8">
        {/* <div className="w-full max-w-6xl sticky top-0 bg-white z-10"> */}
        <input type="text" className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full max-w-md sticky top-2 bg-white" placeholder="Search for music..." />
        {/* </div> */}
        <MusicGrid />
      </main>
    </div>
  );
}
