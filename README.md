# JavaReact
Sample project incorporating React in a Java web appliation

## Purpose
* Incorporate React into a Java web application while still using standard Maven build commands for everything.
* When using "mvn jetty:run" include Hot Module Reloading so changes take effect immediately without restarting server or refreshing browser page.
* When using "mvn package" minimize all .js and .css files and include them in the .war file
* Require no changes to server side files (like web.xml) to support development mode
 
## Requirements
* Java 7
* Maven 3.2

## Get Started

```
git clone https://github.com/emmostrom/JavaReact.git
cd JavaReact
mvn jetty:run
```

Open browser to http://localhost:8080/JavaReact

edit src/main/jsx/Hello.jsx and change `Hello {this.props.who}` to `Good Bye {this.props.who}` and save file.  The browser should automatically show the new change.

Changes to .less files will automatically get picked up as well.

## Server Side Rendering

See the SSR branch which requires Java 8 : https://github.com/emmostrom/JavaReact/tree/SSR
