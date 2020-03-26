# prismagram
Instagram clone with Express + Prisma + React and React Native

# install package
```
npm add graphql-yoga(no need express)
npm add nodemon -D
npm add babel-cli -D
npm add dotenv
npm add @babel/{node,preset-env,core}
```

# import, require

# babel preset-env

# GraphQL 
    - over-fetching
    - under-fetching 
    
# Graphql install package
- graphql schema와 resolver를 파일로 나누어 관리하기 위한 merge package
```
npm add graphql-tools
npm add merge-graphql-schemas
```

# prisma
```
npm add prisma-client-lib
``` 

## User Stories
- [x] Create account
- [x] Request Secret
    - `npm add nodemailer`
    - `npm add nodemailer-sendgrid-transport`
- [x] Confirm Secret (Login)
    - `npm add passport passport-jwt`
    - `npm add jsonwebtoken`
- [x] Like / Unlike a photo
- [x] Comment on a photo
- [x] Search by user
- [x] Search by location
- [x] Follow / Unfollow User
- [x] Edit my profile
- [x] See user profile
- [x] See full photo
- [x] Upload photo
- [x] Edit the photo(Delete)
- [x] See the feed
    - prisma @createdAt, @updatedAt 
- [x] Send private Message
- [x] See rooms
- [x] See room
- [x] Receive Message (Realtime)
    - prisma subscription: 데이터 조작(Creat, Update, Delete)에 대한 리스너 기능 제공
