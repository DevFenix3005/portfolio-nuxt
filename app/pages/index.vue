<template>
    <article class="prose dark:prose-invert prose-h1:text-2xl">
        <ContentRenderer v-if="page" :value="page" />
    </article>
</template>
<script setup lang="ts">

const { data: page } = await useAsyncData(() => {
    return queryCollection('coreContent').path("/core").first()
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