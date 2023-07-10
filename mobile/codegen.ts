
import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:3000/api/v1/graphql',
  // documents: 'src/**/*.tsx',
  generates: {
    'src/gql-client/': {
      preset: 'client',
      plugins: []
    },
    // './graphql.schema.json': {
    //   plugins: ['introspection']
    // }
  }
}

export default config
