// constants/api.ts

const API_ROOT = 'http://3.36.65.48:8080'; // 백엔드 배포 주소

export const API_ENDPOINTS = {
    LOGIN: `${API_ROOT}/login`,
    USERS: `${API_ROOT}/users`,
    POSTS: `${API_ROOT}/posts`,
    COMMENTS: `${API_ROOT}/comments`,
    MEMBER: `${API_ROOT}/api/member`, // 추가됨
    SWAGGER: `${API_ROOT}/v3/api-docs`, // 추가됨
};
