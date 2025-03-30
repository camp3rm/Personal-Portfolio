const importAll = (r) => {
	const toolsIcons = {};
	r.keys().forEach((key) => {
		const iconName = key.replace('./', '').replace(/\.\w+$/, '');
		toolsIcons[iconName] = r(key);
	});
	return toolsIcons;
};

export const ToolsIcons = importAll(require.context('../skills-section', false, /\.(png|jpe?g|svg)$/));
