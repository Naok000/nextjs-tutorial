// _app.jsは特殊なファイルでRouteコンポーネントをラップする
// 全ページで共通して実行させたいファイルを読み込む
// 全ページで共通して実行させたい処理を実行する etc...

import "../styles/global.css";

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
