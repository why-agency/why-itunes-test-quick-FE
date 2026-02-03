import { getMusicData } from "@/lib/api";
import { div } from "motion/react-client";



export default async function MusicGrid() {
    const musicData = await getMusicData();

    return (
        <div className="font-sans h-dvh w-full px-8">

            <h1>Search Results</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {musicData.results.map((item: any) => (
                    <div key={item.trackId} className="music-item">
                        <img src={item.artworkUrl100.replace("100x100", "600x600")} alt={item.trackName} className="w-96" />
                        <h2>{item.trackName}</h2>
                        <p>{item.artistName}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}