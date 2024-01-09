import './App.css';
import { Header } from './components/header';
import { Map } from './components/map';

export default function App() {
  return (
    <>
      <Header />
      <section className="content">
        <Map />
      </section>
    </>
  );
};
