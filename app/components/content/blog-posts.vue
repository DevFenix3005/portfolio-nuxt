<template>
    <slot :posts="posts">
        <section class="not-prose font-mono">
            <div class="column text-gray-400 text-sm">
                <div>date</div>
                <div>title</div>
            </div>
            <ul>
                <li v-for="post in posts" :key="post.path">
                    <NuxtLink :to="post.path" class="column group hover:bg-gray-100 dark:hover:bg-gray-800">
                        <div
                            :class="{ 'text-white group-hover:text-gray-100 dark:text-gray-900 dark:group-hover:text-gray-800': !post.displayYear, 'text-gray-400 dark:text-gray-500': post.displayYear }">
                            {{ post.year }} </div>
                        <div>{{ post.title }}</div>
                    </NuxtLink>
                </li>
            </ul>
        </section>
    </slot>
</template>

<script setup lang="ts">
const props = defineProps({
    limit: {
        type: String,
        default: null
    },
    blogListName: {
        type: String,
        default: "blog-list"
    }
})

useHead({
    title: "Blog"
})

const { data } = await useAsyncData(props.blogListName, () => {
    const limit = Number(props.limit);

    let query = queryCollection('blogContent')
        .select('id', 'title', 'path', "publisehdAt")
        .where("path", "<>", "/blog")
        .order('publisehdAt', 'DESC');
    console.log(limit)
    if (limit !== -1) {
        query = query.limit(limit);
    }

    return query.all()
})

const posts = computed(() => {
    if (!data.value) {
        return [];
    }
    let lastYear: number = 0;
    return data.value.map(post => {
        const year = new Date(post.publisehdAt).getFullYear();
        const displayYear = year !== lastYear;
        lastYear = year;
        return {
            "id": post.id,
            "title": post.title,
            "year": year,
            "path": post.path,
            "displayYear": displayYear
        };
    });

});

</script>

<style lang="css" scoped>
.column {
    @apply flex items-center space-x-8 py-2 border-b border-gray-200 dark:border-gray-700
}
</style>