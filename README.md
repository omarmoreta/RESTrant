# RESTrant

RESTrant project for the bootcamp to help students with any issues.

REST-Rant is an app where users can review restaurants.

## Routes Table

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

## Data Schema

Data will be stored in MongoDB with the help of Mongoose.

### Places

| Field    | Type   | Example Value   |
| -------- | ------ | --------------- |
| name     | string | "McSteaks"      |
| city     | string | "Las Vegas"     |
| state    | string | "Montana"       |
| pic      | string | "place img url" |
| cuisines | string | "Fine Cuisine"  |

### Rants

| Field    | Type                 | Example Value                                                   |
| -------- | -------------------- | --------------------------------------------------------------- |
| \_id     | ObjectId             | ObjectId("507f1f77bcf86cd799439011")                            |
| place_id | ref(places) ObjectId | "#/relationship/Data Source Name/Database Name/Collection Name" |
| rant     | boolean              | true/false                                                      |
| rating   | number               | 3                                                               |
| comment  | string               | "It was amazing!"                                               |
| reviewer | string               | "John Doe"                                                      |

### Images

H-Thai-ML Photo by [Eiliv Aceron](https://unsplash.com/@shootdelicious?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

Coding Cat Cafe Photo by [Hanny Naibaho](https://unsplash.com/@hannynaibaho?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

Default Photo by [Mgg Vitchakorn](https://unsplash.com/@mggbox?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
