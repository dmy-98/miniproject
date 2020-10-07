# TeamB-Backend - Movie Apps

Creating Movie Apps. This app has RESTful endpoint for Movie Apps CRUD operation

# RESTful endpoints

## POST local:3000/register : 
Register User
```json
Request Header : not needed
```
```json
Request Body: {
  "fullName": "<user fullName>",
  "email": "<user email>",
  "password": "<user password>",
  "profilePicture": "<user profilePicture>"
}
```
```json
Response: (201 - Created){
  "access_token": "<your access token>"
}
```
```json
Response: (409 - Conclict){
  "Email already registered!"
}
```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```

## POST local:3000/login :
Login User
```json
Request Header : not needed
```
```json
Request Body: {
  "email": "<user email>",
  "password": "<user password>"
}
```
```json
Response: (201 - OK){
  "access_token": "<your access token>"
}
```
```json
Response: (400 - Bad Request){
  "Password incorrect!"
}
```
```json
Response: (404 - Not Found){
  "Password incorrect!"
}
```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```

## POST localhost:3000/admin/movies : 
Create Movie
```json
Request Header : {
  "access_token": "<your access token">
}
```
```json
Request Body: {
  "id": <movie id>,
  "title": "<movie title>",
  "synopsis": "<movie synopsis>",    
  "trailer": "<movie trailer>",
  "poster": "<movie poster>",      
  "genre": "<movie genre>",
  "releaseDate": "<movie releaseDate(yyyy-mm-dd)>",
  "director": "<movie director>",
  "featuredSong": "<movie featuredSong>",
  "budget": <movie budget>
}
```
```json
Response: (201 - OK){
  "id": <movie id>,
  "title": "<movie title>",
  "synopsis": "<movie synopsis>",    
  "trailer": "<movie trailer>",
  "poster": "<movie poster>",      
  "genre": "<movie genre>",
  "releaseDate": "<movie releaseDate(yyyy-mm-dd)>",
  "director": "<movie director>",
  "featuredSong": "<movie featuredSong>",
  "budget": <movie budget>,
  "updatedAt": "<movie updatedAt>",
  "createdAt": "<movie createAt>"
}
```
```json
Response: (409 - Conclict){
  "Movie already exist!"
}
```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```

## DELETE localhost:3000/admin/movies/:MovieId : 
Delete Movie
```json
Request Header : {
  "access_token": "<your access token">
}
```
```json
Request Body : not needed
```
```json
Response: (202 - Accepted) {
  "1"
}
```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```

## GET localhost:3000/admin/movies/edit/:MovieId : 
Edit Movie Form
```json
Request Header : {
  "access_token": "<your access token">
}
```
```json
Request Body : not needed
```
```json
Response: (200 - OK) {
  "id": <movie id>,
  "title": "<movie title>",
  "synopsis": "<movie synopsis>",    
  "trailer": "<movie trailer>",
  "poster": "<movie poster>",      
  "genre": "<movie genre>",
  "releaseDate": "<movie releaseDate(yyyy-mm-dd)>",
  "director": "<movie director>",
  "featuredSong": "<movie featuredSong>",
  "budget": <movie budget>,
  "updatedAt": "<movie updatedAt>",
  "createdAt": "<movie createAt>"
}
```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```

## PUT localhost:3000/admin/movies/edit/:MovieId : 
Edit Movie
```json
Request Header : {
  "access_token": "<your access token">
}
```
```json
Request Body : {
  "title": "<movie title>",
  "synopsis": "<movie synopsis>",    
  "trailer": "<movie trailer>",
  "poster": "<movie poster>",      
  "genre": "<movie genre>",
  "releaseDate": "<movie releaseDate(yyyy-mm-dd)>",
  "director": "<movie director>",
  "featuredSong": "<movie featuredSong>",
  "budget": <movie budget>
}
```
```json
Response: (200 - OK) {
  "1"
}
```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```

## GET localhost:3000/admin/casts : 
Casts List
```json
Request Header : {
  "access_token": "<your access token">
}
```
```json
Request Body : not needed
```
```json
Response: (200 - OK) [
  {
    "id": <cast id>,
    "name": "<cast name>",
    "image": "<cast image>",
    "createdAt": "<cast createdAt>",
    "updatedAt": "<cast updateddAt>"
  }
]
```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```

## POST localhost:3000/admin/casts : 
Add Cast
```json
Request Header : {
  "access_token": "<your access token">
}
```
```json
Request Body : {
  "name": "<cast name>",
  "image": "<cast image>"
}
```
```json
Response: (201 - Created) [
  {
    "id": <cast id>,
    "name": "<cast name>",
    "image": "<cast image>",
    "createdAt": "<cast createdAt>",
    "updatedAt": "<cast updateddAt>"
  }
]
```
```json
Response: (409 - Conflict){
  "<Name already exist!>"
}
```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```

