import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pagination = ({ search, page, setPage, totalPages }) => {
  return (
    <div>
      {!search && (
        <div className="page">
          {page > 1 && (
            <span onClick={() => setPage(1)}>
              <FontAwesomeIcon icon="angle-double-left" />
              &nbsp;
            </span>
          )}
          {page > 1 && (
            <span onClick={() => setPage(page - 1)}>
              <FontAwesomeIcon icon="angle-left" />
              &nbsp;&nbsp;
            </span>
          )}
          {page}
          {page < totalPages && (
            <span onClick={() => setPage(page + 1)}>
              &nbsp;&nbsp;
              <FontAwesomeIcon icon="angle-right" />
            </span>
          )}
          {page < totalPages && (
            <span onClick={() => setPage(totalPages)}>
              &nbsp;
              <FontAwesomeIcon icon="angle-double-right" />
            </span>
          )}
        </div>
      )}
      <br />
    </div>
  );
};

export default Pagination;
