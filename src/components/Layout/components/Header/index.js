import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faCloudUpload,
    faUser,
    faGear,
    faCoins,
    faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { faMessage, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { } from "@fortawesome/free-brands-svg-icons"
import Tippy from "@tippyjs/react";
import images from "../../../../assets/images";
import styles from "./Header.module.scss";
import Button from "../../../Button";
import Menu from "../../../Popper/Menu";
import "tippy.js/dist/tippy.css";
import Image from "../../../Image";
import Search from "../Search";
import { InboxIcon, MessageIcon, UploadIcon } from "../../../Icons";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
        title: "English",
        children: {
            title: "Language",
            data: [
                {
                    type: "language",
                    code: "en",
                    title: "English",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Tiếng Việt",
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
        title: "Feedback and help",
        to: "/feedback",
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
        title: "Keyboard shortcuts",
    },
];

function Header() {
    const currentUser = true;

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case "language":
                //Handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>,
            title: "View profile",
            to: "/@hoaa",
        },
        {
            icon: <FontAwesomeIcon icon={faCoins}></FontAwesomeIcon>,
            title: "Get coins",
            to: "/coin",
        },
        {
            icon: <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>,
            title: "Setting",
            to: "/setting",
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon>,
            title: "Log out",
            to: "/logout",
            separate: true,
        },
    ];

    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <img src={images.logo} alt="TikTok" />

                {/* search */}
                <Search />
                <div className={cx("actions")}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className={cx("action-btn")}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className={cx("action-btn")}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className={cx("action-btn")}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log In</Button>
                        </>
                    )}
                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Image
                                className={cx("user-avatar")}
                                src="https://sheis.vn/wp-content/uploads/2022/06/cac-tu-the-chup-anh-dep-cho-be-gai-7-"
                                alt="Nguyen Van A"
                            />
                        ) : (
                            <>
                                <button className={cx("more-btn")}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
