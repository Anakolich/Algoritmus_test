"use strict";
/*let number = 5;
con leftBorderWidth = 1;
number = 10;
console.log(number);

alert("Danger!");*/

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");

console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const answer = prompt("Один из просмотренных последних фильмов?",""),
      reiting = +prompt("На сколько оцените его?",""),
      answer_2 = prompt("Один из просмотренных последних фильмов?",""),
      reiting_2 = +prompt("На сколько оцените его?","");


personalMovieDB.movies[answer] = reiting;
personalMovieDB.movies[answer_2] = reiting_2;

console.log(personalMovieDB);


