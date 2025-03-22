import {type SchemaTypeDefinition} from 'sanity'
import blog from './blog'
import companyLogo from './companyLogo'
import competence from './competence'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [blog, companyLogo, competence],
}
