# Test Specification Document

## Objective

Develop a FloorMap component to
* Display a floor plan image (provided in public/).
* Display markers on the floor plan at specified locations.
* Allow users to zoom **smoothly** and pan across the floor plan.
* Add a button below the map to zoom on marker 3 (Dwigth's desk).

## Technical Constraints
* Leaflet must be used for handling the map functionality. Use directly the Leaflet library not a Vue binding such as vue-leaflet.
* Vue 3 Composition API and "script setup" should be leveraged for building the component.
* No external UI libraries (e.g., Vuetify, BootstrapVue) are allowed for implementing the map itself.
* Nuxt 3 must be used for the project structure.
* TypeScript must be used for type checking.

## Instructions for handing in the test

* Fork the repository and create the FloorMap component inside components/.
* Commit your changes and provide the link to your repository when complete.

# Resources

* Leaflet website https://leafletjs.com/

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
yarn dev
```
