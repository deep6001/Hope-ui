
import type { ReactNode } from 'react';


type ProtectedPageProps = {
    children: ReactNode;
};

const ProtectedPage = ({children} : ProtectedPageProps) => {
  return (
    <>        
    {children}
   </>

  )
}

export default ProtectedPage