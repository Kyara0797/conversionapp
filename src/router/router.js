import { createRouter, createWebHistory } from 'vue-router';
import DistanceConverter from './views/DistanceConverter.vue';
import TemperatureConverter from './views/TemperatureConverter.vue';
import WeightConverter from './views/WeightConverter.vue';

const routes = [
  { path: '/', redirect: '/distance' },
  { path: '/distance', component: DistanceConverter },
  { path: '/temperature', component: TemperatureConverter },
  { path: '/weight', component: WeightConverter }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
