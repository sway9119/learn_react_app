import { ColoredMessage } from "./components/ColoredMessage";
import { useState } from "react";

// コンポーネント
export const App = () => {
  // Stateの定義
  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum(num + 1);
  };

  return (
    <>
      <h1>hello world</h1>
      <ColoredMessage></ColoredMessage>
      <ColoredMessage color="blue">
        <p>children</p>
        <p>チルドレン</p>
      </ColoredMessage>
      <ColoredMessage color="pink">元気です！</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </>
  );
};
