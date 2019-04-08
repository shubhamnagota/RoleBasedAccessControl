# Role Based Access Control

This is a project which let's you check the actions, user can perform on the resources. It manages everything in memory. There is no framework or database used.

### Technology Used

- [Node.js](https://nodejs.org/) - evented I/O for the backend

### How to run

This application is tested on Node.js v10.x

```sh
$ git clone https://github.com/shubhamnagota/RoleBasedAccessControl
$ cd RoleBasedAccessControl
$ node app.js
```

### Testing

- On every start of the application, it will create some dummy data which will be shown on the console.
- If you want to quit the program, you can type `exit`.
- Type the input as `username`<space>`action`<space>`resource`.
- The output will be shown based on following parameters:
  - If all the inputs are given (username, action, resource)
  - If the given inputs are valid (exists in memory)
  - If user can access the resource, the output will be `Authorized`.
  - If user is not allowed to access, the output will be `Not Authorized`

##### NOTE : You can add your data in dummy data folder according to the files.
