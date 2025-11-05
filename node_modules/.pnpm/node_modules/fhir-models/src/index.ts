import { z } from 'zod';

/**
 * FHIR R4 Base Resource
 */
export const ResourceSchema = z.object({
  resourceType: z.string(),
  id: z.string().optional(),
  meta: z.object({
    versionId: z.string().optional(),
    lastUpdated: z.string().datetime().optional(),
  }).optional(),
});

export type Resource = z.infer<typeof ResourceSchema>;

/**
 * FHIR Patient Resource
 */
export const PatientSchema = ResourceSchema.extend({
  resourceType: z.literal('Patient'),
  identifier: z.array(z.object({
    system: z.string(),
    value: z.string(),
  })).optional(),
  name: z.array(z.object({
    use: z.enum(['usual', 'official', 'temp', 'nickname']).optional(),
    family: z.string().optional(),
    given: z.array(z.string()).optional(),
  })).optional(),
  gender: z.enum(['male', 'female', 'other', 'unknown']).optional(),
  birthDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  telecom: z.array(z.object({
    system: z.enum(['phone', 'email', 'fax', 'url']).optional(),
    value: z.string(),
    use: z.enum(['home', 'work', 'mobile']).optional(),
  })).optional(),
});

export type Patient = z.infer<typeof PatientSchema>;

/**
 * FHIR MedicationRequest Resource
 */
export const MedicationRequestSchema = ResourceSchema.extend({
  resourceType: z.literal('MedicationRequest'),
  status: z.enum(['active', 'on-hold', 'cancelled', 'completed', 'entered-in-error', 'stopped', 'draft']),
  intent: z.enum(['proposal', 'plan', 'order', 'original-order', 'reflex-order', 'filler-order', 'instance-order', 'option']),
  medicationCodeableConcept: z.object({
    coding: z.array(z.object({
      system: z.string(),
      code: z.string(),
      display: z.string().optional(),
    })),
    text: z.string().optional(),
  }),
  subject: z.object({
    reference: z.string(), // e.g., "Patient/123"
    display: z.string().optional(),
  }),
  authoredOn: z.string().datetime().optional(),
  requester: z.object({
    reference: z.string(), // e.g., "Practitioner/456"
    display: z.string().optional(),
  }).optional(),
  dosageInstruction: z.array(z.object({
    text: z.string().optional(),
    timing: z.object({
      repeat: z.object({
        frequency: z.number().optional(),
        period: z.number().optional(),
        periodUnit: z.enum(['s', 'min', 'h', 'd', 'wk', 'mo', 'a']).optional(),
      }).optional(),
    }).optional(),
  })).optional(),
});

export type MedicationRequest = z.infer<typeof MedicationRequestSchema>;

/**
 * FHIR Appointment Resource
 */
export const AppointmentSchema = ResourceSchema.extend({
  resourceType: z.literal('Appointment'),
  status: z.enum(['proposed', 'pending', 'booked', 'arrived', 'fulfilled', 'cancelled', 'noshow', 'entered-in-error', 'checked-in', 'waitlist']),
  serviceType: z.array(z.object({
    coding: z.array(z.object({
      system: z.string(),
      code: z.string(),
      display: z.string().optional(),
    })),
  })).optional(),
  appointmentType: z.object({
    coding: z.array(z.object({
      system: z.string(),
      code: z.string(),
      display: z.string().optional(),
    })),
  }).optional(),
  start: z.string().datetime().optional(),
  end: z.string().datetime().optional(),
  participant: z.array(z.object({
    actor: z.object({
      reference: z.string(),
      display: z.string().optional(),
    }).optional(),
    required: z.enum(['required', 'optional', 'information-only']).optional(),
    status: z.enum(['accepted', 'declined', 'tentative', 'needs-action']),
  })),
});

export type Appointment = z.infer<typeof AppointmentSchema>;

// Export all schemas and types
// export * from './patient';
// export * from './medication';
// export * from './appointment';