import { ColoredMessage } from "./components/ColoredMessage";

// コンポーネント
export const App = () => {
  const onClickButton = () => {
    alert("アラートです");
  };

  return (
    <>
      <h1>hello world</h1>
      <ColoredMessage></ColoredMessage>
      <ColoredMessage color="blue" message="お元気でしたか？"></ColoredMessage>
      <ColoredMessage color="pink" message="元気です！"></ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
