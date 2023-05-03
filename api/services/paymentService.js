import dotenv from "dotenv";
dotenv.config();

const getWompiToken = async () => {
    const url = process.env.WOMPI_TOKEN_ENDPOINT;
    const values = {
        grant_type: 'client_credentials',
        client_id: process.env.CLIENT_ID_WOMPI,
        client_secret: process.env.CLIENT_SECRET,
        audience: 'wompi_api'
    }

    const formData = new FormData();
    for (const key in values) {
        formData.append(key, values[key])
    }

    const data = new URLSearchParams(formData)
    try {
        const getToken = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: data
        });
        const res = await getToken.json();
        return {tokenType: res.token_type, accessToken: res.access_token}
        
    } catch (error) {
        console.log('error', error);
    }
}

getWompiToken();