import { CssModules } from "./modules/CssModules";
import { StyleJsx } from "./modules/StyledJsx";
import { StyledComponents } from "./modules/StyledComponents";

export const App = () => {
  return (
    <>
      <CssModules></CssModules>
      <StyleJsx></StyleJsx>
      <StyledComponents></StyledComponents>
    </>
  );
};
