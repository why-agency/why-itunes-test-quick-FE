// fetch from external API
export async function getMusicData() {
    const res = await fetch('https://itunes.apple.com/search?term=focus&limit=25');

    if (!res.ok) {
        throw new Error('Failed to fetch music data');
    }

    return res.json();
}