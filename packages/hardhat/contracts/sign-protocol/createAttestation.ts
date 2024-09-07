import {createNotaryAttestation} from './attestation'

// Run the createNotaryAttestation function
createNotaryAttestation()
    .then(() => console.log('Attestation created successfully'))
    .catch((error) => console.error('Error creating attestation:', error))
