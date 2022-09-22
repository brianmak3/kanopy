# Welcome to the Kanopy Interview

## Instructions

For this interview, we want to see how you feel about working with a public API and developing a React app.

We will provide a list of some public APIs, feel free to choose one that interests you most and build an interface around it (with whatever features you want). We care more about functionality than UI--it doesn't have to look pretty.

You can use ANY outside resources--we want to see how you actually approach problems, not quiz you on memorization!

## Step 0: Create a branch

For example, `git checkout -b @hayden/interview`.

## Step 1: Create an app

We want you to initialize a React based app of your choosing. Here are some guides on how to create a react app from scratch! Feel free to use whatever starter fits you best.

- [Create Next App](https://nextjs.org/docs/api-reference/create-next-app)
- [Create React App](https://create-react-app.dev/)

## Step 2: Pick an API

At this step we'd like you to choose an API that you'd like to work with. We'll provide a list of APIs that we think are interesting below. Feel free to choose the one that interests you most.

### Public APIs

- [Star Wars](https://swapi.dev/)
- [Anime](https://docs.api.jikan.moe/)
- [Cocktail DB](https://www.thecocktaildb.com/api.php)
- [Pokemon API](https://pokeapi.co/docs/v2#resource-listspagination-section)

## Step 3: Query a list

Here we want you to query some type of list of data and display it in your app. For the above APIs, we recommend looking at these specific routes:

- Star Wars:
  - `https://swapi.dev/api/people`
  - `https://swapi.dev/api/people/:id`
- Anime:
  - `https://api.jikan.moe/v4/anime`
  - `https://api.jikan.moe/v4/anime/:id`
- Cocktail DB:
  - `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`
  - `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=id`
- Pokemon:
  - `https://pokeapi.co/api/v2/pokemon`
  - `https://pokeapi.co/api/v2/pokemon/:id`

## Step 4: Click into the details

We want you to allow the ability to click into the items on the previous list. This would be any of the specific `:id` routes listed above.

## Step 5: Put up a pull request

Open a PR on the repo! We don't care to much about the body, we just want to document your code so we can look at in the future!

THANK YOU FOR YOUR TIME!
