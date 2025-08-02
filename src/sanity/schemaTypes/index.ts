import { type SchemaTypeDefinition } from 'sanity'
import projects from './projects'
import technology from './technology'
import blog from './blog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projects, technology, blog],
}
