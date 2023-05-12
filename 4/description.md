## react でプロジェクトの作成し、起動する

```
npx create-react-app my-app
cd my-app
npm start
```

## 4-5 Props

Props はコンポーネントに渡す引数のようなもの。

## 4-6 State

コンポーネントの状態を表す値。

```js
// 1つ目にState変数、2つ目にそのStateを更新するための関数
const [num, setNum] = useState();
```

## 4-7 再レンダリング

State が更新された時に関数コンポーネントは再び頭から処理が実行され、差分がある DOM を検知し、変更を反映する。
この変更を検知してコンポーネントを再処理することを再レンダリングと呼ぶ。

```js
// useEffect( 実行する関数, [依存する値])
// 例) Stateの値が変わった時のみにアラートを表示する
export const App = () => {
  useEffect(( => {
    alert();
  }, [num]);
  return { ... }
  );
}

```
