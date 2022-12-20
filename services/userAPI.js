async function getUsers() {
    const users = await fetch('https://json.medrocket.ru/users/');
    return await users.json();
}
