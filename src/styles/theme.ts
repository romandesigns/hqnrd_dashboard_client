export const theme = (palette: string) => {
	return {
		app: {
			bg_color: `var(--${palette}-body-bg)`,
			shadow: `var(--${palette}-shadow)`,
			color_primary: `var(--${palette}-color-primary)`,
			color_secondary: `var(--${palette}-color-secondary)`,
			base: `var(--${palette})`,
			border_color: `var(--${palette}-border-color)`,
		},
		appNavigation: {
			background_color: `var(--app-navigation-${palette}-bg)`,
		},
	};
};
