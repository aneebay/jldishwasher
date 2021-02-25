# Dishwasher App

## How-to run this app

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs)

### Tests

To run tests:
```
npm run test
```
You may need to press the 'a' key to run all tests.

## Business Requirements
* Build a web app that can be used to sell dishwashers.
* The app consist of a listing page (grid) and product details pages for each product
* Data is sourced from the provided REST API
* Website should be responsive, particularly on tablet

## Tech stack considerations
This section will list technology considerations I have made for this project based on my knowledge and constraints.

### Constraints
Below are some constraints I have set before deciding on tech:
- Accessible
- Performant
- Easy to maintain
- Testable
- Easy to scale
### Options (with pros(✅ ) and cons(❌))
- HTML / CSS / JavaScript (vanilla)
    - Avoids complex setup and overhead ✅ 
    - High chance of good accessibility, perfomrance & adhering to browser standards ✅ 
    - Doesn't scale well when project grows ❌
    - Hard to maintain eventually ❌
    - Lack of sophistication / modern FE practices and features ❌
- Express (Node.js)
    - Widely used and trusted ✅ 
    - Supports a progressive enhamcent approach ✅ 
    - Can difficult to work with, lack of standard coding practice ❌
    - Challenging to scale ❌
- React.js
    - Widely used, trusted and modern ✅ 
    - Easy to maintain ✅ 
    - Can scale easily ✅ 
    - Offers good performance ✅ 
    - Dependent on JS on the client ❌
    - Danger of over-kill ❌
- Next.js
    - Based on React.js, hence familiar and all it's advantages ✅ 
    - Isomorphic, so it supports progressive enhancement and modern approach ✅ 
    - Great DX and best practices already baked in ✅ 
    - Too opinionated ❌
- SASS
    - Popular and widely used. Familiar ✅ 
    - Offers better code organisation than regular CSS ✅ 
    - Superceded by more modern tools and techniques, especially when other frameworks are used ❌
- Tailwind CSS (using PostCSS)
    - Popular and widely used. Familiar ✅ 
    - Offers great DX and workflow ✅ 
    - Works well with any framework ✅ 
    - Comes with lots of functionality out of the box eg. responsive, grid ✅ 
    - Danger for abuse / over-use ❌
    - Danger of neglecting CSS  ❌
    - Potentially adds bloat to CSS bundle  ❌
- Axios
    - Popular and widely used. Familiar ✅ 

### Decision

There isn't a perfect choice, however considering the goals of the project and constraints, I have decided to build the solution with the following:
* Next.js
* Tailwind CSS (using PostCSS)


## Project tasks

Tasks are managed on the [Github Projects board](https://github.com/aneebay/jldishwasher/projects/1).
### Issues faced

* Next.js/React was unable to make a successful request to the API due to CORS restrictions. To resolve this, I had to proxy the request via Next.js api routes
* Struggled to get the `router.query` params until I realised that `useRouter` is a hook which won't be populated until the page is hydrated.

## Other Notes

As I make this final commit before subission, I would like to point out things that I would've done differently if given more time. PS: the lack of time to complete was purely due to my unavailability most of the week. Sufficient time was given to complete this task.

### What I would have liked to complete:
* I would have completed the product detail page UI using grid layout for the responsive columns.
* I would have finished the carousel (I already started by attempting a CSS only scroll snap carousel, but only got round to using one image).
* Tackled the issues I was facing with the tests for the product detail proxy API.
* Provided better test coverage
* Created a utility function that formats the currency based on the value from API. ie. `GBP` formats to `£`, rather than hardcoding the value in the JSX template.


## Things I could have done differenlty
* Stuck to one CSS approach rather than using two (CSS Modules and PostCSS/Tailwind)
* Taken advantage of environment variables to manage the API keys, rather than have them exposed in source code