const fs = require('fs')
const path = require('path')
const tailwind = require('tailwindcss')
const postcss = require('postcss')

const configPath = '../tailwind/tailwind.config2.js'
const cssPath = '../tailwind/index.css'
const config = require(configPath)

fs.writeFileSync(
	'./config.js', 
	`export default ${JSON.stringify(config)}`
)

fs.readFile(cssPath, (err, css) => {
	postcss([tailwind(configPath)])
		.process(css, {from: cssPath})
		.then(result => {
			fs.writeFileSync(`./index.css`, result, (err) => true)
		})
})
