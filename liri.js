// Package to set environmental variables
require("dotenv").config()

var axios = require("axios");
var moment = require("moment")
var Spotify = require("node-spotify-api")
var fs = require("fs") // for reading files

// Importing key data from another file
var keys = require("./keys.js")

// Reading user input
var cmd = process.arg[2];
var term = process.argv.slice(3).join("+");

// Bands in Town API
function findConcert() {
    var queryURL = `https://rest.bandsintown.com/artists/${term}/events?app_id=codingbootcamp`; 
    axios.get(queryURL).then(function (response) {
        for (var i=0; i < response.data.length; i++) {
            console.log("--------------");
            console.log("Venue name: " + response.data[i].venue.name);
            console.log("Location: " + response.data[i].venue.city + ", " + response.data[0].venue.region);
            console.log("Date: " + moment(response.data[i].datetime).format('MM/DD/YYYY'));
            console.log("--------------");
        }
    }).catch(function (erro) {
        console.log(error);
    });
}

// Spotify API
function findSong() {
    var spotify = new Spotify (keys.spotify);
    spotify.search({type: 'track', query: term })
    .then(function (response) {
        var song = response.tracks.items[0];
        console.log("--------------");
        console.log("Artist(s): " + song.artists[0].name);
        console.log("Song's name: " + song.name);
        console.log("Spotify link: " + song.external_urls.spotify);
        console.log("Album: " + song.album.name);
        console.log("--------------");
    }).catch(function (error) {
        console.log(error);
    })
}

// MDb API call
function findMovie() {
    var queryURL = `http://www.omdbapi.com/?apikey=d690e4f5&t=${term}`;
    axios.get(queryURL).then(function (response) {
        
    })
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