export async function getAddress(ip = '8.8.8.8') {
    const url = `https://ipgeolocation.abstractapi.com/v1/?api_key=b5559057214d4a0888deb9f47d90958d&ip_address=${ip}`;
        const responce = await fetch(url);
    return await responce.json()
}