import * as CRUD from './js/crud-provaider';
import { init } from './js/files-pages';


  CRUD.getUser( 1 ).then( console.log );

  CRUD.createUser({
      name: 'Cristopher',
      job: 'Developer'
  }).then( console.log() );

  CRUD.updateUser( 1, {
      name: 'Juanito',
      job: 'Deloper'
  }).then( console.log() );

 CRUD.deleteUser( 1 ).then( console.log() );

 
init();