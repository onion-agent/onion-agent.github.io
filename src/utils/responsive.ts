export const ResponsiveBreakpoints = {
  PC: 1200,
  TABLET: 768,
  MOBILE: 375,
};
export const purePcMedia = `(min-width: ${ResponsiveBreakpoints.PC}px)`;
export const pcMedia = `@media ${purePcMedia}`;
export const matchPcMedia = () =>
  typeof window === "undefined"
    ? ({
        matches: true,
      } as MediaQueryList)
    : window?.matchMedia(pcMedia.replace("@media ", ""));

export const pureTabletMedia = `(min-width: ${
  ResponsiveBreakpoints.TABLET
}px) and (max-width: ${ResponsiveBreakpoints.PC - 1}px)`;
export const tabletMedia = `@media ${pureTabletMedia}`;
export const matchTabletMedia = () =>
  typeof window === "undefined"
    ? ({
        matches: false,
      } as MediaQueryList)
    : window?.matchMedia(tabletMedia.replace("@media ", ""));

export const pureMobileMedia = `(max-width: ${
  ResponsiveBreakpoints.TABLET - 1
}px)`;
export const mobileMedia = `@media ${pureMobileMedia}`;
export const matchMobileMedia = () =>
  typeof window === "undefined"
    ? ({
        matches: false,
      } as MediaQueryList)
    : window?.matchMedia(mobileMedia.replace("@media ", ""));
export const tabletAndMobileMedia = `@media (max-width: ${
  ResponsiveBreakpoints.PC - 1
}px)`;
export const pcAndTabletMedia = `@media (min-width: ${ResponsiveBreakpoints.TABLET}px)`;
