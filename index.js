// Import json-server using require keyword, i.e., json-server library.
const jsonServer = require("json-server")

// Create our own server using create().
const employeeServer = jsonServer.create();

// Create path for JSON file (data) - router()
const router = jsonServer.router("db.json");

// Data comes to server in JSON format. We need to parse JSON (JSON String to JS Object)
const middleware = jsonServer.defaults()

// Allow server to use router and middleware
employeeServer.use(middleware);
employeeServer.use(router);

// Allow server to use router and middleware
// employeeServer.use(jsonServer.defaults());
// employeeServer.use(jsonServer.router("db.json"));

// Set up port for the server to run (default port)
PORT = 4000 || process.env.PORT;

// Listen to the requests coming to the port
employeeServer.listen(PORT, () => {
  console.log(`Server running successfully at port number, ${PORT}...`);
});


// const router = jsonServer.router("db.json")

