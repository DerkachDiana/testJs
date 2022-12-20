async function getAlbums(userId) {
    const albums = await fetch(`https://json.medrocket.ru/albums?userId=${userId}`);
    return await albums.json();
}