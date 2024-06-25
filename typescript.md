Typescript
-superset of js
-static typing --> adding static type definitions in js
-makes code more strict

typescript throws compile time error
js throws runtime error

typescript compiler is called -tsc
npm i -g tsc

ts config file --> tsc --init
target - version of js it will convert and support
         ES2016-ES2020 (better to use now)
         esnext (latest but not supported by many browser)
module - exports.functionName (old way) "commonJs"
         export functionName (laytest way) "es6"
constraints
 -forceConsistentCasingInFileNames : true (it support imports in camelcase)
 -strict : true (strictly follows type check and compile)
 -esModuleInterop : true (allow default imports from CommonJs)
completeness
 -skipLibCheck: true (not type check declsaration files (.d.ts))

Interface---
 ex-- interface User {
name:string;
age:number;
email:string;
 use - let you accumulate data of secific structure
       interface can use other interface (image-2)
       interface can extend interface (when we want one interface to come just next to other existing elemnts) (image-3)
       interfaces can be implemented by classes(image-1)
       propertise -- optional (?.), readonly (add keyword before element)
![image](https://github.com/divya10mishra/js-interview-snippet/assets/43552180/e22034c5-afed-4c48-86a0-c93f48bc6229)
![image](https://github.com/divya10mishra/js-interview-snippet/assets/43552180/bc402b5c-5e03-4c57-8461-650c87684428)
![image](https://github.com/divya10mishra/js-interview-snippet/assets/43552180/e89694bc-6509-4016-b0c8-9c368a3f0b57)

Type ---
Types
We can use them interchangbly with interface as type also combine data and used as an object but could not extend or implement like interface.
in syntax it has equal to before curly braces (ex - type Shape = {square:string} -- image-1)
types let you do unions and ors but interface not (iamge-2and3 example with or(|) in union(&) all property are required)
![image](https://github.com/divya10mishra/js-interview-snippet/assets/43552180/b9d953aa-5c75-4d18-9ac4-c83867e8f0a0)
![image](https://github.com/divya10mishra/js-interview-snippet/assets/43552180/a3eb8d0f-8be2-41b4-8cca-f68c0384e539)
![image](https://github.com/divya10mishra/js-interview-snippet/assets/43552180/716c9cb3-cc58-44c9-a188-be237ebf7876)

diff between interface and type
![image](https://github.com/divya10mishra/js-interview-snippet/assets/43552180/eb9201d1-c7c5-46b6-b70f-cd914d11966a)

Enum-Enums in TypeScript are a way of defining named constants that can be used to represent a set of related values.







