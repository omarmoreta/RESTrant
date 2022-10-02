# RESTrant

RESTrant project for the bootcamp to help students with any issues.

REST-Rant is an app where users can review restaurants.

| Method | Path                     | Purpose                                        |
| ------ | ------------------------ | ---------------------------------------------- |
| GET    | /                        | Home Page                                      |
| GET    | /places                  | Places Index Page                              |
| POST   | /places                  | Create New Place                               |
| GET    | /places/new              | Form page for creating a new place             |
| GET    | /places/:id              | Details about a particular place               |
| PUT    | /places/:id              | Update a particular place                      |
| GET    | /places/:id/edit         | Form page for editing an existing place        |
| DELETE | /places/:id              | Delete a particular place                      |
| POST   | /places/:id/rant         | Create a rant about a particular place         |
| DELETE | /places/:id/rant/:rantid | Delete a rant about a particular place         |
| GET    | \*                       | 404 Page (matches any route not defined above) |
