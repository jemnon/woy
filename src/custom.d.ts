declare module '*.svg' {
  // eslint-disable-next-line
  const content: any;
  export default content;
}

// Any element you create will be accepted
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

declare let blogherads: Blogherads;

interface Blogherads {
  adq?: any[];
}
