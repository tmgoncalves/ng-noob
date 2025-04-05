# ng-noob

This repository is intended for practicing the use of Node and Angular.

## Introduction

This project aims to provide a comprehensive understanding of Angular components, services, models, and other core features.

### Getting Started

To run the application, follow the steps below:

1. **Install project dependencies**  
Run the following command in the project directory:

```bash
npm install
```

2. Install **json-server** (if not already installed globally)  
This package is used to simulate a backend API:

```bash
npm install -g json-server
```

3. **Start the mock backend**  
Use json-server to serve the mock database:

```bash
json-server --watch db.json
```

4. **Run the Angular application**  
Start the Angular development server:

```bash
ng serve
```

5. **Access the application**  
Open your browser and navigate to:

```
http://localhost:4200
```

## Key Concepts

### Arrow Functions (`=>`)

Arrow functions are a more concise way to write function expressions in JavaScript. They provide a cleaner and shorter syntax compared to traditional function declarations.

#### Traditional Function

```javascript
function somar(a, b) {
  return a + b;
}

console.log(somar(2, 3)); // Output: 5
```

#### Arrow Function

```javascript
const somar = (a, b) => a + b;

console.log(somar(2, 3)); // Output: 5
```

Both functions return the same result. However, arrow functions are more concise and often preferred for their simplicity, especially in shorter functions or callbacks.
