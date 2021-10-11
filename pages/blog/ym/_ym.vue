<template>
    <div class="container mx-auto my-8">
        <Card
            v-for="(article, index) in articles"
            :key="index"
            :article="article"
        />
    </div>
</template>

<script lang="ts">
import {
    defineComponent,
    useAsync,
    useContext,
    useRoute,
} from '@nuxtjs/composition-api'
export default defineComponent({
    setup() {
        const $content = useContext().$content
        const $route = useRoute()
        const ym = $route.value.params.ym
        const ymStart = new Date(ym + '-01')
        const monthStart = ymStart.getTime()
        const monthEnd = new Date(
            ymStart.getFullYear(),
            ymStart.getMonth() + 1,
            0
        ).getTime()
        const data = useAsync(async () => {
            const articles = await $content('blog')
                .where({
                    createdAt: {
                        $and: [{ $gte: monthStart }, { $lte: monthEnd }],
                    },
                })
                .sortBy('createdAt', 'desc')
                .fetch()
            return { articles }
        })
        return {
            articles: data.value?.articles,
        }
    },
})
</script>
