// DOCORE: 2030 로고 #336666 기반 팔레트 및 styled-components DefaultTheme 확장
import 'styled-components';

export const theme = {
  primary: '#4d8888', // 메인
  primaryLight: '#4d8888', // 밝은톤
  primaryDark: '#234646', // 어두운톤
  background: '#ffffff', // 배경
  accent: '#23b1c7', // 포인트
  text: '#222', // 기본 텍스트
  error: '#ef4444', // 에러
  success: '#23c77b', // 성공
  like: '#336666', // 좋아요
  neutral: '#b0b8c1', // 몰라요
  dislike: '#e57373', // 싫어요
  likeBg: '#e0f7fa',
  neutralBg: '#f3f4f6',
  dislikeBg: '#ffebee',
};
export type ThemeType = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
} 