import MusicGrid from './components/MusicGrid';

export default function Home() {
  return (
    <div className="font-sans h-dvh w-full">
      <main className="flex flex-col items-center size-full py-8 pb-16">
        <p>This is an itunes Grid</p>
        <MusicGrid />
      </main>
    </div>
  );
}
