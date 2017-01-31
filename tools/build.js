({
	appDir:'../www',
	dir:'../www-build',
	mainConfigFile:'../www/scripts/lib/config.js',
	modules:[
		{
			name:'config',
			include:['require','jquery','main','main2']
		}
		// {
		// 	name:'modules/main',
		// 	include:['modules/main'],
		// 	exclude:['config']
		// },
		// {
		// 	name:'modules/main2',
		// 	include:['modules/main2'],
		// 	exclude:['config']
		// }
	],
	// paths:{
	// 	jquery:'empty:'
	// },
	optimize:'uglify2',
	optimizeCss:'standard',
	removeCombined:true,
	preserverLicenseComments:true
        
})