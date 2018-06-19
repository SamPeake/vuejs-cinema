<template>
    <div id="detail" v-if="movie">
      <movie-item :movie="movie.movie" :sessions="[]"></movie-item>
    </div>
</template>
<script>
    import MovieItem from './MovieItem.vue';

    export default {
      props: [ 'movies'],
      computed: {
          movie: function() {
            let movie = this.movies.find(movie => movie.id === this.$route.params.id);
            return movie ? movie : null;
          }
      },
      created: function() {
            console.log(this.$route.params.id);
      },
      components: {
        MovieItem
      }
    }
</script>
