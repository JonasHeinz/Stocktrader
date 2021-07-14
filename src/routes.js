import Home from './components/Home.vue';
import Portfolio from './components/portfolio/Portfolio.vue';
import Stockmarket from './components/stockmarket/Stockmarket.vue';

export const routes =[
    {path: '/', component: Home},
    {path: '/portfolio', component: Portfolio},
    {path: '/stockmarket', component: Stockmarket}
];