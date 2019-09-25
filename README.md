# liri-node-app

LIRI (Language Interpretation and Recognition Interface) is a command line Node.js app that takes in parameters and gives back data. LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies. 

### Node packages used

* [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
* [Axios](https://www.npmjs.com/package/axios) - used to retrieve data from the [OMDB API](http://www.omdbapi.com/) and the [Bands In Town API](https://www.artists.bandsintown.com)
* [Moment](https://www.npmjs.com/package/moment) - used to format the date
* [DotEnv](https://www.npmjs.com/package/dotenv) - used to set environmental variables

### How It Works

There are four different commands available: 
* `concert-this <artist/band name here>` 
* `movie-this <movie name here>` 
* `spotify-this <song name here>` 
* `do-this`

To run the app, the user must run the `liri` file in the command line followed by one of the four commands. 

### Command 1: Searching for concerts

Here is an example of using the `concert-this` command to search for Rammstein's concerts (`node liri concert-this rammstein`):

![](/assets/Concert-this.gif)

In case the user enters the `concert-this` command but does not specify a performer, the app will search for Lady Gaga's concerts by default. 

### Command 2: Searching for a song

Here is an example of using the `spotify-this` command to search for "In The End" by Linkin Park (`node liri spotify-this in the end`). 

![](/assets/Song.gif)

In case the user enters the `spotify-this` command but does not specify a song, the app will search for "Somewhere Over the Rainbow" by default.

### Command 3: Searching for a movie

Here is an example of using the `movie-this` command to search for the Last of the Mohicans movie (`node liri movie-this last of the mohicans`). 

![](/assets/Movie.gif)

In case the user enters the `movie-this` command but does not specify a movie, the app will search for "Mr. Nobody" by default.

### Command 4: Reading commands from a `.txt` file

Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

It should run `spotify-this` for Jack White, as follows the text in random.txt. By editing the text in `random.txt`, users can run either of the other two LIRI commands (`spotify-this` or `movie-this`) when entering `do-this`. 

![](/assets/do-this.gif)

Please note that the user must provide their own .env file and Spotify ID to run this app locally and search for songs. 
