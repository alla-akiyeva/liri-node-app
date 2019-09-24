// Package to set environmental variables
require("dotenv").config()

var keys = require("./keys.js")
var moment = require("moment")
var spotify = new Spotify(keys.spotify)
var fs = require("fs") // for reading files

var cmd = process.arg[2];

var term = process.argv.slice(3).join("+");

function findConcert() {

}

function findSong() {
    
}

function findMovie() {
    
}

function txtf() {
    
}

function condition() {
    switch (cmd) {
        case "concert-this":
            console.log("Searching for concerts...");
            findConcert(term);
        break;
        case "spotify-this-song":
            console.log("Searching for a song...");
            findSong(term);
        break;
        case "movie-this":
            console.log("Searching for a movie...");
            findMovie(term);
        break;
        case "do-what-it-says":
            txtf();
        break;
        default:
            console.log("Please search for a concert, show or movie!\nAvailable commands: \n  concert-this <artist/band name here> \n  movie-this <movie name here> \n  spotify-this-song <song name here> \n  do-what-it-says");
        break;
    }
}

condition();