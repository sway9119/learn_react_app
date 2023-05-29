import { useState } from "react";
import { Card } from "./compornets/Card";

export const App = () => {
  const { isAdmin, setIsAdmin } = useState(false);

  const onClickSwitch = () => setIsAdmin(Admin);
  return (
    <div>
      {isAdmin ? <span>>管理者です</span> : <span>>管理者以外です</span>}
      <button onClick={onClickSwitch}>切り替え</button>
      <Card isAdmin={isAdmin}></Card>
    </div>
  );
};
