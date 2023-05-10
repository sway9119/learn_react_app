// コンポーネント
export const App = () => {
  const onClickButton = () => {
    alert("アラートです");
  };

  // CSSオブジェクト
  // CSSのスタイル名はキャメルケースになる
  const contentStyle = {
    color: "blue",
    fontSize: "20px",
  };

  return (
    <>
      <h1>hello world</h1>
      <p style={contentStyle}>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
