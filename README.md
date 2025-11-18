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
App
✖ should render title
✔ should create the app
RepositoriesList
✖ should create
Repository
✖ should create

App > should render title
Expected 'Trending Repos' to contain 'Hello, repo-list-angular'.
   
RepositoriesList > should create
TypeError: Cannot read properties of undefined (reading 'length')
    at RepositoriesList2_Template (ng:///RepositoriesList2.js:36:61)

Repository > should create
TypeError: Cannot read properties of undefined (reading 'owner')
    at RepositoryComponent2_Template (ng:///RepositoryComponent2.js:28:50)
                                                                                                                                                                                                                                        
```

```
xxx
```


