# This the main Repo for the Gymo project   
###  A modern and responsive Gym Website that allows users to explore gym services,
### manage memberships, and track fitness goals. 

## Getting Started
first run the development server 
`Enter first the front folder`
```sh
npm i
npm run dev
```

open [https://localhost:5173](https://localhost:5173) with your browser to see the results .
the page autoupdate as you modifiying the `src/app.tsx`


install packages 

```sh
yarn add @typescript-eslint/eslint-plugin eslint-config-prettier prettier react-hook-form
```

```tsx
type Data = {
   name : string,
   birth_date: Date,
   email : string,
   password:string,
   level : "beginner" | "intermediate" | "advanced",
};
```
