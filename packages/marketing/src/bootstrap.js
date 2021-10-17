import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';


// Mount function to start up the app
const mount = (el, { onNavigate, defaultHistory, initalPath }) => {
    const history = defaultHistory || createMemoryHistory({
      initialEntries: [initalPath]
    });

    if(onNavigate){
      history.listen(onNavigate);
    }
 
    ReactDOM.render(<App history={history} />, el);

     /**
         * { pathname: nextPathname }
         * below we did destructing of location object and 
         * give an alias pathname to nextPathName
         */
      // location.pathname
    return {
      onParentNavigate({ pathname: nextPathname }){
          if(history?.location?.pathname !== nextPathname){
               history.push(nextPathname);
           }
      }
    }
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');
  
    if (devRoot) {
      mount(devRoot, { defaultHistory: createBrowserHistory()});
    }
  }
  
  // We are running through container
  // and we should export the mount function
  export { mount };