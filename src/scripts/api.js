const url = "https://openmusic-fake-api.onrender.com/api/musics";

export async function getAllAlbums() {
    const response = await fetch(url);
    
    const data = await response.json()
    return data
}

