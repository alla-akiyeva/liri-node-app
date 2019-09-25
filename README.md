# liri-node-app

A back-end application that sends AJAX requests to three different APIs. Users can search for movies, songs or their favorite band or singer's concerts.

### How It Works

There are four different commands available: 
* `concert-this <artist/band name here>` 
* `movie-this <movie name here>` 
* `spotify-this <song name here>` 
* `do-this`

To run the app, the user run the `liri` file in the command line followed by one of the four commands. 

Here is an example of using the `concert-this` command to search for Rammstein's concerts:

![](/assets/Concert-this.gif)

In case the user enters the `concert-this` command but does not specify a performer, the app will search for Lady Gaga's concerts by default. 

Here is an example of using the `spotify-this` command to search for the song "In The End" by Linkin Park. 

![](/assets/Song.gif)

In case the user enters the `spotify-this` command but does not specify a song, the app will search for "Somewhere Over the Rainbow" by default.

Here is an example of using the `movie-this` command to search for the Last of the Mohicans movie. 

![](/assets/Movie.gif)

In case the user enters the `movie-this` command but does not specify a movie, the app will search for "Mr. Nobody" by default.

Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

It should run `spotify-this` for Jack White, as follows the text in random.txt. By editing the text in `random.txt`, users can run any of the other two LIRI commands (`spotify-this` or `movie-this`) by entering `do-this`. 

![](/assets/do-this.gif)

Please note that, if downloading this app and running it locally, the user must provide their own .env file and Spotify ID. 

### Built With
* Node.js 
* [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
* [OMDB API](http://www.omdbapi.com/)
* [Bands In Town API](https://www.artists.bandsintown.com). 
