(() => {

  // función para obtener información de una película por Id
  function getMovieById( id: string ) {
      console.log({ id });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getMovieCastById( id: string ) {
      console.log({ id });
  }

  // funcion para obtener el bio del actor por el id
  function getActorBiographyById( id: string ) {
      console.log({ id });
  }
  
  // Crear una película

  interface Movie {
    title: string;
    description: string;
    rating: number;
    cast: string[]
  }

  function createMovie({ title, description, rating, cast }: Movie) {
      console.log({ title, description, rating, cast });
  }


  function checkFullName(fullName: string): boolean {
    return fullName === 'fernando';
  }
  // Crea un nuevo actor
  function createActor( fullName: string, birthdate: Date ): boolean {
      if ( checkFullName(fullName) ) return false;

      console.log('Crear actor: ', birthdate);
      return true;
  }

  const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
    if (isDead) return 1500;
    
    if (isSeparated) return 2500;
    
    if (isRetired) return 3000;

    return 4000;
  }
})();
