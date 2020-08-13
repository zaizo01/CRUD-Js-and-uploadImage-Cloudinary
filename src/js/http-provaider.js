const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const urlUser = 'https://reqres.in/api/users?page=2';

//CloudDinary
const cloudPreset = 'klkconklk';
const cloudUrl    = 'https://api.cloudinary.com/v1_1/dzrokq2oe/upload';

const getJoke = async() => {

    try {
        const resp = await fetch( jokeUrl );
        if( !resp.ok  ) throw ('No se pudo realzar la peticion');
        const { icon_url, id, value } = await resp.json();
        return { icon_url, id, value };
    }

    catch( err ) {
        throw err    
    }
}


const getUser = async() => {

    const resp = await fetch( urlUser );
    const { data:users } = await resp.json();
    return users; 
}

const uploadImage = async( uploadFile ) => {
    const form = new FormData();
    form.append('upload_preset', cloudPreset );
    form.append('file', uploadFile );

    try {
        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: form
        });

        if( resp.ok ){
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        }
        else{
            throw await resp.json();
        }


    } catch (error) {
        throw error;
    }
}


export {
    getJoke,
    getUser,
    uploadImage
}