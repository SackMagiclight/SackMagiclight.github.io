<template>
    <div class="container mx-auto">
        <Card
            v-for="(article, index) in articles"
            :key="index"
            :article="article"
        />
    </div>
</template>

<script lang="ts">
import {
    computed,
    defineComponent,
    ref,
    useContext,
    useFetch,
    useRoute,
} from '@nuxtjs/composition-api'
export default defineComponent({
    setup() {
        const $content = useContext().$content
        const $route = useRoute()
        const ym = computed(() => $route.value.params.ym)
        const ymStart = computed(() => new Date(ym.value + '-01'))
        const monthStart = computed(() => ymStart.value?.getTime())
        const monthEnd = computed(() =>
            new Date(
                ymStart.value?.getFullYear(),
                ymStart.value?.getMonth() + 1,
                0
            ).getTime()
        )

        const articles = ref({})
        useFetch(async () => {
            const _articles = await $content('blog')
                .where({
                    createdAt: {
                        $and: [
                            { $gte: monthStart.value },
                            { $lte: monthEnd.value },
                        ],
                    },
                })
                .sortBy('createdAt', 'desc')
                .fetch()
            articles.value = _articles
        })
        return {
            articles,
        }
    },
})
</script>
