import {
  createOnyxiaUi,
  francePalette,
  defaultGetTypographyDesc,
} from "onyxia-ui";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { OnyxiaUi, ofTypeTheme } = createOnyxiaUi({
  BASE_URL: import.meta.env.BASE_URL,
  getTypographyDesc: (params) => {
    const typographyDesc = defaultGetTypographyDesc(params);

    return {
      ...typographyDesc,
      fontFamily: '"Work Sans", sans-serif',
    };
  },
  palette: francePalette,
});

type Theme = typeof ofTypeTheme;

export { OnyxiaUi, type Theme };
