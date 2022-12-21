async function getAlbums(userId) {
    try {
        const albums = await fetch(`https://json.medrocket.ru/albums?userId=${userId}`);
        return await albums.json();
    } catch(e) {
        throw new Error('AlbumApi error ', e);
    }
    
}