import { useEffect, useRef, useState } from "react";
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Wrapper as PopperWrapper } from "../../../../components/Popper";
import HeadlessTippy from "@tippyjs/react/headless";
import AccountItem from "../../../AccountItem";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";

const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    const inputRef = useRef();

    useEffect(() => {
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=hoaa&type=less`)
            .then(res => res.json())
            .then(res => {
                setSearchResult(res.data)
            })

    }, [searchValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    }

    const handleHideResult = () => {
        setShowResult(false)
    }

    return (
        < HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx("search-title")}>Accounts</h4>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx("search")}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={e => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && (
                    <button className={cx("clear")} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {/* <FontAwesomeIcon className={cx("loading")} icon={faSpinner} /> */}

                <button className={cx("search-btn")}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </ HeadlessTippy>);
}

export default Search;
