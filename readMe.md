
```
webdesignProject/
├── package-lock.json
├── package.json
├── readme
├── server.js
├── userData.json
├── node_modules/
├── public/
│   ├── auth.js
│   ├── cart.html
│   ├── cart.js
│   ├── checkout.html
│   ├── checkout.js
│   ├── company_intro.html
│   ├── customer_service.html
│   ├── index.html
│   ├── login.html
│   ├── login.js
│   ├── main.js
│   ├── mypage.html
│   ├── notice.html
│   ├── productDetail.html
│   ├── productDetail.js
│   ├── productList.json
│   ├── products.html
│   ├── products.js
│   ├── signup.html
│   ├── signup.js
│   ├── style.css
│   ├── todo/
│   ├── old/
│   └── source/
│       [some resources]
│       └── icons/
```

# 프로젝트 개요

이 프로젝트는 다음과 같은 주요 구성 요소와 디렉토리로 구성된 웹입니다.

## 루트 디렉토리
- **package-lock.json & package.json:** 프로젝트의 종속성과 버전을 나열한 npm 구성 파일입니다.(node.js)
- **readme:** 이 문서입니다.
- **server.js:** 웹 애플리케이션을 제공하기 위해 Node.js와 Express.js를 사용하는 주요 서버 측 스크립트입니다.
- **userData.json:** 사용자 데이터를 저장하는 JSON 파일입니다.

## public 디렉토리
- **auth.js:** 인증 관련 기능을 처리합니다.
- **cart.html & cart.js:** 쇼핑 카트 기능에 대한 페이지 및 스크립트입니다.
- **checkout.html & checkout.js:** 결제 프로세스에 대한 페이지 및 스크립트입니다.
- **index.html:** 웹 애플리케이션의 메인 랜딩 페이지입니다.
- **login.html & login.js:** 사용자 로그인을 위한 페이지 및 스크립트입니다.
- **main.js:** 다양한 기능을 조정하는 주요 JavaScript 파일일 가능성이 높습니다.
- **productDetail.html & productDetail.js:** 상세 제품 정보를 표시하는 페이지 및 스크립트입니다.
- **productList.json:** 제품 목록을 포함하는 JSON 파일입니다.
- **products.html & products.js:** 제품 목록을 표시하는 페이지 및 스크립트입니다.
- **signup.html & signup.js:** 사용자 등록을 위한 페이지 및 스크립트입니다.
- **style.css:** 웹 애플리케이션의 메인 스타일 시트입니다.

## 추가 디렉토리
- **node_modules:** 프로젝트에 필요한 모든 npm 패키지를 포함합니다.
- **source:** 프로젝트에서 사용되는 이미지 및 아이콘을 포함합니다.

# 자세한 설명 및 주요 기능

## 루트 디렉토리

### server.js
- Node.js와 Express.js를 사용하여 서버를 설정합니다.
- 들어오는 요청을 적절한 처리기로 라우팅합니다.
- 미들웨어 및 서버 측 로직을 관리합니다.

### userData.json
- JSON 형식으로 사용자 데이터를 저장합니다.
- 사용자 인증 및 개인화를 위해 사용됩니다.

## public 디렉토리

### auth.js
- 로그인 및 로그아웃 기능을 포함하여 사용자 인증을 관리합니다.
- 사용자 자격 증명을 확인하고 세션 정보를 유지합니다.

### cart.html & cart.js
- **cart.html:** 쇼핑 카트 페이지의 구조를 정의합니다.
- **cart.js:** 항목 추가, 제거 및 업데이트와 같은 카트 작업을 관리합니다.

### checkout.html & checkout.js
- **checkout.html:** 결제 페이지의 구조를 정의합니다.
- **checkout.js:** 결제 프로세스를 처리하며, 결제 및 주문 확인을 포함합니다.

### login.html & login.js
- **login.html:** 로그인 페이지의 구조를 정의합니다.
- **login.js:** 사용자 로그인 작업 및 양식 검증을 관리합니다.

### productDetail.html & productDetail.js
- **productDetail.html:** 단일 제품에 대한 상세 정보를 표시하는 구조를 정의합니다.
- **productDetail.js:** 서버에서 제품 세부 정보를 가져오고 제품 세부 정보 페이지에서 상호 작용을 관리합니다.

### products.html & products.js
- **products.html:** 제품 목록을 표시하는 구조를 정의합니다.
- **products.js:** `productList.json` 파일에서 제품을 가져와 표시합니다.

### signup.html & signup.js
- **signup.html:** 사용자 등록 페이지의 구조를 정의합니다.
- **signup.js:** 사용자 등록 작업 및 양식 검증을 관리합니다.

## 기타 디렉토리

### source
- 웹 애플리케이션에서 사용되는 모든 시각적 자산(이미지 및 아이콘)을 포함합니다.

### old
- 버전 관리 및 롤백을 위해 이전 버전의 파일을 보관합니다.

# 요약

이 웹 애플리케이션은 사용자 인증, 제품 목록 표시, 제품 세부 정보, 쇼핑 카트 및 결제 프로세스(구현은 안 했지만요)를 포함한 전형적인 전자 상거래 기능을 포함합니다. server는 Node.js와 Express.js를 사용하여 처리하며, client는 HTML, CSS 및 JavaScript를 사용합니다. 애플리케이션은 주요 기능별로 별도의 파일로 구성되어 있어 유지 보수 및 확장이 용이합니다.