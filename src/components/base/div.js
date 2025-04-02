const div = {
	functional: true,
	render(h, context) {
		const {
			props,
			data,
			children
		} = context
		let options = {
			props
		}
		for (let name in data) {
			options[name] = data[name]
		}
		return h('div', options, children)
	},
}
export default div