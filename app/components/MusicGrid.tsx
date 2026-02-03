import { getMusicData } from "@/lib/api";



export default async function MusicGrid() {
    const musicData = await getMusicData();
    console.log(musicData);

    return (
        <div className="font-sans h-dvh w-full px-8">

            <h1>Search Results</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {musicData.results.map((item: any) => (
                    <div
                        key={item.trackId ?? item.collectionId}
                        className="bg-white rounded-2xl shadow-md overflow-hidden 
                       hover:shadow-xl hover:-translate-y-1 transition duration-300"
                    >
                        <img src={item.artworkUrl100.replace("100x100", "600x600")} alt={item.trackName} className="w-96" />
                        <div className="p-4">
                            <h3 className="text-sm text-gray-500">Genre: {item.primaryGenreName}</h3>
                            <h1 className="font-semibold text-lg leading-tight">Artist: {item.artistName}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}