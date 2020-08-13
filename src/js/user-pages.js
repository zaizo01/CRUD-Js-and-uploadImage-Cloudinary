import { getUser } from './http-provaider';

const body = document.body;
let tbody;
let correlativo = 0;

const createHtml = () => {
    const html = `
   <div class="pt-6 pl-2 flex justify-center">
       <table class="max-w-4xl bg-white shadow-2xl">
           <thead class="bg-blue-600 text-white">
               <tr>
                   <th class="w-40 uppercase py-3 border-2 text-left pl-2">ID</th>
                   <th class="w-40 uppercase py-3 border-2 text-center">Email</th>
                   <th class="w-40 uppercase py-3 border-2 text-center">Name</th>
                   <th class="w-40 uppercase py-3 border-2 text-center">Avatar</th>
               </tr>
           </thead>
           <tbody>
           </tbody>
       </table>
   </div>`;

   const div = document.createElement('div');
   div.innerHTML = html;
   body.appendChild( div );
   tbody = document.querySelector('tbody');
};


const createRowUser = ( user ) => {

   correlativo ++;
   const html = `
   <td class="p-2 px-2 border-b-2 border-blue-400 font-semibold"> ${ correlativo } </td>
   <td class="p-2 px-2 border-b-2 border-blue-400 font-semibold"> ${ user.email  } </td>
   <td class="p-2 px-2 border-b-2 border-blue-400 font-semibold"> ${ user.first_name} ${ user.last_name } </td>
   <td class="p-2 px-2 border-b-2 border-blue-400 font-semibold pl-12">
       <img src="${ user.avatar }" alt="avatar" class="rounded-full w-16 h-16 ">
   </td>
    `;
    
    const tr = document.createElement('tr');
    tr.innerHTML = html;
    tbody.appendChild( tr );
};

export const init = async() => {

    createHtml();
    correlativo = 0;
    (await getUser()).forEach( createRowUser );
   
};