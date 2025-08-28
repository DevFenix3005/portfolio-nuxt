<template>
    <NuxtLayout>
        <section>
            <div>
                <h1 class="text-4xl font-bold mb-4">Opps!! {{ error?.statusCode }}</h1>
                <p class="text-xl text-gray-600 dark:text-gray-300">{{ error?.statusMessage }}</p>
                <NuxtLink to="/">Go back home</NuxtLink>
            </div>
        </section>
    </NuxtLayout>
</template>


<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
    error: Object as () => NuxtError
})
</script>
