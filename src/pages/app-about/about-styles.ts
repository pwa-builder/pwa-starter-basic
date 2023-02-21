import { css } from 'lit';

// these styles can be imported from any component
// for an example of how to use this, check /pages/about-about.ts
export const styles = css`
  @media(min-width: 1000px) {
    #aboutCard {
      max-width: 70vw;
    }
  }

  div {
    border: 1px solid grey;
    border-radius: 5px;
    padding: 10px;
  }
`;