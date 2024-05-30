import { createRouter, createWebHistory } from 'vue-router';
import DistanceConverter from '../pages/DistanceConverter.vue';
import TemperatureConverter from '../pages/TemperatureConverter.vue';
import WeightConverter from '../pages/WeightConverter.vue';

const routes = [
  {
    path: '/',
    redirect: '/distance'
  },
  {
    path: '/distance',
    component: DistanceConverter
  },
  {
    path: '/temperature',
    component: TemperatureConverter
  },
  {
    path: '/weight',
    component: WeightConverter
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
