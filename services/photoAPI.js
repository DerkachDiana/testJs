async function getPhotos(albumId) {
    const photos = await fetch(`https://json.medrocket.ru/photos?albumId=${albumId}`);
    return await photos.json();
}