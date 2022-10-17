/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html"],
	theme: {
		extend: {
			colors: {
				paleBlue: "hsl(225, 100%, 94%)",
				brightBlue: "hsl(245, 75%, 52%)",
				verypaleBlue: "hsl(225, 100%, 98%)",
				desaturatedBlue: "hsl(224, 23%, 55%)",
				darkBlue: "hsl(223, 47%, 23%)",
			},
			fontFamily: {
				redhat2: "Red Hat Display",
			},
			boxShadow: {
				"3xl": "0 25px 20px -20px hsl(245, 75%, 52%)",
			},
			screens: {
				iphonese: "430px",
			},
		},
	},
	plugins: [],
};
