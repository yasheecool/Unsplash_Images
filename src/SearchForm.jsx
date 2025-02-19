import { useGlobalContext } from './context';

const SearchForm = () => {
  const { setSearchValue } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchTerm = e.target[0].value;

    if (searchTerm) setSearchValue(searchTerm);
    else alert('please provide a valid value');
  };

  return (
    <form action='' className='search-form' onSubmit={handleSubmit}>
      <input
        type='text'
        className='form-input search-input'
        placeholder='cat'
        name='search'
      />
      <button className='btn' type='submit'>
        Search
      </button>
    </form>
  );
};
export default SearchForm;
