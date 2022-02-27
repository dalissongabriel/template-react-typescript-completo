import { Card } from '@/components';

const Home = () => {
  return (
    <div
      style={{
        backgroundColor: 'red',
        padding: '2rem',
        color: 'white',
        borderRadius: '25px',
      }}
    >
      <h1>Página home</h1>
      <Card />
    </div>
  );
};

export default Home;
