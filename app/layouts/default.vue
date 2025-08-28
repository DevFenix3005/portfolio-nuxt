<template>
    <div class="container mx-auto max-w-4xl">
        <header class="flex justify-between items-start md:items-center mt-5">

            <div class="flex items-center md:space-x-12">
                <div class="hidden md:block">
                    <NuxtLink to="/" class="text-xl font-semibold p-2 hover:bg-gray-200 dark:hover:bg-gray-800">Roberto D. Cazarin</NuxtLink>
                </div>
                <Menu />
            </div>

            <ClientOnly>
                <ColorSelector />
            </ClientOnly>

        </header>

        <main class="p-2 mt-10">
            <slot />
        </main>

    </div>
</template>

<script setup>

useSeoMeta({
    description: 'Portfolio website showcasing Robert\'s projects, skills, and experience as a fullstack developer specializing in Angular, Spring Boot, and modern web technologies.',
    ogTitle: 'Robert | Fullstack Developer Portfolio',
    ogDescription: 'Explore Robert\'s portfolio — featuring web, mobile, and backend projects with clean code, performance, and innovation.',
    ogImage: 'https://your-domain.com/images/portfolio-preview.png',
    ogUrl: 'https://your-domain.com',
    twitterTitle: 'Robert | Fullstack Developer Portfolio',
    twitterDescription: 'Check out Robert\'s projects and skills as a fullstack developer specializing in Angular, Spring Boot, and cutting-edge web technologies.',
    twitterImage: 'https://your-domain.com/images/portfolio-preview.png',
    twitterCard: 'summary_large_image'
})

useHead({
    titleTemplate: '%s - Roberto D. Cazarin | Fullstack Developer Portfolio',
    htmlAttrs: {
        lang: 'en'
    },
    link: [
        {
            rel: 'icon',
            type: 'image/png',
            href: '/favicon.png'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossorigin: ""
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap'
        }
    ]
})

</script>

<style>
body {
    font-family: 'Roboto';
}

body {
    @apply bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300
}
</style>