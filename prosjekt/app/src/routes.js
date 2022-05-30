import Home from './views/Home.vue';
import Biography from './views/Biography.vue';
import Contact from './views/Contact.vue';
import Exhibitions from './views/Exhibitions.vue';
import Works from './views/Works.vue';

export default [
	{ name: 'home', path: '/', component: Home },
	{ name: 'biography', path: '/biography', component: Biography },
	{ name: 'contact', path: '/contact', component: Contact },
	{ name: 'exhibitions', path: '/exhibitions', component: Exhibitions },
	{ name: 'works', path: '/works', component: Works }
];
