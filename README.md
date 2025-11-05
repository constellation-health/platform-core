# CONSTELLATION Health Platform - Core Infrastructure

Shared packages and infrastructure for CONSTELLATION Health Platform.

## Products
- **ARIA EHR** - Clinical intelligence platform
- **ORBIT PMS** - Practice management system  
- **MERIDIAN Pharmacy** - Medication safety and therapy management

## Packages

### Core Libraries
- `@constellation/fhir-models` - FHIR R4 TypeScript types
- `@constellation/mcp-sdk` - Model Context Protocol server framework
- `@constellation/auth` - Authentication & authorization (OAuth2, SMART on FHIR)
- `@constellation/observability` - Logging, tracing, metrics
- `@constellation/validation` - Input validation and FHIR validation

### Frontend
- `@constellation/ui-components` - React component library
- `@constellation/design-tokens` - Design system tokens (colors, spacing)

### Data & Infrastructure
- `@constellation/database` - Database utilities and Prisma helpers
- `@constellation/api-client` - HTTP client with retry logic
- `@constellation/testing` - Test utilities and factories

## Development

```bash
pnpm install
pnpm build
pnpm test
```

## License

Copyright © 2025 CONSTELLATION Health Technologies, Inc.
