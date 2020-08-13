import { uploadImage } from "./http-provaider";

const body = document.body;
let inputFile, imgPicture;

const createInputFileHtml = () => {
    const html = `
    <div class="w-screen h-screen flex justify-center items-center">
       <div class="h-64 w-1/3 bg-white rounded">
            <label class="font-semibold text-xl px-8">Upload image</label>
            <input type="file" accept="image/jpeg, image/png" class="px-8">
            <img id="foto" src="" alt="image" class="w-40 h-40 px-8 pt-4">
       </div>
   </div>
    `;
    const div = document.createElement('div');
    div.innerHTML = html;
    body.append(div);

    inputFile  = document.querySelector('input');
    imgPicture = document.querySelector('#foto');
};

const events = () => {
    inputFile.addEventListener('change', (event) => {
        const file = event.target.files[0];
        uploadImage( file ).then( url => imgPicture.src = url );
    })
};


export const init = () => {
    createInputFileHtml();
    events();
};