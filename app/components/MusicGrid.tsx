import { getMusicData } from "@/lib/api";

export default async function MusicGrid() {
    const musicData = await getMusicData();

    return (
        <div className="font-sans h-dvh w-full">

            <h1>Search Results</h1>
            {musicData.results.map((item: any) => (
                <div key={item.trackId} className="music-item">
                    <img src={item.artworkUrl100} alt={item.trackName} />
                    <h2>{item.trackName}</h2>
                    <p>{item.artistName}</p>
                </div>
            ))}
        </div>
    );
}