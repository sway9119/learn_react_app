import { CssModules } from "./modules/CssModules";
import { StyleJsx } from "./modules/StyledJsx";
import { StyledComponents } from "./modules/StyledComponents";
import { Emotion } from "./modules/Emoion";
import { TailwindCss } from "./modules/TailwindCss";

export const App = () => {
  return (
    <>
      <CssModules></CssModules>
      <StyleJsx></StyleJsx>
      <StyledComponents></StyledComponents>
      <Emotion></Emotion>
      <TailwindCss></TailwindCss>
    </>
  );
};
