<template>
    <div id="movie-list">
      <div v-for="movie in filteredMovies" class="movie.movie.Title">
      {{   movie.title }}
      </div>
    </div>
</template>
<script>
    import genres from '../util/genres.js';


    export default {

      
        props: [
          'genre',
          'time',
          'movies'
        ],
        methods: {
          moviePassesGenreFilter: function(movie) {
            if (!this.genre.length) {
              return true;
            } else {
              return this.genre.find(genre => movie.genre === genre);
            }
          }
        },
        computed: {
          filteredMovies: function() {
            return this.movies.filter(this.moviePassesGenreFilter);
          }
        }
      }
</script>
