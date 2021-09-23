import { ChoiceButton } from "./common/Button"


export const Quiz = () => {
  return(
    <>
    <h1>問題文</h1>
    <ChoiceButton />
    <ChoiceButton />
    <ChoiceButton />
    <p>前の問題へ</p>
    <p>次の問題へ</p>
    </>
  )
};