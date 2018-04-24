var component = {
	props:['componentdata', 'index', 'view', 'area', 'isactive']
}

module.exports = function(config){
	return $.extend(true, {}, component, config)
}
