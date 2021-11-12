첫 프로젝트 구조을 시작합니다.

1.
backend/ 디렉토리에
npm init 명령으로 package.json 생성

Press ^C at any time to quit.
package name: (esg_project)
version: (1.0.0) 0.1.0
description: 첫 프로젝트 시작
entry point: (index.js)
test command:
git repository:
keywords:
author: hansei-it
license: (ISC)
About to write to F:\Projects\back-end\esg_project\package.json:

{
  "name": "esg_project",
  "version": "0.1.0",
  "description": "첫 프로젝트 시작",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "hansei-it",
  "license": "ISC"
}

Is this OK? (yes)

2. DB 구축을 위한 sequelize 모듈 설치
/backend> npm install mysql2 sequelize-cli sequelize
+ mysql2@2.3.3-rc.0
+ sequelize-cli@6.3.0
+ sequelize@6.9.0
설치 완료

3. sequelize 모듈을 이용한 기본 설정 파일 생성 및 모델, 디렉토리 생성
npx sequelize init
Created "config\config.json"
Successfully created models folder at "F:\Projects\back-end\esg_project\backend\models".
Successfully created migrations folder at "F:\Projects\back-end\esg_project\backend\migrations".
Successfully created seeders folder at "F:\Projects\back-end\esg_project\backend\seeders".

4. 이그노어 파일 추가 및 (node_moudule) 폴더 이그노어로 설정

5. express 프레임워크에 필요한 기본 모듈 설치
npm install express cookie-parser express-session dotenv ejs
npm install -D nodemon

6. .env파일 생성 및 publicdir 폴더 생성 및 index.html 작성, server.js 기본 코드 작성 및 동작 테스트
npm start (5000포트로 동작 확인.)

7. 더 많은 로그 정보 출력을 위한 morgan 모듈 설치및  테스트를 위한 MySQL에서 DB database_esg 생성
config/config.json파일의 development에 DB 이름, user 이름, user pw 저장
server.js에 로그를 위한 morgan 미들웨어와 sequelize 초기화 후 동작 테스트
npm install morgan
npm start (5000포트로 동작 확인.)

8. 루트에 있는 .env 파일을 backend폴더로 이동(원래 backend폴더에 있어야 했음. root 디렉토리에 잘 못 만듬.)
git 명령 삭제 후 이동



















