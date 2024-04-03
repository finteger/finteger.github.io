author: Todd Nash
summary: Code Labs
id: code-labs-web-services
categories: codelab,markdown,internet computer
environments: Web
status: Published

# Node.js & Express.js Topics

## Cookie-Parser
In Express.js, cookie-parser is a middleware that parses cookies attached to the client request object. It helps to extract cookie data from the request headers and make it available in the req.cookies object for further processing within your Express application.

Here's a brief explanation of how to use cookie-parser in Express.js:

First, you need to install the cookie-parser module using npm or yarn:
```npm install cookie-parser```

Then, you can require and use it in your Express application:
 ```javascript
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

// Use cookie-parser middleware
app.use(cookieParser());

// Define your routes and handle requests
app.get('/', (req, res) => {
  // Access cookies from the req.cookies object
  const cookieValue = req.cookies.cookieName;
  // Further processing...
});

// Start your Express server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

A cookie is a small piece of data sent from a website and stored on the user's computer by the user's web browser while the user is browsing. Cookies were designed to be a reliable mechanism for websites to remember stateful information (such as items added to a shopping cart) or to record the user's browsing activity (including clicking particular buttons, logging in, or recording which pages were visited in the past).

Cookies serve several purposes, including:

Session Management: Cookies are commonly used to manage user sessions. When a user logs in to a website, a session cookie is often used to keep track of the user's authenticated state. This helps the server recognize the user as they navigate through different pages of the website without requiring re-authentication on each page load.

Personalization: Cookies can be used to remember user preferences and settings, such as language preferences or personalized content recommendations.

Tracking and Analytics: Cookies are often used by website owners and third-party services for tracking user behavior and gathering analytics data. This data can be used to analyze website traffic, understand user demographics, and improve the user experience.

Advertising: Cookies are also widely used in online advertising to track users' browsing habits and display targeted advertisements based on their interests and behavior.




## JSON Web Token 
JSON Web Tokens (JWT) are a compact, URL-safe means of representing claims to be transferred between two parties. The claims in a JWT are encoded as a JSON object that is used as the payload of a JSON Web Signature (JWS) structure or as the plaintext of a JSON Web Encryption (JWE) structure, enabling the claims to be digitally signed or integrity protected with a Message Authentication Code (MAC) and/or encrypted.

In an Express.js application, jsonwebtoken is often used to generate and verify JWTs. Below is an explanation of how to use jsonwebtoken in Express.js:

First, you need to install the jsonwebtoken module:
```npm install jsonwebtoken```

Then, you can use it in your Express application to generate and verify JWTs:

```javascript
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

// Secret key used to sign the JWT
const secretKey = 'your_secret_key';

// Define a route to generate a JWT
app.get('/login', (req, res) => {
  // Example payload for the JWT
  const payload = {
    userId: '123456789',
    username: 'exampleuser'
  };

  // Generate a JWT
  const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

  res.json({ token });
});

// Define a route to verify and decode a JWT
app.get('/protected', (req, res) => {
  // Extract token from request headers or query parameters
  const token = req.headers.authorization.split(' ')[1];

  // Verify the JWT
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    // JWT is valid, decoded contains the payload
    res.json(decoded);
  });
});

// Start your Express server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

JSON Web Tokens (JWTs) are a means of representing claims securely between two parties. They consist of three parts: a header, a payload, and a signature. JWTs are commonly used for authentication and information exchange in web applications.

JWTs serve several purposes, including:

Authentication: JWTs are commonly used as authentication tokens. When a user logs in to a web application, the server can generate a JWT containing information about the user (such as user ID, username, and roles) and send it back to the client. The client then includes this JWT in subsequent requests to authenticate itself.

Authorization: JWTs can contain claims about the user's permissions or roles. These claims can be used by the server to authorize the user's access to certain resources or perform certain actions within the application.

Stateless Sessions: Unlike traditional session-based authentication mechanisms, JWTs are stateless. This means that the server does not need to store session state on the server-side, which can improve scalability and reduce the burden on the server.

