<template>
    <BlogPosts v-slot="{ posts }" :limit="props.limit" blog-list-name="main-blog-list">
        <div v-for="post in posts" :key="post.path">
            <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
        </div>
    </BlogPosts>
</template>

<script setup lang="ts">
const props = defineProps({
    limit: {
        type: String,
        default: "-1"
    }
})
</script>