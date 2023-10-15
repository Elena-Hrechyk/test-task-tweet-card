import React, { useState } from 'react';
import { UsersList } from 'components/UsersList/UsersList';
import { ButtonLoadMore } from './Pagination.styled';

function PaginatedItems({ items, itemsPerPage, filter }) {
  const [itemOffset, setItemOffset] = useState(0);
  const [showButton, setShowButton] = useState(true);

  let endOffset = itemOffset + itemsPerPage;
  let currentItems = items;

  if (filter === 'all') {
    currentItems = items.slice(0, endOffset);
  }

  const handlePageClick = () => {
    setItemOffset(endOffset);
    if (
      endOffset === items.length - itemsPerPage ||
      items.length < itemsPerPage
    ) {
      setShowButton(false);
    }
  };

  return (
    <>
      <UsersList currentItems={currentItems} />
      {filter === 'all' && (
        <ButtonLoadMore
          type="button"
          onClick={handlePageClick}
          show={showButton}
        >
          Load more
        </ButtonLoadMore>
      )}
    </>
  );
}

export default PaginatedItems;
