import { z } from 'zod';
/**
 * FHIR R4 Base Resource
 */
export declare const ResourceSchema: z.ZodObject<{
    resourceType: z.ZodString;
    id: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodObject<{
        versionId: z.ZodOptional<z.ZodString>;
        lastUpdated: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Resource = z.infer<typeof ResourceSchema>;
/**
 * FHIR Patient Resource
 */
export declare const PatientSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodObject<{
        versionId: z.ZodOptional<z.ZodString>;
        lastUpdated: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    resourceType: z.ZodLiteral<"Patient">;
    identifier: z.ZodOptional<z.ZodArray<z.ZodObject<{
        system: z.ZodString;
        value: z.ZodString;
    }, z.core.$strip>>>;
    name: z.ZodOptional<z.ZodArray<z.ZodObject<{
        use: z.ZodOptional<z.ZodEnum<{
            usual: "usual";
            official: "official";
            temp: "temp";
            nickname: "nickname";
        }>>;
        family: z.ZodOptional<z.ZodString>;
        given: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>>;
    gender: z.ZodOptional<z.ZodEnum<{
        unknown: "unknown";
        male: "male";
        female: "female";
        other: "other";
    }>>;
    birthDate: z.ZodOptional<z.ZodString>;
    telecom: z.ZodOptional<z.ZodArray<z.ZodObject<{
        system: z.ZodOptional<z.ZodEnum<{
            phone: "phone";
            email: "email";
            fax: "fax";
            url: "url";
        }>>;
        value: z.ZodString;
        use: z.ZodOptional<z.ZodEnum<{
            home: "home";
            work: "work";
            mobile: "mobile";
        }>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type Patient = z.infer<typeof PatientSchema>;
/**
 * FHIR MedicationRequest Resource
 */
export declare const MedicationRequestSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodObject<{
        versionId: z.ZodOptional<z.ZodString>;
        lastUpdated: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    resourceType: z.ZodLiteral<"MedicationRequest">;
    status: z.ZodEnum<{
        active: "active";
        "on-hold": "on-hold";
        cancelled: "cancelled";
        completed: "completed";
        "entered-in-error": "entered-in-error";
        stopped: "stopped";
        draft: "draft";
    }>;
    intent: z.ZodEnum<{
        proposal: "proposal";
        plan: "plan";
        order: "order";
        "original-order": "original-order";
        "reflex-order": "reflex-order";
        "filler-order": "filler-order";
        "instance-order": "instance-order";
        option: "option";
    }>;
    medicationCodeableConcept: z.ZodObject<{
        coding: z.ZodArray<z.ZodObject<{
            system: z.ZodString;
            code: z.ZodString;
            display: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        text: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    subject: z.ZodObject<{
        reference: z.ZodString;
        display: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    authoredOn: z.ZodOptional<z.ZodString>;
    requester: z.ZodOptional<z.ZodObject<{
        reference: z.ZodString;
        display: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    dosageInstruction: z.ZodOptional<z.ZodArray<z.ZodObject<{
        text: z.ZodOptional<z.ZodString>;
        timing: z.ZodOptional<z.ZodObject<{
            repeat: z.ZodOptional<z.ZodObject<{
                frequency: z.ZodOptional<z.ZodNumber>;
                period: z.ZodOptional<z.ZodNumber>;
                periodUnit: z.ZodOptional<z.ZodEnum<{
                    s: "s";
                    min: "min";
                    h: "h";
                    d: "d";
                    wk: "wk";
                    mo: "mo";
                    a: "a";
                }>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type MedicationRequest = z.infer<typeof MedicationRequestSchema>;
/**
 * FHIR Appointment Resource
 */
export declare const AppointmentSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodObject<{
        versionId: z.ZodOptional<z.ZodString>;
        lastUpdated: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    resourceType: z.ZodLiteral<"Appointment">;
    status: z.ZodEnum<{
        cancelled: "cancelled";
        "entered-in-error": "entered-in-error";
        proposed: "proposed";
        pending: "pending";
        booked: "booked";
        arrived: "arrived";
        fulfilled: "fulfilled";
        noshow: "noshow";
        "checked-in": "checked-in";
        waitlist: "waitlist";
    }>;
    serviceType: z.ZodOptional<z.ZodArray<z.ZodObject<{
        coding: z.ZodArray<z.ZodObject<{
            system: z.ZodString;
            code: z.ZodString;
            display: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    appointmentType: z.ZodOptional<z.ZodObject<{
        coding: z.ZodArray<z.ZodObject<{
            system: z.ZodString;
            code: z.ZodString;
            display: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    start: z.ZodOptional<z.ZodString>;
    end: z.ZodOptional<z.ZodString>;
    participant: z.ZodArray<z.ZodObject<{
        actor: z.ZodOptional<z.ZodObject<{
            reference: z.ZodString;
            display: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        required: z.ZodOptional<z.ZodEnum<{
            optional: "optional";
            required: "required";
            "information-only": "information-only";
        }>>;
        status: z.ZodEnum<{
            accepted: "accepted";
            declined: "declined";
            tentative: "tentative";
            "needs-action": "needs-action";
        }>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Appointment = z.infer<typeof AppointmentSchema>;
