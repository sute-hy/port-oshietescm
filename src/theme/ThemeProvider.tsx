// スタイル作成用の型を定義
declare module '@material-ui/core/styles/createTheme' {
  interface Theme {
    background: string;
    font: string;
  }
  interface ThemeOptions {
    background: string;
    font: string;
  }
}

// タイプスクリプトのエラー回避
export{};