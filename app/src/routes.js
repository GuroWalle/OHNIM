import Home from './views/Home.vue';
import Biography from './components/Biography.vue';
import Contact from './components/Contact.vue';
import Exhibitions from './components/Exhibitions.vue';
import Menu from './components/Menu.vue';
import Works from './components/Works.vue';

export default [
	{ name: 'home', path: '/', component: Home },
	{ name: 'biography', path: '/biography', component: Biography },
	{ name: 'contact', path: '/contact', component: Contact },
	{ name: 'exhibitions', path: '/exhibitions', component: Exhibitions },
	{ name: 'menu', path: '/menu', component: Menu },
	{ name: 'works', path: '/works', component: Works }
];
