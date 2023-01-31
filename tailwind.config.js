module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			container: {
				center: true,
				padding: "30px",
			},
			colors: {
				primary: "#5BB5BB",
				para: "#5A5A5A",
			},
			lineHeight: {
				title: "48px",
			},
			spacing: {
				40: "40px",
			},
		},
		fontSize: {
			title: "39px",
			'lg': '16px',
		},
		fontFamily: {
			sans: ["Poppins", "sans-serif"],
		},
	},
	plugins: [],
};
