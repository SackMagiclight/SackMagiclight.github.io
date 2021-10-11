<template>
    <div class="container mx-auto my-4">
        <Card
            v-for="(article, index) in articles"
            :key="index"
            :article="article"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent, useAsync, useContext } from '@nuxtjs/composition-api'
export default defineComponent({
    setup() {
        const $content = useContext().$content
        const data = useAsync(async () => {
            const articles = await $content('blog')
                .sortBy('createdAt', 'desc')
                .limit(1)
                .fetch()
            return { articles }
        })
        return {
            articles: data.value?.articles,
        }
    },
})
</script>
