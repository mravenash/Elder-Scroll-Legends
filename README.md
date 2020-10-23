### `npm install`

Installs all the dependecies added in package.json

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


### Key features:

Infinte scrolling -> debouncing scroll event and calculating at what point we should start fetching next set of data.

Search filter by name -> debounce on user input, so that we dont call the api for every keystroke.

Notification -> Notification component added in order to provide user messages, if no more data to load/Server side error.

Caching search items in local strorage which has no records in order avoid subsequent api calls.

Optimizations: Not in scope->

1. Use service worker, in order to intercept each request https request and store the result in local storage/Indexed, as key value pairs(or  stores of indexed db), where key is the url and value is the response. Hence for subsequent requests we can check if the url is present in the local storage and then get the data from localstaroge instead of making an actual https call. Will reduce the stress on the api.

2. Using the above approach, we can also provide offline support. Would also be a great performance enhancement for low badwidth networks. 

3. We are debouncing scoll events for infintite scrolling, the other option would be to use HTML Intersection Observer(https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API), where we can have an element ref, and once we reach that element we can do a fetch.

4. We are using useState and useEffect hooks in order to accomplish the feature. Another apporach would we to use useReducer, which will be event based, where we will be doing operations with respect to /actions that are dispatched.

### Features available in the app.

☐ Application built using react js and material ui. 

☐ Show results in a card grid format with the image prominently displayed //=> CardDetails.js 

☐ Each card displays: Image, Name, Text, Set Name, and Type. Additional fields are optional.//=> CardDetails.js

☐ Display a loading indicator when communicating with the API.//=> react-loader-spinner, 

☐ Use a responsive design that accommodates, at minimum, desktop and mobile. -> using materil ui fluid container

☐ Initially, fetch and display the first 20 results returned by the API.// useEffect hook line 24.

☐ As the user scrolls down the page, load and append additional cards using “infinite scroll.” useInfiniteScroll.js custom hook

☐ Retrieve additional pages of results as-needed but do not load more than 20 cards with
  each request.//=> pageSize set to 20 on each request

☐ Allow the user to search for cards by Name.//=> Search.js
