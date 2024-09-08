# npm 

- A package manager which manages all the packages 	
npm init

# package.json
 It contains all the dependencies (we can call it as metadata) necessary to run the project

# parcel:
- Dev build
- Refreshes the page
- Local server
- Caching Faster Builds
- Image Optimization
- Bundling
- Minification
- Compressing
- Consistent Hashing
- Diagnostics
- Tree Shaking - remove unused code from
- Differential Bundling - supports older browsers
- HTTPS


- To install parcel we need the command of npx install -D parcel

 # Hot module replacement  
   By using this the files are read 
- parcel refreshes the page when changes are made by using file watching algorithm

# caret(^) and tilde(~) differences in package.json

- caret - if any minor changes are there it will update the project as accordance'

- tilde - if any major changes are there it will update 

eg: parcel has dependencies

# Package-lock.json
The purpose of package-lock.json is to ensure that the same dependencies are installed consistently across different environments, such as development and production environments

In Node.js, there are two main types of dependencies:

# Normal dependencies:
These are the dependencies that your project directly uses. They are listed in the dependencies section of your package.json file.

# Transitive dependencies:
- These are the dependencies that are used by your normal dependencies. They are not listed in your package.json file, but they are installed automatically when you install your normal dependencies.


- Every dependency has unique package.json 

{
  "name": "my-project",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.17.1"
  }
}


- In this example, express is a normal dependency. When you run npm install, Express will be installed in your project's node_modules directory.

- Express also has its own dependencies, such as body-parser and cookie-parser. These are transitive dependencies. They will also be installed in your project's node_modules directory, but they will not be listed in your package.json file.

- Transitive dependencies can be a good thing, because they can save you from having to list all of your project's dependencies manually. However, they can also be a bad thing, because they can lead to dependency bloat. Dependency bloat is when your project has a lot of dependencies that it doesn't actually need.

- By managing your transitive dependencies, you can keep your project's node_modules directory lean and mean.

- npx build index.html


# BrowsersList
- By Specifying the versions here in the package.json we can support older browsers to that respective versions specified


# In order to run the projects essential things to be noted are:

- npm init
- npm i -D parcel(D means dependency)

# Ignite our app or run our application

- npx parcel index.html
- npm install react react-dom

# To build the file 

- npx parcel build index.html

# Configure scripts in the package.json like below 

-  "scripts": {
    "test":"npx parcel index.html",
    "build":"npx parcel build index.html"
  }

# Parcel Cache 

- In parcel there is cache which stores the previous builds and aids while developing the application to run in less time/no time

# Tree shaking

- Parcel removes the unwanted code while building by tree shaking method



