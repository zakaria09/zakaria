import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'
import {visionTool} from '@sanity/vision'
import {codeInput} from '@sanity/code-input'

export default defineConfig({
  name: 'default',
  title: 'zak-blog',

  projectId: 'wjf3uae7',
  dataset: 'production',
  basePath: '/studio',

  plugins: [structureTool(), visionTool(), codeInput()],

  schema: {
    types: schemaTypes,
  },
})
