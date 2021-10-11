<template>
    <div class="container mx-auto my-8">
        <Card :article="article" />
    </div>
</template>

<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content'
import {
    computed,
    defineComponent,
    useAsync,
    useContext,
    useMeta,
    useRoute,
} from '@nuxtjs/composition-api'
export default defineComponent({
    setup() {
        const { title, meta } = useMeta()
        const $content = useContext().$content
        const $route = useRoute()
        const slug = computed(() => $route.value.params.slug)
        const data = useAsync(async () => {
            const path = $route.value.path
            const domain = 'https://www.gaftalk.com'
            const val = (await $content(
                'blog',
                slug.value
            ).fetch()) as IContentDocument
            title.value = val.title
            meta.value = [
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: '',
                },
                {
                    hid: 'og:url',
                    property: 'og:url',
                    content: `${domain}/${path}`,
                },
                {
                    hid: 'og:image',
                    property: 'og:image',
                    content: `${val['og:image']}`,
                },
            ]

            return val
        })
        return {
            article: data,
        }
    },
    head: {},
})
</script>
