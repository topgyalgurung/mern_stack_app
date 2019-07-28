### MongoDB in a Node.js with Express application

#### Teck stack for *Backend applications* to offer CRUD

#### Can establish MERN, MEAN Or MEVN tech stack on top it depending whether you prefer React or Angular or Vue respectively

## Basic Folder structure

```
server
|-src
|  |- models
|       |- index.js
|  |- routes
|    |- index.js
|  |- app.js
|  |- package.json
|  |- package-lock.json
|- README.md
```

## Requirements

* [nodejs and npm](https://nodejs.org/en/)

### Start from scratch 

1. mkdir and cd 

2.  Create package.json file
  
        npm init

3. [mongoose](https://mongoosejs.com/) as ORM: provides API to work with MongoDB
        
        npm install mongoose --save

4. install express

        npm i express

5. Other dependencies
    
   [nodemon](https://www.npmjs.com/package/nodemon): restart application itself when file changes in directory 
   
   [cors](https://www.npmjs.com/package/cors): cross origin resource sharing, speaks itself
   
   [body-parser](https://www.npmjs.com/package/body-parser): parses the JSON, buffer, string and URL encoded data submitted         using HTTP POST request

        npm i nodemon cors body-parser 

6. Install node_modules
        
        npm install
        
7. To run, my way here is edit: in package.json, add "start": "nodemon src/app.js" according to my file structure. 
  
        npm start

### [mongo shell](https://docs.mongodb.com/manual/reference/program/mongo/#bin.mongo)

    $ mongo
    $ show dbs
    $ use myapp
 

## Markdown cheatsheet:

* [github](https://help.github.com/en/articles/basic-writing-and-formatting-syntax)
* [stackedit](https://stackedit.io/) 
