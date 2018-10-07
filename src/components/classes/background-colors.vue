<script>
export default {
    name: 'backgroundColors',
    props: {
        backgroundColors: {
            type: Array
        }
    }
}
</script>

<template>
    <div v-if="backgroundColors.length">
        <div class="twsg-flex twsg-justify-between twsg-mt-8 twsg-mb-4">
            <h2>Background Colours</h2>
            <!-- <tw-modules module="backgroundColors" :config="config"></tw-modules> -->
        </div>

        <div class="twsg-font-mono twsg-text-grey-darker twsg-mb-6">.bg-{size}</div>

        <div class="twsg-flex twsg-flex-wrap">
            <div v-for="bg in backgroundColors" class="twsg-pr-8 twsg-mb-4 twsg-w-1/2 sm:twsg-w-1/4 md:twsg-w-1/6">
                <div class="twsg-border twsg-border-light-grey twsg-w-full twsg-h-24" :class="[bg.className]" @click="$emit('toggleDemoClass', bg)"></div>
                <div class="twsg-class-text twsg-text-center">
                    <!-- {{ bg.class_prefix }}- -->
                    <div class="twsg-text-black">{{ bg.class_suffix }}</div>
                    <div class="twsg-text-grey twsg-font-mono">{{ bg.value }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
