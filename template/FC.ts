import React, { useState } from 'react'

interface PropsInterface {
  // children: ReactNode;
}

const {{PageName}}: React.FC<PropsInterface> = (props: PropsInterface) => {
  const [count, setCount] = useState(0)
  return (
    <div className="pageContainer">这是函数组件{count}</div>
  )
}

export default {{PageName}}