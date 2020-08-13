import { getJoke } from './http-provaider';

const body = document.body;
let btnOtherJoke, olListJoke;

const createJokesHtml = () => {

    const html = `
    <div class="pl-6 pt-3">
        <p class="font-semibold text-3xl pb-2">Chuck Norris Jokes</p>
        <button class="bg-indigo-500 hover:bg-indigo-600 text-xl text-white py-2 px-6 rounded">Other joke</button>
        <ol class="list-decimal text-xl pl-4 pt-4"></ol>
    </div> `;

    const divJokes     = document.createElement('div');
    divJokes.innerHTML = html;
    body.append( divJokes );

};

const events = () => {

    olListJoke   = document.querySelector('ol');
    btnOtherJoke = document.querySelector('button');

    btnOtherJoke.addEventListener('click', async() => {

        btnOtherJoke.disabled = true;
        drawJoke( await getJoke() );
        btnOtherJoke.disabled = false;
    }); 
};


const drawJoke = ( joke ) => {

    const olItem     = document.createElement('li');
    olItem.innerHTML = `${ joke.value }`;
    olListJoke.append( olItem );

};


export const init = () => {
    createJokesHtml();
    events();
};