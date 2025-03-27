/*

// **** Basic

// Step 1 - list all films

{
  allFilms {
    films {
      title
      director
      releaseDate
    }
  }
}


// Step 2 - Get the name of a specific character using their unique ID.

{
  allPeople {
    people {
      name
      id
    }
  }
}


// Step 3 - Get the names of the first 5 planets in the Star Wars universe.

{
  allPlanets(first: 5) {
    planets {
      id
      name
    }
  }
}


// **** Intermediate 

// Step 1 - For each of the first 5 characters, list the names of starships they've piloted.

{
  allPeople(first: 5) {
    people {
      id
      name
      starshipConnection {
        starships {
          id
          name
        }
      }
    }
  }
}


// Step 2 - Retrieve names and languages of 5 species.

{
  allSpecies(first: 5) {
    species {
      name
      language
    }
  }
}


// Step 3 - Query for the names and climates of 5 planets.

{
  allPlanets (first: 5) {
    planets {
      name
      climates
    }
  }
}


// Step 4 - Get names and cost in credits for 3 vehicles.

{
  allVehicles(first: 5) {
    vehicles {
      name
      costInCredits
    }
  }
}


// Advanced

// Step 1 - List all characters appearing in a given film by ID.

{
  film(id: "ZmlsbXM6MQ==") {
    characterConnection {
      characters {
        name
      }
    }
  }
}


// Step 2 - Find characters that appear in more than one film.

{
  allPeople {
    people {
      name
      filmConnection {
        totalCount
      }
    }
  }
}


// Step 3 - Calculate the total number of characters across all films.

{
  allFilms {
    films {
      characterConnection {
        totalCount
      }
    }
  }
}


// Complex

// Step 1 - Compile a full profile for a given character, including their films, starships, and homeworld.

{
  person(id: "cGVvcGxlOjQ=") {
    name
    id
    filmConnection {
      films {
        title
        id
      }
    }
    homeworld {
      name
      id
    }
    starshipConnection {
      starships {
        name
        id
      }
    }
  }
}


// Step 2 - Query the first 5 characters, including the name and population of their homeworld.

{
  allPeople(first: 5) {
    people {
      name
      id
      homeworld {
        name
        population
      }
    }
  }
}


// Step 3 - For the first 3 vehicles, list their names, pilots, and the species of those pilots.

{
  allVehicles(first: 3) {
    vehicles {
      name
      pilotConnection {
        pilots {
          name
          species {
            name
          }
        }
      }
    }
  }
}


// Step 4 - For the first 3 films, list all related characters, planets, and starships.

{
  allFilms(first: 3) {
    totalCount
    films {
      characterConnection {
        characters {
          name
        }
      }
      planetConnection {
        planets {
          name
        }
      }
      starshipConnection {
        starships {
          name
        }
      }
    }
  }
}

*/