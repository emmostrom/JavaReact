# JavaReact
Sample project incorporating ReactJS in a Java web appliation with Server Side Rendering ** requires Java 8

## Purpose
* Incorporate ReactJS into a Java web application while still using standard Maven build commands for everything.
* When using "mvn jetty:run" include Hot Module Reloading so changes take effect immediately without restarting server or refreshing browser page.
* When using "mvn package" minimize all .js and .css files and include them in the .war file
* Use SSR when running from packaged war file (but not from jetty:run)
* Require no changes to server side files (like web.xml) to support development mode
 
## Requirements
* Java 8
* Maven 3.2

## Get Started

```
git clone https://github.com/emmostrom/JavaReact.git
cd JavaReact
git checkout SSR
mvn jetty:run
```

Open browser to http://localhost:8080/JavaReact

edit src/main/jsx/app.jsx and change `who="React"` to `who="World"` and save file.  The browser should automatically show the new change.

Changes to .less files will automatically get picked up as well.
