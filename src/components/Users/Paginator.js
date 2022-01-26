import React from "react";
import styles from "./users.module.css";

let Paginator = (props) => {
    let pagesFilter = [];
    let curPag = props.currentPage;

    pagesFilter = props.pages.filter((n) => {
        return n < curPag + 6
    })
    pagesFilter = pagesFilter.filter((n) => {
        return n > curPag - 6
    })
    pagesFilter = pagesFilter.map(p => {
        return <span className={curPag === p ? styles.selectedPage : styles.anyPage}
                     onClick={(e) => {
                         curPag === p ? e.preventDefault() : props.onPageChanged(p)
                     }}>{p} </span>
    })
    const firstPage = <>
        <span className={styles.anyPage} onClick={() => {
            props.onPageChanged(1)
        }}>1 </span>
        <button className={styles.anyPage} onClick={() => {
            props.onPageChanged(curPag - 10 > 0 ? curPag - 10 : 1)
        }}>back
        </button>
    </>

    const lastPage = <>
        <button className={styles.anyPage} onClick={() => {
            props.onPageChanged(curPag + 10)
        }}>next
        </button>
        <span className={styles.anyPage} onClick={() => {
            props.onPageChanged(props.pagesCount)
        }}>{props.pagesCount} </span>
    </>


    return <div className={styles.curs_div_span}>
        {curPag < 6 ? "" : firstPage}
        {pagesFilter}
        {curPag > props.pagesCount - 6 ? "" : lastPage}
    </div>
}


export default Paginator;