<template>
    <div class="container mx-auto">
        <Card :article="article" />
    </div>
</template>

<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content'
import {
    computed,
    defineComponent,
    ref,
    useContext,
    useFetch,
    useMeta,
    useRoute,
} from '@nuxtjs/composition-api'
export default defineComponent({
    setup() {
        const { title, meta } = useMeta()
        const $content = useContext().$content
        const $route = useRoute()
        const slug = computed(() => $route.value.params.slug)
        const domain = 'https://www.gaftalk.com'
        const article = ref({})
        useFetch(async () => {
            const _article = (await $content(
                'blog',
                slug.value
            ).fetch()) as IContentDocument
            article.value = _article
            title.value = _article.title
            meta.value = [
                {
                    hid: 'description',
                    property: 'description',
                    content: _article['og:description'] || 'いろいろなこと',
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: _article['og:description'] || 'いろいろなこと',
                },
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: `${_article.title}`,
                },
                {
                    hid: 'og:url',
                    property: 'og:url',
                    content: `${domain}/blog/items/${slug.value}`,
                },
                {
                    hid: 'og:image',
                    property: 'og:image',
                    content: `${_article['og:image']}`,
                },
                {
                    hid: 'twitter:card',
                    property: 'twitter:card',
                    content: `summary`,
                },
            ]
        })
        return {
            article,
        }
    },
    head: {},
})
</script>
