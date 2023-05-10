// props.childrenをしているするとコンポーネント配下のDOMをpropsで取得できる

export const ColoredMessage = (props) => {
  const contentStyle = {
    color: props.color,
    fontSize: "30px",
  };

  console.log(props);
  return <p style={contentStyle}>{props.children}</p>;
};
