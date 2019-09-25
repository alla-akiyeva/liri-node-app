# liri-node-app

A back-end application that sends AJAX requests to three different APIs. Users can search for movies, songs or their favorite band or singer's concerts.

### How It Works

There are four different commands available: 
* `concert-this <artist/band name here>` 
* `movie-this <movie name here>` 
* `spotify-this <song name here>` 
* `do-this`

To run the app, the user run the `liri` file in the command line followed by one of the four commands. 
Here is an example of searching for Rammstein's concerts:
![](/assets/Concert-this.gif)

In case the user enters the `concert-this` command but does not specify a performer, the app will search for Lady Gaga's concerts by default. 

![](/assets/Song.gif)

![](/assets/Movie.gif)

![](/assets/do-this.gif)

Please note that, if downloading this app and running it locally, the user must provide their own .env file and Spotify ID. 

### Built With
* Node.js 
* [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
* [OMDB API](http://www.omdbapi.com/)
* [Bands In Town API](https://www.artists.bandsintown.com). 
