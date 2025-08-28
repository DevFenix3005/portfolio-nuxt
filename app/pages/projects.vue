<template>
    <article class="prose dark:prose-invert">
        <ContentRenderer v-if="page" :value="page" />
    </article>
</template>
<script setup lang="ts">

const { data: page } = await useAsyncData(() => {
    return queryCollection('coreContent').path("/core/projects").first()
})

const { title, description } = page.value!


useHead({
    title
})

useSeoMeta({
    title,
    description
})


</script>