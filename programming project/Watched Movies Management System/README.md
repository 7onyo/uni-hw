# Watched Movies Management System - C++ CLI App

A command-line application for managing watched movies and user interactions, developed in **C++**.  
This is a **team project** completed by **David Cojocaru** and **Victor-Daniel Luca**.

---

## Project Overview

- Application split into **two mains**:
  - `main1.exe` – handles movie database management.
  - `main2.exe` – handles user interactions and list management.

---

## Data Structures

Classes used in the application:

- **Movie**  
  `string id, string title, string url, float rating, int runtime, int year, string genres, int numVotes, string directors`

- **User**  
  `string name, List toWatch, List watched`

- **List**  
  `string name, vector<string> items`

- **MovieManager**  
  `vector<Movie> movies`

---

## CSV Files

- `users.csv` - stores credentials for each user (`Username` as primary key)
- `movies.csv` - stores the complete list of movies:

- `<username>_toWatch.csv` - movies a user plans to watch
- `<username>_watched.csv` - movies a user has already watched

---

## Executable Commands

### main1.exe

```bash
./main1.exe help
# Display all possible commands

./main1.exe viewMovies
# View all available movies

./main1.exe addMovieToCsv <id> <title> <url> <rating> <runtime> <year> <genres> <numVotes> <directors>
# Add a new movie

./main1.exe search <field> <value>
# Search movies by a specific field
```

### main2.exe

```bash
./main2.exe help
# Display all possible commands

./main2.exe registerUser <userName>
# Register a new user

./main2.exe viewAllUsers
# View all users (names and lists)

./main2.exe viewUser <userName>
# For a given user, view their lists

./main2.exe addMovie <title> <user> <list_name>
# Add a movie to a list

./main2.exe deleteMovie <title> <user> <list_name>
# Remove a movie from a list
```

## How to Compile & Run

1. Compile the project:

```bash
g++ -Iinclude main1.cpp src/User.cpp src/utils.cpp src/Movie.cpp src/List.cpp src/MovieManager.cpp -o main1.exe

g++ -Iinclude main2.cpp src/User.cpp src/utils.cpp src/Movie.cpp src/List.cpp -o main2.exe
```

2. Run exe file:
```bash
#Example 1:
./main1 searchMovies title "Harry"

#Example 2:
./main2 addMovie "Casablanca" dani toWatch
```