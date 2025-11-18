# GitHub Repositories List

Angular app that lists the most starred GitHub repositories created in the last 30 days. Infinite scroll loads more repositories as you scroll down.

## Tech
- Angular 20.3.9, TypeScript  
- Fetches data from the GitHub REST API (GET /search/repositories)
- Uses Fetch API - sufficient for simple GET requests, no extra dependencies, keeps the project lightweight
- Standalone components - modular and reusable
- CSS + Flexbox - simple responsive layout

## Run 
- Clone the GitHub repository to your machine and navigate to the project directory
- Run `npm install` and `ng serve`
- Open http://localhost:4200 in your browser

## First test run

```
Application bundle generation failed. [5.781 seconds] - 2025-11-18T09:46:53.081Z

X [ERROR] TS2459: Module '"./repository"' declares 'Repository' locally, but it is not exported. [plugin angular-compiler]

    src/app/repository/repository.spec.ts:3:9:
      3 │ import { Repository } from './repository';                                                                                                                                                                                                                                                                
        ╵          ~~~~~~~~~~                                                                                                                                                                                                                                                                                       

  'Repository' is declared here.

    src/app/repository/repository.ts:2:9:
      2 │ import { Repository } from '../app';                                                                                                                                                                                                                                                                      
        ╵          ~~~~~~~~~~                                                                                                                                                                                                                                                                                       
```

```
Chrome 142.0.0.0 (Windows 10) App should render title FAILED                                                                                                                                                                                                                                                        
        Expected 'Trending Repos' to contain 'Hello, repo-list-angular'.
            at <Jasmine>
            at UserContext.<anonymous> (src/app/app.spec.ts:21:55)
            at _ZoneDelegate.invoke (node_modules/zone.js/fesm2015/zone.js:398:28)
            at _ProxyZoneSpec.onInvoke (node_modules/zone.js/fesm2015/zone-testing.js:2132:39)
            at _ZoneDelegate.invoke (node_modules/zone.js/fesm2015/zone.js:397:34)
Chrome 142.0.0.0 (Windows 10) RepositoriesList should create FAILED                                                                                                                                                                                                                                                 
        TypeError: Cannot read properties of undefined (reading 'length')
            at RepositoriesList2_Template (ng:///RepositoriesList2.js:36:61)
            at executeTemplate (node_modules/@angular/core/fesm2022/debug_node.mjs:9040:9)
            at refreshView (node_modules/@angular/core/fesm2022/debug_node.mjs:10076:13)
            at detectChangesInView (node_modules/@angular/core/fesm2022/debug_node.mjs:10296:9)
            at detectChangesInViewIfAttached (node_modules/@angular/core/fesm2022/debug_node.mjs:10256:5)
            at detectChangesInComponent (node_modules/@angular/core/fesm2022/debug_node.mjs:10244:5)
            at detectChangesInChildComponents (node_modules/@angular/core/fesm2022/debug_node.mjs:10322:9)
            at refreshView (node_modules/@angular/core/fesm2022/debug_node.mjs:10131:13)
            at detectChangesInView (node_modules/@angular/core/fesm2022/debug_node.mjs:10296:9)
            at detectChangesInViewWhileDirty (node_modules/@angular/core/fesm2022/debug_node.mjs:9985:9)
Chrome 142.0.0.0 (Windows 10) Repository should create FAILED                                                                                                                                                                                                                                                       
        TypeError: Cannot read properties of undefined (reading 'owner')
            at RepositoryComponent2_Template (ng:///RepositoryComponent2.js:28:50)
            at executeTemplate (node_modules/@angular/core/fesm2022/debug_node.mjs:9040:9)
            at refreshView (node_modules/@angular/core/fesm2022/debug_node.mjs:10076:13)
            at detectChangesInView (node_modules/@angular/core/fesm2022/debug_node.mjs:10296:9)
            at detectChangesInViewIfAttached (node_modules/@angular/core/fesm2022/debug_node.mjs:10256:5)
            at detectChangesInComponent (node_modules/@angular/core/fesm2022/debug_node.mjs:10244:5)
            at detectChangesInChildComponents (node_modules/@angular/core/fesm2022/debug_node.mjs:10322:9)
            at refreshView (node_modules/@angular/core/fesm2022/debug_node.mjs:10131:13)
            at detectChangesInView (node_modules/@angular/core/fesm2022/debug_node.mjs:10296:9)
            at detectChangesInViewWhileDirty (node_modules/@angular/core/fesm2022/debug_node.mjs:9985:9)
Chrome 142.0.0.0 (Windows 10): Executed 4 of 4 (3 FAILED) (2.016 secs / 1.853 secs)                                                                                                                                                                                                                                 
TOTAL: 3 FAILED, 1 SUCCESS
```
