import React from "react";

const Pagination = ({ search, page, setPage, totalPages }) => {
  return (
    <div>
      {!search && (
        <div className="page">
          {page > 1 && <span onClick={() => setPage(1)}>«&nbsp;</span>}
          {page > 1 && (
            <span onClick={() => setPage(page - 1)}>&lt;&nbsp;</span>
          )}
          {page}
          {page < totalPages && (
            <span onClick={() => setPage(page + 1)}>&nbsp;&gt;</span>
          )}
          {page < totalPages && (
            <span onClick={() => setPage(totalPages)}>&nbsp;»</span>
          )}
        </div>
      )}
      <br />
    </div>
  );
};

export default Pagination;
