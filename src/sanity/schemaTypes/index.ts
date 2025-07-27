import { type SchemaTypeDefinition } from 'sanity'
import projects from './projects'
import technology from './technology'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projects, technology],
}
