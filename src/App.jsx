import ThemeToggle from './ThemeToggle';
import Gallery from './Gallery';
import SearchForm from './SearchForm';

const App = () => {
  return (
    <main>
      <div className='container'>
        <ThemeToggle />
        <h1 className='title'>Unsplash Images</h1>
        <SearchForm />
        <Gallery />
      </div>
    </main>
  );
};
export default App;
