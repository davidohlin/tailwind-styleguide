<template>
	<div id="app">
		<h1>Hello world</h1>
		<backgroundColors :backgroundColors="backgroundColors" />
	</div>
</template>

<script>
// TODO
// This is generated content, don't import it like this.
import config from '../config.js'
import '../index.css'

import './assets/css/main.css'
//import getClasses from './utils/getClasses'

// Tailwind classes
import BackgroundColors from './components/classes/background-colors'

export default {
	data() {
		return {
			config: config
		}
	},
	components: {
		backgroundColors: BackgroundColors
	},
	methods: {
		getClasses(type, prefix) {
            var classes = [];
            var configClasses = this.config[type];

            for (var classSuffix in configClasses) {
                var value = configClasses[classSuffix];
                var numericValue = typeof value === 'string' ? value.match(/(\d+)/, value) : 0;

                classes.push({
                    type: type,
                    value: value,
                    class_prefix: prefix,
                    class_suffix: classSuffix,
                    numeric_value: parseFloat(value),
                    className: value.toString().length ? [prefix, classSuffix].join('-') : prefix
                });
            }

            return classes
        },

	},
	computed: {
		backgroundColors() { return this.getClasses('backgroundColors', 'bg') }
	}
}
</script>

<style>

</style>