## GET localhost:3000/admin/casts/:id : 
Cast Edit Form
```json
Request Header : {
  "access_token": "<your access token">
}
```
```json
Request Body : not needed
```
```json
Response: (200 - OK) {
  "id": <cast id>,
  "name": "<cast name>",
  "image": "<cast image>",
  "createdAt": "<cast createdAt>",
  "updatedAt": "<cast updateddAt>"
}
```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```

## PUT localhost:3000/admin/casts/:id : 
Cast Edit 
```json
Request Header : {
  "access_token": "<your access token">
}
```
```json
Request Body : {
  "name": "<cast name>",
  "image": "<cast image>"
}
```
```json
Response: (200 - OK) [
  1
}
```
```json
Response: (409 - Internal Server Error){
  "<Error Message>"
}
```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```

## DELETE localhost:3000/admin/casts/:id : 
Cast Delete 
```json
Request Header : {
  "access_token": "<your access token">
}
```
```json
Request Body : not needed
```
```json
Response: (202 - Accepted) [
  1
}
```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```

## DELETE localhost:3000/admin/casts/:id : 
Cast Delete 
```json
Request Header : {
  "access_token": "<your access token">
}
```
```json
Request Body : not needed
```
```json
Response: (202 - Accepted) [
  1
}
```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```

## GET localhost:3000/admin/movie-cast/:id : 
MovieCast List 
```json
Request Header : {
  "access_token": "<your access token">
}
```
```json
Request Body : not needed
```
```json
Response: (200 - OK) [
  {
    "id": <MovieCast id>,
    "MovieId": "<MovieCast MovieId>",
    "CastId": "<MovieCast CastId>",             
    "createdAt": "<MovieCast CreatedAt>",
    "updatedAt": "<MovieCast UpdateddAt>"
  }
}
```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```
## POST localhost:3000/admin/movie-cast/:id : 
MovieCast List 
```json
Request Header : {
  "access_token": "<your access token">
}
```
```json
Request Body : {
  "MovieId": "<MovieCast MovieId>",
  "CastId": "<MovieCast CastId>"
}
```
```json
Response: (201 - Created){
  "id": <MovieCast id>,
  "MovieId": "<MovieCast MovieId>",
  "CastId": "<MovieCast CastId>",             
  "createdAt": "<MovieCast CreatedAt>",
  "updatedAt": "<MovieCast UpdateddAt>"
}
```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```

## GET localhost:3000/admin/movie-cast/movie/:movie : 
MovieCast List by Movie 
```json
Request Header : not needed
```
```json
Request Body : not needed
```
```json
Response: (200 - OK){
  "Movie": {
    "id": <Movie id>,      
    "title": "<Movie title>",
    "synopsis": "<Movie synopsis>",
    "trailer": "<Movie trailer>",
    "poster": "<Movie poster>",
    "genre": "<Movie genre>",
    "releaseDate": "<Movie releaseDate>",
    "director": "<Movie director>",
    "featuredSong": "<Movie featuredSong>",
    "budget": <Movie budget>,
    "createdAt": "<Movie createdAt>",
    "updatedAt": "<Movie updatedAt>"
    },
    "Cast": [
      {            
        "id": <Cast id>,
        "name": "<Cast name>",
        "image": "<Cast image>",
        "createdAt": "<Cast createdAt>",
        "updatedAt": "<Cast updatedAt>"
      }
    ]
}
```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```
## GET localhost:3000/admin/movie-cast/cast/:cast : 
MovieCast List by Cast
```json
Request Header : not needed
```
```json
Request Body : not needed
```
```json
Response: (200 - OK){
  "Cast": {
    "id": <Cast id>,
    "name": "<Cast name>",
    "image": "<Cast image>",
    "createdAt": "<Cast createdAt>",
    "updatedAt": "<Cast updatedAt>"
    },
    "Movie": [
      {
        "id": <Movie id>,      
        "title": "<Movie title>",
        "synopsis": "<Movie synopsis>",
        "trailer": "<Movie trailer>",
        "poster": "<Movie poster>",
        "genre": "<Movie genre>",
        "releaseDate": "<Movie releaseDate>",
        "director": "<Movie director>",
        "featuredSong": "<Movie featuredSong>",
        "budget": <Movie budget>,
        "createdAt": "<Movie createdAt>",
        "updatedAt": "<Movie updatedAt>"
      }
    ]
  }

```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```

## GET localhost:3000/admin/movie-cast/edit/:edit : 
MovieCast Edit Form
```json
Request Header : {
  "access_token": "<your access token">
}
```
```json
Request Body : not needed
```
```json
Response: (200 - OK){
  "id": <MovieCast id>,
  "MovieId": <MovieCast MovieId>,
  "CastId": <MovieCast MovieId>,
  "createdAt": "<MovieCast createdAt>",
  "updatedAt": "<MovieCast updatedAt>"
}
```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```

## PUT localhost:3000/admin/movie-cast/edit/:edit : 
MovieCast Edit
```json
Request Header : {
  "access_token": "<your access token">
}
```
```json
Request Body : {
  "MovieId": <MovieCast MovieId>,
  "CastId": <MovieCast CastId>
}
```
```json
Response: (200 - OK){
  1
}
```
```json
Response: (409 - Conflict){
  "Cast already in that movie!"
}
```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```

