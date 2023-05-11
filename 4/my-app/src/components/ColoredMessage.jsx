// props.childrenをしているするとコンポーネント配下のDOMをpropsで取得できる

export const ColoredMessage = ({ color, children }) => {
  const contentStyle = {
    color,
    fontSize: "30px",
  };

  return <p style={contentStyle}>{children}</p>;
};
