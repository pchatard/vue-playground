module.exports = {
	productionSourceMap: false,
	css: {
		loaderOptions: {
			sass: {
				additionalData: `
                @import "@/assets/styles/variables.scss";
                `,
			},
		},
	},
};
