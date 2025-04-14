const importAll = (r) => {
	const toolsImages = {};
	r.keys().forEach((key) => {
		const imageName = key.replace('./', '').replace(/\.\w+$/, '');
		toolsImages[imageName] = r(key);
	});
	return toolsImages;
};

export const ToolsImages = importAll(require.context('../skills-section', false, /\.(png|jpe?g|svg)$/));