Information Exchange: JWTs can be used to securely exchange information between different parties in a web application. For example, a server can issue a JWT containing user information, which can then be passed to a third-party service for further processing.


## Rate-Limit 
In an Express.js application, rate limiting is a technique used to limit the number of requests a client can make to an API within a certain period of time. This is often done to prevent abuse of the server's resources and to ensure fair usage for all clients. There are several rate limiting middleware packages available for Express.js, one popular choice being express-rate-limit.

Here's how you can use express-rate-limit in your Express.js application:

First, you need to install the express-rate-limit module:
```npm install express-rate-limit```

Then, you can use it in your Express application to set up rate limiting for specific routes or for all routes:
```javascript
const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();

// Apply rate limiting middleware for all routes
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

// Apply the rate limiter to all requests
app.use(limiter);

// Define your routes and handle requests
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start your Express server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

Rate limiting helps to protect your server from being overwhelmed by too many requests from a single client or a group of clients. It imposes restrictions on the number of requests a client can make within a certain period of time.

Rate limiting serves several purposes, including:

Preventing Abuse: Rate limiting helps prevent abuse of your server's resources by limiting the number of requests that a client can make within a given time frame. This can help mitigate denial-of-service (DoS) attacks, brute force attacks, and other forms of abuse.

Ensuring Fair Usage: Rate limiting ensures fair usage of your server's resources by limiting the number of requests each client can make. This prevents any single client from monopolizing the server's resources and allows other clients to access the server.

Improving Stability: By limiting the rate of incoming requests, rate limiting helps to stabilize your server and prevent it from becoming overloaded. This can improve the overall performance and reliability of your application.


## Connecting to MongoDB with Mongoose
When working with MongoDB and Express.js, Mongoose is a popular choice for interacting with MongoDB databases. Mongoose provides a straightforward way to model your application data and perform CRUD operations. Below is an example of how you can connect your Express.js application to a MongoDB database using Mongoose:

First, you need to install the mongoose module:
```npm install mongoose```

Then, you can use it in your Express application to connect to your MongoDB database:

```javascript
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// MongoDB connection URL
const mongoURI = 'mongodb://localhost:27017/mydatabase';

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Define your routes and handle requests
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start your Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

In this example:

We require express and mongoose modules.
We define the MongoDB connection URL. Replace 'mongodb://localhost:27017/mydatabase' with your MongoDB connection URL, including the database name.
We use mongoose.connect() to connect to MongoDB. The useNewUrlParser and useUnifiedTopology options are recommended to avoid deprecation warnings.
We handle successful and failed connection attempts with .then() and .catch() respectively.
We define a basic route handler for the root route ('/').


Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a straightforward, schema-based solution to model your application data. Key features of Mongoose include:

Schema Definition: Mongoose allows you to define schemas for your data models. Schemas define the structure of documents within a collection, including the fields and their types, validation rules, default values, and more.

Model Creation: Once you have defined a schema, you can create Mongoose models based on that schema. Models represent collections in MongoDB and provide an interface for interacting with the database.

CRUD Operations: Mongoose provides methods for performing CRUD (Create, Read, Update, Delete) operations on MongoDB documents. These methods are intuitive and easy to use, allowing you to interact with your data in a straightforward manner.

Middleware: Mongoose supports middleware functions that allow you to define pre and post hooks for various operations, such as validation, saving, updating, and removing documents. Middleware functions provide a way to execute custom logic before or after database operations.


## Creating a schema with mongoose
Creating a schema with Mongoose involves defining the structure of your data model. Schemas in Mongoose are blueprints that define the shape of documents within a MongoDB collection. Here's how you can create a schema and a corresponding model using Mongoose in your Express.js application:

First, ensure you have mongoose installed:
```npm install mongoose```

Then, you can define a schema and create a model using Mongoose:
```javascript
const mongoose = require('mongoose');

// Define a schema for your data model
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  age: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create a model based on the schema
const User = mongoose.model('User', userSchema);

// Export the model to use in other parts of your application
module.exports = User;
```

