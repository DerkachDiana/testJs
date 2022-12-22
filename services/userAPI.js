async function getUsers() {
    try {
        const users = await fetch('https://json.medrocket.ru/users/');
        
        return await users.json();
    } catch (e) {
        throw new Error('userApi error ', e);
    }
}
