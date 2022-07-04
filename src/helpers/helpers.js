export const isMediaMatched = (media) => {
  if (!window.matchMedia) return false;
  return window.matchMedia(media).matches;
};

export const queries = {
  mobile: "screen and (max-width: 623px)",
  tablet: "screen and (min-width: 624px) and (max-width: 1020px)",
  desktop: "screen and (min-width: 1021px) and (max-width: 1440px)",
  printing: "screen and (min-width: 1440px)",
};
