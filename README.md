# React Gallery App

## Tech Degree Project 7: React Gallery App

This project is going for Exceeds Expectations and is a Single-Page-Application (SPA) Gallery displaying 24 pictures from the Flickr API. In this project, we have 5 different routes (/, /cats, /dogs, /computers, and /search/:query). Additionally, if a user visits a route that has not been pre-determined, an error page is displayed.

## How It's Made
**Tech Used:** HTML, CSS, JavaScript, JSX, React, React Router, Vite

**Additional Features:** This project is going for exceeds expectations, and a couple of added features are:

* **Browser Navigation Works for the Search Route** 
    * In this application, when a user types into the url bar the following "/search/:query" where query is what a user wants to grab pictures for, data is fetched from the Flickr API and pictures are displayed. This is accomplished through the useEffect Hook in App.jsx where if a path starts with /search/ it uses what comes after the second / to fetch data based on the query. 
    * Additionally, these searches are saved in the history stack for the application.
* **404 Error** 
    * When a user visits a path that is not pre-determined, the Not Found component will be rendered and let the user knows that there was an error in the url.
* **Loading Indicator** 
    * If the user creates a new search query, as the data is being fetched from the API, the Loading Component is displayed and once images are loaded, they are displayed on the application.
* **No Matches Message** 
    * Finally, if a user types into the search bar or in the url a query that has no picture matches, the NoMatches Component is rendered to display a message telling the user their query does not display results.