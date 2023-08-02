import { createRouter, createWebHistory } from 'vue-router';
import IndexRock from '@/pages/IndexRock'
import AboutRock from '@/pages/AboutRock'
import ConcertHalls from '@/pages/ConcertHalls'
import FaqRock from '@/pages/FaqRock'
import GenresRock from '@/pages/GenresRock'
import MusiciansRock from '@/pages/MusiciansRock'
import CartRock from "@/components/CartRock"
import AdminPanel from '@/pages/AdminPanel'
import Pagination from '@/pages/PaginationSS'

const routes = [
  {
    path: '/',
    name: 'IndexRock',
    component: IndexRock
  },
  {
    path: '/AboutRock',
    name: 'AboutRock',
    component: AboutRock
  },
  {
    path: '/ConcertHalls',
    name: 'ConcertHalls',
    component: ConcertHalls
  },
  {
    path: '/FaqRock',
    name: 'FaqRock',
    component: FaqRock
  },
  {
    path: '/GenresRock',
    name: 'GenresRock',
    component: GenresRock
  },
  {
    path: '/MusiciansRock',
    name: 'MusiciansRock',
    component: MusiciansRock
  },
  {
    path: '/Admin',
    name: 'AdminPanel',
    component: AdminPanel
  },
  {
    path: '/Pag',
    name: 'Pagination',
    component: Pagination
  },
  {
    path: '/CartRock',
    name: 'CartRock',
    component: CartRock
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;