import { css } from 'styled-components';

export const IBMPlexFontStyles = css`
  @font-face {
    font-family: 'IBM Plex Sans';
    src: url('/fonts/IBMPlexSans-BoldItalic.woff2') format('woff2'),
      url('/fonts/IBMPlexSans-BoldItalic.woff') format('woff');
    font-weight: bold;
    font-style: italic;
  }

  @font-face {
    font-family: 'IBM Plex Sans';
    src: url('/fonts/IBMPlexSans-TextItalic.woff2') format('woff2'),
      url('/fonts/IBMPlexSans-TextItalic.woff') format('woff');
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: 'IBM Plex Sans';
    src: url('/fonts/IBMPlexSans-Bold.woff2') format('woff2'),
      url('/fonts/IBMPlexSans-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'IBM Plex Sans';
    src: url('/fonts/IBMPlexSans-Text.woff2') format('woff2'),
      url('/fonts/IBMPlexSans-Text.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }
`;