## DELETE localhost:3000/admin/movie-cast/:id : 
MovieCast Delete
```json
Request Header : {
  "access_token": "<your access token">
}
```
```json
Request Body : not needed
```
```json
Response: (202 - Accepted){
  1
}
```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```

## GET localhost:3000/users : 
Users List
```json
Request Header : {
  "access_token": "<your access token">
}
```
```json
Request Body : not needed
```
```json
Response: (200 - OK)[
  {
    "id": <user id>,
    "fullName": "<user fullName>",
    "email": "<user email>",
    "password": "<user password>",
    "profilePicture": "<user profilePicture>",
    "role": "<user role>",
    "createdAt": "<user createdAt>",
    "updatedAt": "<user updatedAt>"
  }
]
```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```

## GET localhost:3000/users/edit : 
User Edit Form
```json
Request Header : {
  "access_token": "<your access token">
}
```
```json
Request Body : not needed
```
```json
Response: (200 - OK){
  "id": <user id>,
  "fullName": "<user fullName>",
  "email": "<user email>",
  "password": "<user password>",
  "profilePicture": "<user profilePicture>",
  "role": "<user role>",
  "createdAt": "<user createdAt>",
  "updatedAt": "<user updatedAt>"
}

```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```

## PUT localhost:3000/users/edit : 
User Edit 
```json
Request Header : {
  "access_token": "<your access token">
}
```
```json
Request Body : {
  "fullName": "<user fullName>",
  "profilePicture": "<user profilePicture>"
}
```
```json
Response: (200 - OK)[
  1
}
```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```
## DELETE localhost:3000/users : 
User Delete
```json
Request Header : {
  "access_token": "<your access token">
}
```
```json
Request Body : not needed
```
```json
Response: (200 - OK)[
  1
}
```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```

## GET localhost:3000/movies?page=:page 
Movie List
```json
Request Header : not needed
```
```json
Request Body : {
  
}

```
```json
Response: (200 - OK)[
  {
    "id": <Movie id>,      
    "title": "<Movie title>",
    "synopsis": "<Movie synopsis>",
    "trailer": "<Movie trailer>",
    "poster": "<Movie poster>",
    "genre": "<Movie genre>",
    "releaseDate": "<Movie releaseDate>",
    "director": "<Movie director>",
    "featuredSong": "<Movie featuredSong>",
    "budget": <Movie budget>,
    "createdAt": "<Movie createdAt>",
    "updatedAt": "<Movie updatedAt>"
  }
]

```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```

## POST localhost:3000/movies : 
Movie List
```json
Request Header : not needed
```
```json
Request Body : {
    "title": "<Movie title>"
  }
```
```json
Response: (200 - OK)[
  {
    "id": <Movie id>,      
    "title": "<Movie title>",
    "synopsis": "<Movie synopsis>",
    "trailer": "<Movie trailer>",
    "poster": "<Movie poster>",
    "genre": "<Movie genre>",
    "releaseDate": "<Movie releaseDate>",
    "director": "<Movie director>",
    "featuredSong": "<Movie featuredSong>",
    "budget": <Movie budget>,
    "createdAt": "<Movie createdAt>",
    "updatedAt": "<Movie updatedAt>"
  }
]

```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```

## GET localhost:3000/genre:genre : 
Movie List by Genre
```json
Request Header : not needed
```
```json
Request Body : 
```
```json
Response: (200 - OK)[
  {
    "id": <Movie id>,      
    "title": "<Movie title>",
    "synopsis": "<Movie synopsis>",
    "trailer": "<Movie trailer>",
    "poster": "<Movie poster>",
    "genre": "<Movie genre>",
    "releaseDate": "<Movie releaseDate>",
    "director": "<Movie director>",
    "featuredSong": "<Movie featuredSong>",
    "budget": <Movie budget>,
    "createdAt": "<Movie createdAt>",
    "updatedAt": "<Movie updatedAt>"
  }
]

```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```

## GET localhost:3000/movies/:id : 
Movie List by Id
```json
Request Header : not needed
```
```json
Request Body : 
```
```json
Response: (200 - OK)[
  {
    "id": <Movie id>,      
    "title": "<Movie title>",
    "synopsis": "<Movie synopsis>",
    "trailer": "<Movie trailer>",
    "poster": "<Movie poster>",
    "genre": "<Movie genre>",
    "releaseDate": "<Movie releaseDate>",
    "director": "<Movie director>",
    "featuredSong": "<Movie featuredSong>",
    "budget": <Movie budget>,
    "createdAt": "<Movie createdAt>",
    "updatedAt": "<Movie updatedAt>"
  }
]

```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```

## GET localhost:3000/reviews/all : 
Reviews List 
```json
Request Header : "access_token": "<your access token>"
```
```json
Request Body : 
```
```json
Response: (200 - OK)[
    {
        "id": <Review id>,
        "UserId": <Review UserId>,
        "MovieId": <Review MovieId>,
        "review": "<Review review>",
        "rating": <Review Rating>,
        "share": <Review Share>,
        "createdAt": "<Review createdAt>",
        "updatedAt": "<Review updatedAtt>"
    }
```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```

