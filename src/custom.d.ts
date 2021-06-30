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
