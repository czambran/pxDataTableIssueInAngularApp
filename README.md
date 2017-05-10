# Angular app that shows race condition in px-data-table

The px-data-table component has a feature where if no columns have been specified it will use the
 content of data-table property to generate the columns it needs to show. When this component is 
 used in  an Angular app that has a route which uses this component and specifies the columns to show using 
 px-data-table-column, when you route to it, it will display the specified columns plus the 
 columns it calculates from the data resulting in duplicate columns.

## Fetch Dependencies

Run `npm run setup` to fetch npm and bower dependencies

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
