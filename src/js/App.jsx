import { HeaderProvider } from "./context/HeaderConext";
import { AdminRouter } from "./router/AdminRouter";
import { BrowserRouter } from 'react-router-dom';

export const App = () => {

  return (
    <>
    
      <BrowserRouter>
        <HeaderProvider>
          <AdminRouter/>
        </HeaderProvider>
      </BrowserRouter>
    
    </>
  );
};

