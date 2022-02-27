import routes from '@/routes';
import { useRoutes } from 'react-router-dom';

const App = () => {
  const elements = useRoutes(routes);

  return <>{elements}</>;
};

export default App;
