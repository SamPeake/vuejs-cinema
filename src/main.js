import './style.scss';
import Vue from 'vue';
import genres from './util/genres.js';

import MovieList from './components/MovieList.vue';
import MovieFilter from './components/MovieFilter.vue';

import VueResource from 'vue-resource';
Vue.use(VueResource);

import moment from 'moment-timezone';
moment.tz.setDefault("UTC");
Object.defineProperty(Vue.prototype, '$moment', { get: function() {
  return this.$root.moment; } });

import { checkFilter } from './util/bus';
const bus = new Vue();
Object.defineProperty(Vue.prototype, '$bus', { get: function() {
    return this.$root.bus;
  }
});

new Vue({
  el: '#app',
  data: {
    genre: [],
    time: [],
    movies: [],
    moment,
    day: moment(),
    bus
  },
  components: {
    MovieList,
    MovieFilter
  },
  created: function() {
    this.$http.get('/api').then(response => {
      this.movies = response.data;
    });
    this.$bus.$on('check-filter', checkFilter.bind(this));
  }
});
