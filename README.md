# VigiTech Tests 

Application Angular avec suite de tests automatisés complète.

## Stack technique
- **Framework** : Angular 19
- **Tests unitaires** : Jest
- **Tests E2E** : Cypress
- **CI/CD** : GitHub Actions

## Couverture de tests
- ✅ 15 tests unitaires Jest (84% couverture)
- ✅ 11 tests E2E Cypress
- ✅ Pipeline CI/CD automatique

## Installation
```bash
npm install --legacy-peer-deps
```

## Lancer les tests
```bash
# Tests unitaires Jest
npm test

# Tests E2E Cypress
npm run cy:run

# Cypress mode interactif
npm run cy:open
```

## Pipeline CI/CD

Le pipeline GitHub Actions :
1. Lance les tests **Jest** automatiquement
2. Lance les tests **Cypress E2E**
3. Bloque le déploiement si un test échoue

## Structure
```
src/
├── app/
│   ├── components/
│   │   ├── login/          # Composant login + tests
│   │   └── dashboard/      # Composant dashboard + tests
│   └── services/
│       └── auth.service.ts # Service auth + tests
cypress/
└── e2e/
    ├── app.cy.ts           # Tests page principale
    ├── login.cy.ts         # Tests formulaire login
    └── dashboard.cy.ts     # Tests dashboard
```
