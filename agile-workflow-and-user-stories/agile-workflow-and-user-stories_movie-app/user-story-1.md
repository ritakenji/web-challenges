# Movie Homepage

## Value Proposition

**As a** user <br>
**I want to** view a list of movies <br>
**so that** I can see the title, rating as well as image for each movie listed

## Description

![wireframe](./assets/scribble-movie-list.png)
**Landing page** for _Movie App_, where a list of movies show, displaying basic information on each movie.

## Acceptance Criteria

- Have a list of movie elements, displaying only 2 movies per row
- Homepage should have _Movie App_ as title
- Each movie element shows:
  - picture
  - rating
  - Title

## Tasks

- Create container/wrapper to contain all movie elements (main/wrapper/etc)
- Create a card component
- Each card will present an image, the title and the rating pertaining to each individual movie - use **dynamic routing** for this
- If movie DB is empty/couldn't be fetched, show error message for user
- Create Title component
