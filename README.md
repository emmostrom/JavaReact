# JavaReact
Sample project incorporating React.js in a Java WAR

## Purpose
* Incorporate React.js into a Java web application while still using standard Maven build commands for everything.
* When using "mvn jetty:run" include Hot Module Reloading so changes take effect immediately without restarting server or refreshing browser page.
* When using "mvn package" minimize all .js and .css files and include them in the .war file
* Require no changes to server side files (like web.xml) to support development mode
 
## Requirements
* Java 7
* Maven 3.2

** Get Started

```
git clone https://github.com/emmostrom/JavaReact.git
cd JavaReact
mvn jetty:run
```

Open browser to http://localhost:8080/JavaReact

edit src/main/jsx/app.jsx and change `who="React"` to `who="World"` and save file.  The browser should automatically show the new change.

Changes to .less files will automatically get picked up as well.

