"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentSchema = exports.MedicationRequestSchema = exports.PatientSchema = exports.ResourceSchema = void 0;
const zod_1 = require("zod");
/**
 * FHIR R4 Base Resource
 */
exports.ResourceSchema = zod_1.z.object({
    resourceType: zod_1.z.string(),
    id: zod_1.z.string().optional(),
    meta: zod_1.z.object({
        versionId: zod_1.z.string().optional(),
        lastUpdated: zod_1.z.string().datetime().optional(),
    }).optional(),
});
/**
 * FHIR Patient Resource
 */
exports.PatientSchema = exports.ResourceSchema.extend({
    resourceType: zod_1.z.literal('Patient'),
    identifier: zod_1.z.array(zod_1.z.object({
        system: zod_1.z.string(),
        value: zod_1.z.string(),
    })).optional(),
    name: zod_1.z.array(zod_1.z.object({
        use: zod_1.z.enum(['usual', 'official', 'temp', 'nickname']).optional(),
        family: zod_1.z.string().optional(),
        given: zod_1.z.array(zod_1.z.string()).optional(),
    })).optional(),
    gender: zod_1.z.enum(['male', 'female', 'other', 'unknown']).optional(),
    birthDate: zod_1.z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
    telecom: zod_1.z.array(zod_1.z.object({
        system: zod_1.z.enum(['phone', 'email', 'fax', 'url']).optional(),
        value: zod_1.z.string(),
        use: zod_1.z.enum(['home', 'work', 'mobile']).optional(),
    })).optional(),
});
/**
 * FHIR MedicationRequest Resource
 */
exports.MedicationRequestSchema = exports.ResourceSchema.extend({
    resourceType: zod_1.z.literal('MedicationRequest'),
    status: zod_1.z.enum(['active', 'on-hold', 'cancelled', 'completed', 'entered-in-error', 'stopped', 'draft']),
    intent: zod_1.z.enum(['proposal', 'plan', 'order', 'original-order', 'reflex-order', 'filler-order', 'instance-order', 'option']),
    medicationCodeableConcept: zod_1.z.object({
        coding: zod_1.z.array(zod_1.z.object({
            system: zod_1.z.string(),
            code: zod_1.z.string(),
            display: zod_1.z.string().optional(),
        })),
        text: zod_1.z.string().optional(),
    }),
    subject: zod_1.z.object({
        reference: zod_1.z.string(), // e.g., "Patient/123"
        display: zod_1.z.string().optional(),
    }),
    authoredOn: zod_1.z.string().datetime().optional(),
    requester: zod_1.z.object({
        reference: zod_1.z.string(), // e.g., "Practitioner/456"
        display: zod_1.z.string().optional(),
    }).optional(),
    dosageInstruction: zod_1.z.array(zod_1.z.object({
        text: zod_1.z.string().optional(),
        timing: zod_1.z.object({
            repeat: zod_1.z.object({
                frequency: zod_1.z.number().optional(),
                period: zod_1.z.number().optional(),
                periodUnit: zod_1.z.enum(['s', 'min', 'h', 'd', 'wk', 'mo', 'a']).optional(),
            }).optional(),
        }).optional(),
    })).optional(),
});
/**
 * FHIR Appointment Resource
 */
exports.AppointmentSchema = exports.ResourceSchema.extend({
    resourceType: zod_1.z.literal('Appointment'),
    status: zod_1.z.enum(['proposed', 'pending', 'booked', 'arrived', 'fulfilled', 'cancelled', 'noshow', 'entered-in-error', 'checked-in', 'waitlist']),
    serviceType: zod_1.z.array(zod_1.z.object({
        coding: zod_1.z.array(zod_1.z.object({
            system: zod_1.z.string(),
            code: zod_1.z.string(),
            display: zod_1.z.string().optional(),
        })),
    })).optional(),
    appointmentType: zod_1.z.object({
        coding: zod_1.z.array(zod_1.z.object({
            system: zod_1.z.string(),
            code: zod_1.z.string(),
            display: zod_1.z.string().optional(),
        })),
    }).optional(),
    start: zod_1.z.string().datetime().optional(),
    end: zod_1.z.string().datetime().optional(),
    participant: zod_1.z.array(zod_1.z.object({
        actor: zod_1.z.object({
            reference: zod_1.z.string(),
            display: zod_1.z.string().optional(),
        }).optional(),
        required: zod_1.z.enum(['required', 'optional', 'information-only']).optional(),
        status: zod_1.z.enum(['accepted', 'declined', 'tentative', 'needs-action']),
    })),
});
// Export all schemas and types
// export * from './patient';
// export * from './medication';
// export * from './appointment';
