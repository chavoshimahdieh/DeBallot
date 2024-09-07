import {createNotarySchema} from './schema'

// Run the createNotarySchema function
createNotarySchema()
    .then(() => console.log('Schema created successfully'))
    .catch((error) => console.error('Error creating schema:', error))
