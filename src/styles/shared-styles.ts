import { css } from 'lit';

// these styles can be imported from any component
// for an example of how to use this, check /pages/about-about.ts
export const styles = css`

  main {
    margin-top: 80px;
  }

  button {
    border: 0;
    line-height: 1.5;
    padding: 10px;
    text-align: center;
    color: #fff;
    border-radius: 5px;
    background-color: #3783C8;
  }

  button:hover {
    background-color: #3F96E5;
  }

  button:active {
    background-color: #2F71AC;
  }
`;