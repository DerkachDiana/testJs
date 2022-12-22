async function getPhotos(albumId) {
    try {
        const photos = await fetch(`https://json.medrocket.ru/photos?albumId=${albumId}`);
        
        return await photos.json();
    } catch(e) {
        throw new Error('photoApi error ', e);
    }
    
}