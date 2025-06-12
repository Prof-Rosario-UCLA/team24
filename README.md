# Overview
This application is a MERN full-stack logic-shooter game where players will have to decide where to place their shooters so they can attack their enemies and deduct off their life-span before the enemies escape alive. We used React+Vite on the frontend, Node, on the backend, Express for our api endpoints, and a ODM, Mongodb for our database along with Redis for caching. Other features such as PWA, Bycrypt, Cookies, and JWT is also used. Both frondend and backend have their respective Dockerfiles and Kubernetes manifests.
![image](https://github.com/user-attachments/assets/a1f49055-7607-42df-ae41-8a2cd3508990)

## Deployment

### Setup

#### 1. Clone the GitHub Repository

```bash
git clone https://github.com/Prof-Rosario-UCLA/team24.git
cd team24
 ```

#### 2. '.env' File
Create a .env file in the root of the project and add the following environment variable:
```bash
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority
JWT_SECRET=<jwt>
PORT=3000
 ```

#### 3. Install Dependencies

Make sure you have Vite, Node.js, and  Redis installed, then install the required packages:
Run this on both backend and frontend directories
```bash
npm install
 ```
### 4. Local Run
For local run, run 'npx vite' in the frontend and 'npm start' in the backend. Go to the link that npx vite takes you too. 

### 5. Deployment Run

For CI/CD, add the following Github Secrets : 
```bash

 ```
```bash
docker build -t gcr.io/<your-project-id>/team24-app .
docker push gcr.io/<your-project-id>/team24-app
 ```
```bash
Apply the manifest yaml files
kubectl apply -f k8s/certificate.yaml
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl apply -f k8s/frontendconfig.yaml
kubectl apply -f k8s/ingress.yaml
 ```


## API Endpoints 
* note: The example responses shown are for illustration only. Actual responses may vary depending on the current state of the database. Please use your own VALID data when testing the endpoints.
  
Check Password Hash - Check if a user's password is hashed (bcrypt).
Endpoint: GET /api/auth/check-password-hash/:username
Example: /api/auth/check-password-hash/test1

```bash
{
  "username": "test1",
  "isHashed": true
}
```

User Login - Login user with username and password, returns auth cookie.
Endpoint: POST /api/auth/login
Example request body:

```bash
{
  "username": "test1",
  "password": "mypassword123"
}
```
```bash
{
  "message": "Logged in"
}
```
User Logout - Logout user by clearing the auth cookie.
Endpoint: POST /api/auth/logout
Example response:

```
bash{
  "message": "Logged out"
}
```

View Game Progress by Username - Retrieve game progress details for a player, cached via Redis.
Endpoint: GET /api/gameprogress/viewGameProgress/:username
Example: /api/gameprogress/viewGameProgress/test1

```
bash {
  "_id": "60a...",
  "gamer": {
    "_id": "60a...",
    "username": "test1",
    "avatarname": "Dragonball"
  },
  "lastlogin": "2025-06-11T18:24:43.511Z",
  "timePlayed": 3600,
  "progress": {
    "levelFinished": 5,
    "totalPoints": 5000
  }
}
 ```

View Progress for All Users - Get top 5 players' progress sorted by level finished.
Endpoint: GET /api/gameprogress/viewPlayerProgressAll
Example response:


```
bash [
  {
    "username": "test1",
    "levelFinished": 5,
    "timePlayed": 3600
  },
  {
    "username": "test2",
    "levelFinished": 4,
    "timePlayed": 2400
  }
]
```

![image](https://github.com/user-attachments/assets/90995fad-5c6f-4ffb-97c2-f778c6215aed)



Example: /api/auth/check-password-hash/test1
# TO RUN THE TEST SERVER(S)
1. (First time only): Create .env with variables provided for database in /backend/
2. Open /backend/ in a terminal, and run 'npm start' 
3. Open /frontend/ in a separate terminal, and run 'npx vite' or 'npx run dev' on port 5173
4. Test Login is:
- User: testuser3
- Password: test3 

# TO PLAY THE GAME
- Each Grass platform is an available spot to place a 2x2 tower on. 
- The top left tile of each grass platform is where you should hover and click (drag and drop later) to place the tower.
- Towers currently cost 50 coins, and you start with 100. Each kill of an enemy earns you 10 coins.
- There are now waves where after every subsequent wave kill, 2 additional enemies will spawn!
