# 프로젝트 설명 
리액트를 배우기 시작하면서 만들어본 협업 툴입니다. 프로젝트 이름, 설명 등을 설정하며 이와 동시에 기한, 구하는 분야를 옵션으로 설정하였습니다. 
이와 더불어, UI를 개선하기 위해서 업무 혹은 모임에서의 일이 할당된 사람들의 이미지로 이를 나타낼 수 있도록 하였습니다 

|일시  	| 업데이트 내역  	|
|---	|---	|
| 2/10 ~ 2/13 	|  회원가입& 로그인 ~ 삭제까지 구현 	|
|  	|  	|
|  	|  	|


 ![image](https://user-images.githubusercontent.com/87590768/153748316-9f466ac6-12b8-4d54-9617-7cd394b3edd8.png)

## 페이지 설정 
![image](https://user-images.githubusercontent.com/87590768/153748570-6a8b3e42-2006-45c7-bdab-1ce07c0f78be.png)
useAuthContext 훅에서, 유저의 로그인 상태를 표현하는 authIsRedady와 dispatch 해준 user의 상태에 따라서 
conditional rendering을 구현했습니다. 따라서 초기에는 로그인 페이지와 회원가입 페이지로 이동하게 됩니다. 

## 회원가입 & 로그인 

![회원가입](https://user-images.githubusercontent.com/87590768/153748516-21c0d6c5-8573-43cf-bc3d-4ede95a6f16c.gif)

접속하면 가장 먼저 만나게 되는 페이지는 로그인 페이지와 회원가입 페이지입니다. 
이전에 클론코딩을 진행할 때는 보통 localstorage만을 이용해서 진행했지만 
이번 프로젝트에서 회원가입은 useSignup hook을 통해 firebase의 createUserWithEmailAndPassword를 통해서 이뤄지도록 구현했습니다.

### 심화 & 어려웠던 부분 
이전에 공부할 때와 달리 심화해서 진행해본 부분은 이미지 업로드 부분입니다. 이미지를 어떻게 저장할까에 대해서 고민하다 uid를 통해서 생성하기로 결정했습니다. 
![image](https://user-images.githubusercontent.com/87590768/153749047-de26aaee-ed00-4c74-9bb5-12a519893140.png)
유저 고유의 uid를 통해서 폴더를 만들고 이후에 구별하기 쉽도록 하기 위해 유저가 업로드한 파일의 이름인 name을 통해서 저장이 되도록 구현했습니다. 

로그인 페이지 역시 회원가입의 로직과 크게 다르지 않습니다. online인 경우 초록불로 상태를 표현해주기 위해서 update를 통해서 online 상태를 추가해준 점이 특징입니다. 

## 홈페이지(대쉬보드) 
![image](https://user-images.githubusercontent.com/87590768/153749376-55af9aa2-eb64-48db-af55-1e968dfe6c52.png)
대쉬 보드 좌측 상단에는 환영 문구를, 우측에는 가입한 모든 유저와 온라인인 계정을 초록색 원으로 확인할 수 있습니다. 
대쉬 보드는 Dashboard + ProjectList로 구성되어 있으며, 이후에 업데이트 등을 원할하게 하기 위해서 두 컴포넌트를 분리해서 진행했습니다. 
 ProjectList는 개설된 프로젝트로 이동할 수 있도록 목록을 뿌려주는 역할을 합니다. 
 ![image](https://user-images.githubusercontent.com/87590768/153749542-89ccc31a-8990-4be7-a27e-db16f32077d1.png)

### 심화 & 어려웠던 부분 
개발자 친구님의 도움으로 optional chaining에 대해서 공부해볼 수 있는 좋은 기회였습니다. 마운트할 때 아직 데이터가 넘어오지 않은 상태에서 이를 사용하려 할 때 
에러가 계속해서 났지만 optional chaining을 통해서 해결할 수 있었습니다. (그 과정에서 map 사용법을 완벽하게 마스터할 수 있었습니다) 


## 새로운 프로젝트 생성 
![글작성](https://user-images.githubusercontent.com/87590768/153749820-0f393317-7402-487c-bf2c-d21cd5ccfc6a.gif)
새로운 프로젝트를 생성하는 부분입니다. 코드는 많지 않지만 project에 여러 오브젝트가 중첩되어 있어 구조적으로는 복잡하게 되어 있는 부분입니다. 
구조가 복잡하다 보니, 추후에 map으로 뿌려줄 때도 코드가 복잡해져 이후에 진행할 프로젝트에서는 구조부터 생각해보고 개선해보려 합니다. 
프로젝트를 추가할 때는 useFirestore 중에서 addDocument를 사용해서 진행했습니다. 
![image](https://user-images.githubusercontent.com/87590768/153750164-c466bb3d-5282-40fb-8131-f2cf3a9a1aea.png)

## 삭제 
![삭제](https://user-images.githubusercontent.com/87590768/153750363-420b6939-7346-4229-9cdb-33fd6a8f1a43.gif)

그렇게 개설된 프로젝트를 삭제하는 기능 역시 개발하였습니다. 
![image](https://user-images.githubusercontent.com/87590768/153750417-da856973-3ae6-4afb-990d-036574c650a3.png)
유저의 고유한 uid와 id가 동일한 경우에만 사용할 수 있도록 만들었으며 delte와 관련해서 useFirestore에 deleteDocument를 구현했습니다. 

![image](https://user-images.githubusercontent.com/87590768/153750475-797a5d9b-7c9b-491d-96eb-5219f1997a46.png)

----------------------------------- ----------------------------------- 이상 ver.0.1 ----------------------------------- -----------------------------------

### 추가할 기능 
- [ ] router v6 로 업데이트 하기 

- [ ] firebase v9 로 업데이트 하기 

- [ ] 로그인 옆에 회원가입 버튼 
