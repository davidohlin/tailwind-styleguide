<template>
	<div id="app">
		<div class="twsg-container twsg-mx-auto twsg-mt-16">
			<div class="twsg-flex twsg-flex-wrap twsg-items-stretch twsg--mx-4">
				<div class="twsg-w-1/6 twsg-px-4">
					<div class="twsg-sticky" style="top: 1rem">
						<navigation :config="this.config" />
					</div>
				</div>
				<div class="twsg-w-5/6 twsg-px-4">
				<h1>Hello world</h1>
				<backgroundColors :backgroundColors="backgroundColors" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// TODO
// This is generated content, don't import it like this.
import config from '../config.js'
import '../index.css'

import './assets/css/main.css'
//import getClasses from './utils/getClasses'

import Navigation from './components/navigation'

// Tailwind classes
import BackgroundColors from './components/classes/background-colors'

export default {
	data() {
		return {
			config: config
		}
	},
	components: {
		navigation: Navigation,
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
