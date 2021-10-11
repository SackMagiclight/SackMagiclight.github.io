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
    defineComponent,
    ref,
    useAsync,
    useContext,
} from '@nuxtjs/composition-api'
export default defineComponent({
    setup() {
        const $content = useContext().$content
        const articles = ref({})
        useAsync(async () => {
            const _articles = await $content('blog')
                .sortBy('createdAt', 'desc')
                .limit(1)
                .fetch()
            articles.value = _articles
        })
        return {
            articles,
        }
    },
})
</script>
