import React from "react";

import styles from "./nextPageButtons.module.css";

const NextPageButtons = ({page,handlePage,movies}) => {
  return (
    <div className={styles.changePageContainer}>
      {page == 1 ? (
        <button onClick={handlePage} id="prev" className={styles.btn} disabled>
          Prev
        </button>
      ) : (
        <button onClick={handlePage} id="prev" className={styles.btn}>
          Prev
        </button>
      )}

      <div className={styles.pageNumber}>{page}</div>

      {!(movies.length < 20) ? (
        <button onClick={handlePage} id="next" className={styles.btn}>
          Next
        </button>
      ) : (
        <button onClick={handlePage} id="next" className={styles.btn} disabled>
          Next
        </button>
      )}
    </div>
  );
};

export default NextPageButtons;
