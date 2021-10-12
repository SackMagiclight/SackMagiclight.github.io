<template>
    <div class="container w-9/12 mx-auto py-4">
        <div class="flex flex-col">
            <h2>記事</h2>
            <div class="flex text-sm mx-2">
                <div class="flex flex-wrap">
                    <div v-for="(yearMonth, index) of yearMonths" :key="index">
                        <a
                            :href="`/blog/ym/${yearMonth}/`"
                            class="block p-2 text-blue-700 whitespace-nowrap"
                            >{{ yearMonth }}</a
                        >
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col mt-2">
            <h2>BMS</h2>
            <div class="flex text-sm mx-2">
                <div class="flex flex-wrap">
                    <div>
                        <a
                            href="https://www.gaftalk.com/1to24_2nd/"
                            class="block underline p-2"
                            >1to24 2nd</a
                        >
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col mt-2">
            <h2>その他</h2>
            <div class="flex text-sm mx-2">
                <div class="flex flex-wrap">
                    <div>
                        <a
                            href="https://twitter.com/sack_magiclight"
                            class="block underline p-2"
                            >twitter</a
                        >
                    </div>
                    <div>
                        <a
                            href="https://github.com/SackMagiclight"
                            class="block underline p-2"
                            >github</a
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
    props: {
        yearMonths: { type: Array, default: () => [] },
    },
})
</script>
