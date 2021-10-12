<template>
    <div class="items-top min-h-screen bg-gray-100 sm:items-center sm:pt-0">
        <Header />
        <Nuxt />
        <Footer :year-months="yearMonths" />
    </div>
</template>

<script lang="ts">
import {
    defineComponent,
    useFetch,
    useContext,
    ref,
} from '@nuxtjs/composition-api'
import groupBy from 'lodash/groupBy'
export default defineComponent({
    setup() {
        const $content = useContext().$content
        const yearMonths = ref()
        useFetch(async () => {
            const articles = (await $content('blog')
                .only(['createdAt', 'slug'])
                .fetch()) as unknown as { createdAt: String }[]
            const groups = groupBy(articles, (item) => {
                const strs = item.createdAt.split('-')
                return `${strs[0]}-${strs[1]}`
            })
            const _yearMonths = Object.keys(groups).sort().reverse()
            yearMonths.value = _yearMonths
        })
        return {
            yearMonths,
        }
    },
})
</script>
