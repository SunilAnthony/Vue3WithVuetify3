const vuetify = Vuetify.createVuetify({
	theme: {
		themes: {
			myCustomTheme: {
				dark: false,
				colors: {
					background: '#FFFFFF',
					surface: '#FFFFFF',
					primary: '#ff0000',
					'primary-darken-1': '#3700B3',
					secondary: '#03DAC6',
					'secondary-darken-1': '#018786',
					error: '#B00020',
					info: '#2196F3',
					success: '#4CAF50',
					warning: '#FB8C00',
				}
			}
		}
	},
})

const vapp = Vue.createApp({
	mixins: mixinArray,
	data() {
		return {
			drawer: true,
			clipped: false,
			footerElev: 12,
			offsetTop: 0,
			user: null,
			icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
			menus: [
				{ icon: 'mdi-home', title: 'Home', route: '/' },
				{ icon: 'mdi-bell', title: 'Notifications', route: '/notification' },
				{ icon: 'mdi-message-text', title: 'Messages', route: '/message' },
				{ icon: 'mdi-phone-classic', title: 'Support', route: '/support' },
			],
			items: [
				{ title: 'Dashboard', icon: 'mdi-view-dashboard', route: '/dashboard' },
				{ title: 'Pofile', icon: 'mdi-account', route: '/profile' },
				{ title: 'Statistic', icon: 'mdi-account-cog', route: '/statistic' },
				{ title: 'Settings', icon: 'mdi-account-cog', route: '/settings' },
				{ title: 'About', icon: 'mdi-help-box', route: '/about' },
			],
		}
	},
	methods: {


		onScroll() {
			this.offsetTop = window.pageYOffset || document.documentElement.scrollTop;
		},
		toTop() {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth'
			});
		},

	},
	computed: {
		showFab() {
			return this.offsetTop > 60;
		},

	},

})

vapp.use(vuetify)

vapp.mount('#vapp');