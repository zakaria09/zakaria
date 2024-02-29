import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'
import { codeInput } from '@sanity/code-input'
import { visionTool } from '@sanity/vision'

export default defineConfig({
  name: 'default',
  title: 'zak-blog',

  projectId: 'wjf3uae7',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), codeInput()],

  schema: {
    types: schemaTypes,
  },
})
