import './App.css';
import Tree from './components/Tree';

function App() {
  return (
    <>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
    <section className='columns'>
      <Tree />
      <Tree />
    </section>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
