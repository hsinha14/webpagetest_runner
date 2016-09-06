module.exports ={
	"server": "http://localhost:8888",
	"options": {
	    location: 'Local-WPTDriver:Chrome',
	    runs: 1
	},
	"test" : [
		{	
			"url":"http://www.marksandspencer.com/c/flowers-and-gifts",
			"options":{runs:1}
		},
		{	
			"url":"https://www.marksandspencer.com/"
		}
	],
	"minute": 01
}