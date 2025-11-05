# @constellation/fhir-models

FHIR R4 TypeScript types with Zod validation for CONSTELLATION Health Platform.

## Installation

```bash
pnpm add @constellation/fhir-models
```

## Usage

```typescript
import { Patient, PatientSchema } from '@constellation/fhir-models';

// Validate patient data
const patientData = {
  resourceType: 'Patient',
  name: [{ family: 'Smith', given: ['John'] }],
  gender: 'male',
  birthDate: '1980-01-15',
};

const result = PatientSchema.safeParse(patientData);
if (result.success) {
  const patient: Patient = result.data;
  console.log('Valid patient:', patient);
} else {
  console.error('Validation errors:', result.error);
}
```

## Supported Resources

- Patient
- MedicationRequest
- Appointment
- (More coming soon)

## License

Copyright © 2025 CONSTELLATION Health Technologies, Inc.