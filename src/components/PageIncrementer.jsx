function PageIncrementer({ listName, listLength, isLoading, setPage, totalCount}) {
  const incrementPage = () => {
    setPage(currPage => currPage + 1);
  }

  return (
    isLoading ?
    <p>Fetching {listName}...</p> :
    totalCount === listLength ?
    <p>No more {listName}!</p> :
    <button onClick={incrementPage}>Fetch more {listName}</button>
  )
}

export default PageIncrementer;