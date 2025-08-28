<template>
    <template v-if="page">
        <article
            class="prose dark:prose-invert max-w-none prose-pre:bg-white dark:prose-pre:bg-gray-800 prose-pre:text-gray-700 dark:prose-pre:text-gray-300">
            <div class="grid grid-cols-6 gap-16">
                <div v-bind:class="{ 'col-span-6 md:col-span-4': page?.toc, 'col-span-6': !page?.toc }">
                    <ContentRenderer v-if="page" :value="page" />
                </div>
                <div v-if="page?.toc" class="hidden md:col-span-2 md:block not-prose">
                    <aside class="sticky top-8">
                        <div class="font-semibold mb-2">
                            Table of Contents
                        </div>
                        <nav>
                            <TocLinks :links="page.body.toc?.links" :active-id="activeId" />
                        </nav>
                    </aside>
                </div>
            </div>
        </article>
    </template>
    <template v-else>
        <h1 class="text-3xl font-bold mb-3">Page Not Found (404)</h1>
        <p class="text-sm text-gray-500 dark:text-gray-700">Oops! The content you're looking for doesn't exist.</p>
        <p class="text-sm text-gray-500 dark:text-gray-700">Path: {{ route.path }}</p>
        <NuxtLink to="/blog">Go back home</NuxtLink>
    </template>
</template>
<script setup lang="ts">
const activeId = ref("");
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
    return queryCollection('blogContent').path(route.path).first()
})

if (page?.value) {
    const { title, description } = page.value

    useHead({
        title
    })

    useSeoMeta({
        title,
        description
    })

    onMounted(() => {
        let elements: NodeListOf<Element>;
        const callback = (entries: IntersectionObserverEntry[]) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    activeId.value = entry.target.id as any
                    break;
                }
            }
        }

        const observer = new IntersectionObserver(callback, {
            root: null,
            threshold: 0.5
        });
        setTimeout(() => {
            elements = document.querySelectorAll("h2, h3")
            for (const element of elements) {
                observer.observe(element);
            }
        }, 150);

        onBeforeUnmount(() => {
            console.log("OnBeforeUnmount!");
            for (const element of elements) {
                observer.unobserve(element);
            }
        });
    });

}





</script>