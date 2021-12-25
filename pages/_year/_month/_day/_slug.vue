<template>
    <div />
</template>

<script lang="ts">
import { defineComponent, useMeta } from '@nuxtjs/composition-api'
export default defineComponent({
    setup() {
        const { script } = useMeta()
        script.value = [
            {
                src: '/redirect.js'
            }
        ]
    },

    head: {},
})
</script>