Field Definitions: Each field in the schema corresponds to a property of the document. You can define the data type of each field (String, Number, Date, Boolean, etc.), as well as additional properties such as required, default, unique, min, max, enum, etc.

Schema Options: You can provide various options to the schema, such as setting the collection name, specifying timestamps (timestamps: true), enabling versioning (versionKey: false), etc.

## Using Bcrypt for Password Hashing

Open the file where you handle user authentication (e.g., auth.js or userController.js) and follow the steps below.

Step 1: Import the bcrypt package
Import the bcrypt package at the top of your file:

```bash
const bcrypt = require('bcrypt');
```

Step 2: Hashing Passwords
When creating or updating a user's password, use bcrypt to hash the password before storing it in the database:

```javascript
const saltRounds = 10;

// Example: Creating a new user
const createUser = async (username, password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    // Store hashedPassword in the database along with other user details
    console.log('User created with hashed password:', hashedPassword);
  } catch (error) {
    console.error('Error creating user:', error);
  }
};
```

Step 3: Comparing Passwords
When authenticating a user, compare the provided password with the hashed password stored in the database using bcrypt's compare method:

```javascript
// Example: Authenticating a user
const authenticateUser = async (username, password) => {
  try {
    // Retrieve hashed password from the database based on the username
    const hashedPassword = 'hashedPasswordFromDatabase'; // Replace with actual hashed password
    const match = await bcrypt.compare(password, hashedPassword);
    if (match) {
      console.log('Authentication successful');
    } else {
      console.log('Authentication failed: Incorrect password');
    }
  } catch (error) {
    console.error('Error authenticating user:', error);
  }
};
```

Conclusion
By following this codelab, you've learned how to use the bcrypt package in Express.js to securely hash and compare passwords, enhancing the security of your application's authentication system. Remember to always handle sensitive user data with care and follow best practices for password storage and authentication.

## Using Morgan for Request Logging

Step 1: Import the Morgan package
Import the Morgan package at the top of your main file:
```javascript
const morgan = require('morgan');
```

Step 2: Configure Morgan Middleware
Add Morgan as middleware to your Express application to log HTTP requests. You can choose the logging format according to your preferences. For example, to log in the "combined" format:

```javascript
const morganJSONFormat = () => JSON.stringify({
    method: ':method',
    url: ':url',
    http_version: ':http-version',
    remote_addr: ':response-time',
    status: ':status',
    content_length: ':res[content-length]',
    timestamp: ':date[iso]',
    user_agent: ':user-agent',
});

const logFilePath = path.join(__dirname, 'access.log' );


const accessLogStream = fs.createWriteStream(logFilePath, {flags: 'a'});



app.use(morgan(morganJSONFormat(), {stream: accessLogStream}));
```

What the code does:
morganJSONFormat: This is a function that defines a custom log format using Morgan tokens. Morgan allows you to define custom log formats by specifying tokens that will be replaced with actual request information when a request is logged. In this function:

:method, :url, :http-version, :response-time, :status, :res[content-length], :date[iso], and :user-agent are Morgan tokens representing various request properties such as HTTP method, URL, HTTP version, response time, status code, content length, timestamp, and user agent respectively.
These tokens will be replaced with actual values from the HTTP request when logging.
The function then converts the formatted log information into a JSON string.
logFilePath: This variable specifies the path to the log file where the HTTP request logs will be written. It uses the path.join() method to join the directory name of the current module (__dirname) with the file name 'access.log'.

accessLogStream: This variable creates a writable stream using Node.js's fs.createWriteStream() method. It specifies the logFilePath as the file where the stream will write data. The { flags: 'a' } option indicates that the stream will append data to the file if it already exists, or create the file if it doesn't exist.

app.use(): This is an Express.js middleware registration function. Here, it's used to register the Morgan middleware with the Express application. The morgan() function takes two arguments:

The first argument is the custom log format defined by the morganJSONFormat function.
The second argument is an options object specifying the stream where the log output will be written. Here, it's set to accessLogStream, indicating that the log entries will be written to the access.log file.




