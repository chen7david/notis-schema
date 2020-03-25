# Notis Schema

### Getting Started
Notis Schema is a library of prefined schemas ready to use in your apps. 
#### 1. Getting Schemas
Here we will look how you can retrieve the schemas. You can either retrieve them seperatly or as a bundle. 
```js
// get individual schemas
const { JoiSchema, DefaultSchema } = require('notis-schema')

// get all schemas combined into one bundle

const schema = require('notis-schema')()