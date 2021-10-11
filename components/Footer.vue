<template>
    <div class="container w-9/12 mx-auto py-4">
        <div class="flex flex-col">
            <h2>記事</h2>
            <div class="flex text-sm mx-2">
                <div class="flex flex-wrap">
                    <div v-for="(yearMonth, index) of yearMonths" :key="index">
                        <nuxt-link
                            :to="`/blog/ym/${yearMonth}`"
                            class="mx-2 text-blue-500 whitespace-nowrap"
                            >{{ yearMonth }}</nuxt-link
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
                            class="underline mx-2"
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
                            class="underline mx-2"
                            >twitter</a
                        >
                    </div>
                    <div>
                        <a
                            href="https://github.com/SackMagiclight"
                            class="underline mx-2"
                            >github</a
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, useAsync, useContext } from '@nuxtjs/composition-api'
import { groupBy } from 'lodash'
export default defineComponent({
    setup() {
        const $content = useContext().$content
        const data = useAsync(async () => {
            const articles = (await $content('blog')
                .only(['createdAt', 'slug'])
                .fetch()) as unknown as { createdAt: String }[]
            const groups = groupBy(articles, (item) => {
                const strs = item.createdAt.split('-')
                return `${strs[0]}-${strs[1]}`
            })
            const result = Object.keys(groups).sort().reverse()
            return { yearMonths: result }
        })
        return {
            yearMonths: data.value?.yearMonths,
        }
    },
})
</script>
