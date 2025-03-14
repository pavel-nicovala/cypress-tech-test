# sdet-frontend-test

## Running instructions


Clone the repository and run the following.

(recommended node version 16.18.0 or higher)

```
npm run-script pre-install
npm start
```

## Acceptance criteria

The product owner gave the developers in your team the following specifications to build an application:

-  The homepage should have a title matching `PokéDex!`
-  The text box will only accept alphabetical characters;
   - An error message will be shown reading `Invalid search term` otherwise.
- If a search yields no results, an error message should be shown with `Pokémon not found`.
- If a search returns a successful result, a list of valid results should be displayed
- After selecting a result, the user is taken to a results page with:
    - The Pokémon's name
    - A picture of the Pokémon
    - A description or the Pokémon
    - A Table of the following stats:
        - Pokédex number
        - Height
        - Weight
        - Type
        - Held Items(this field will be hidden if empty)
    - The evolution chain of the Pokémon, including the one selected.


The developers created a front-end application pointing to an established API as a first iteration for this, with a test framework already implemented. 
The website is able to be spun up as a locahost application on port 3000.
The objective is to ensure there is enough test coverage of an appropriate level, fix any flaky tests and report any bugs you might come across.

