# 프리윌린 과제 테스트 제출

## 기술 스택

### Frontend

- **React**: 컴포넌트 기반 UI 개발을 위한 JavaScript 라이브러리
- **TypeScript**: 정적 타입 지원을 통한 안정적인 개발
- **React Query**: 서버 상태 관리 및 데이터 페칭을 위한 라이브러리
- **Tailwind CSS**: 일관되고 안정성 있는 스타일링을 위한 유틸리티 클래스 기반의 CSS 프레임워크

### 상태 관리

- **Context API**: 전역 상태 관리를 위한 React 내장 기능 활용
- **React Query Client**: 서버 데이터 캐싱 및 업데이트 관리

### 개발 도구

- **ESLint/Prettier**: 코드 품질 및 일관성 유지

## 구현 내용

### Context API

- prop drilling을 최소화하기 위해 **activeId**, **onClick**을 전역 상태로 관리하였습니다.
- 서비스의 규모를 고려하여 전역상태 관리를 위한 별도의 라이브러리 설치를 하지 않고, React의 Context API를 도입하였습니다.

### React Query, React Error Boundary

**1. 상태관리**

- 로딩, 에러, 데이터와 같은 다양한 서버 상태관리를 자동화해주는 React Query를 도입하였습니다.
- 교체, 추가, 삭제와 같은 문제에 대한 유저의 CUD 액션이 발생할 경우, React Query에 저장된 서버 상태를 변경하도록 하였습니다.
- 이로인해 별도의 상태관리를 위한 코드작성 없이도 문제 리스트의 데이터를 최신화 할 수 있도록 하였습니다.

**2. API 사용 및 Fallback UI**

- staleTime, queryKey 옵션을 활용하여, API의 refetch를 조건에 따라 제어할 수 있도록 구현하였습니다.
- Suspense와 ErrorBoundary를 사용하여, 로딩 및 API 에러 발생시에 보여줄 UI를 상단에 선언적으로 지정할 수 있도록 구현하였습니다.

### Tailwind CSS

- 자주 사용하는 CSS Flexbox의 재사용 가능한 클래스를 @component로 정의하여 적용하였습니다.
- 기타 커스텀 테마는 @theme 및 @utilities를 통해 폰트, 컬러, 아이콘을 적용하였습니다.
