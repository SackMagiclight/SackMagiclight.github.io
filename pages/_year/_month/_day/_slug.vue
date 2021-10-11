<template>
    <div />
</template>

<script lang="ts">
import { defineComponent, useRoute, useRouter } from '@nuxtjs/composition-api'
export default defineComponent({
    setup() {
        const $router = useRouter()
        const $route = useRoute()
        const slug = $route.value.params.slug

        $router.push(`/blog/items/${slug}/`)
    },
})
</script>
