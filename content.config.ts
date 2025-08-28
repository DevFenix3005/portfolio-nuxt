import { defineContentConfig, defineCollection, z } from '@nuxt/content'
import { asSitemapCollection } from '@nuxtjs/sitemap/content'

export default defineContentConfig({
  collections: {
    blogContent: defineCollection(
      asSitemapCollection({
        type: 'page',
        source: 'blog/**/*.md',
        schema: z.object({
          title: z.string(),
          description: z.string(),
          publisehdAt: z.date(),
          toc: z.boolean()
        }),
      })),
    coreContent: defineCollection({
      type: 'page',
      source: 'core/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
      })
    })
  }
})
