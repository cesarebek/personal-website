export const navigation = [
  { id: 0, route: 'Home', path: '/' },
  { id: 1, route: 'About', path: '/about' },
  { id: 2, route: 'Portfolio', path: '/portfolio' },
  { id: 3, route: 'Contact', path: '/contact' },
];

export const allProjects = [
  {
    id: 0,
    title: 'Netflix',
    category: 'films',
    tech: 'react',
    description:
      "The Nuxtflix project is a platform that returns info about all the world tv shows, movies and actors. It's insipired to the most famous streaming hub, Netflix.com! Enjoy the Live Demo!",
    gitLink: 'https://github.com/cesarebek/Nuxtflix',
    demo: 'https://nuxtflix.herokuapp.com',
    thumbnail:
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1940&q=80',
  },
  {
    id: 1,
    title: 'AirBnb',
    category: 'travel',
    tech: 'nuxt',
    description:
      'Did you ever booked an apartament using Air Bnb? Personally before the covid-19 period I was used to book all my trips with AirBnb, for this reason I decided to replicate their sweet Home Page. Enjoy the Live Demo!',
    gitLink: 'https://github.com/cesarebek/AirBnb',
    demo: 'https://nuxt-bnb.herokuapp.com',
    thumbnail:
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
  },
  {
    id: 2,
    title: 'Chill Music Player',
    category: 'music',
    tech: 'react',
    description:
      'Are you bored or tired? Some chill music is what you need to lose some bad vibes. The App is fully responsive on all devices and the experience is very chill! Try the live demo, Enjoy!',
    gitLink: '',
    demo: '',
    thumbnail:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: 3,
    title: 'Parapharmacy Online',
    category: 'medical',
    tech: 'vue',
    description:
      "Covid-19 was and still is a hard period... So I've decided to create something that could help people without going out their homes. This app uses an API created with Laravel, you can find the API project in the next project so download and try it yourself! By the way, this app includes user and admin authentication with all the products and orders managment by the administrator account.",
    gitLink: 'https://github.com/cesarebek/farmacia-online-front',
    demo: null,
    thumbnail:
      'https://www.giornaleadige.it/wp-content/uploads/2020/08/Farmacia-01-min-1.jpg',
  },
  {
    id: 4,
    title: 'eCommerce - API',
    category: 'ecommerce',
    tech: 'laravel',
    description:
      'A complete REST API based on all eCommerce features, build with Laravel and mySQL database (Eloquent ORM)',
    gitLink: 'https://github.com/cesarebek/farmacia-online-front',
    demo: null,
    thumbnail:
      'data:image/png;base64,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',
  },
  {
    id: 5,
    title: 'My Personal Website',
    category: 'me',
    tech: 'react',
    description:
      "Are you curious about me and especially about how this websites is built under the scenes? Ok you're in the right place, check out the GitHub page to know more about it! Feel free to choose the parts of code you like ;)!",
    gitLink: 'https://github.com/cesarebek/personal-website',
    demo: null,
    thumbnail:
      'https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: 6,
    title: 'Easy List',
    category: 'life',
    tech: 'react',
    description:
      "We are plenty of things to do. Why don't use this cute web app? You can signin or signup a new account and than note all your task so youl'll never forgot one!",
    gitLink: 'https://github.com/cesarebek/easy-list-v2',
    demo: null,
    thumbnail:
      'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80',
  },
];
