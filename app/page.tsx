export { default } from "./landing/page";

// The route "/" is a re-export of the landing page; segment config does not
// travel through re-exports, so it must be declared here as well.
export const revalidate = 120;
