import { List, Paper, Typography } from "@mui/material";
import "./AccountSideBar.scss";
// import avatar from "~/assets/images/avatar.png";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import ChangePasswordIcon from "@mui/icons-material/PublishedWithChanges";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import PaymentsIcon from "@mui/icons-material/Payments";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
function SideBar() {
    const location = useLocation().pathname;
    const [active, setActive] = useState(0);
    useEffect(() => {
        if (location.includes("profile")) {
            setActive(0);
        } else if (location.includes("change-password")) {
            setActive(1);
        } else if (location.includes("address")) {
            setActive(2);
        } else if (location.includes("purchase")) {
            setActive(3);
        }
    }, [location]);
    return (
        <Paper className="rounded-2xl">
            <List className="pt-4 flex md:flex-col md:pt-[2rem] md:mx-4 lg:pt-[3.2rem] ">
                <Link
                    to={"/account/profile"}
                    className={`item w-[25%]  flex justify-center items-center md:w-full lg:justify-start md:my-1  rounded-2xl ${
                        active === 0 ? "active" : ""
                    }`}
                >
                    <Typography
                        variant="h6"
                        className="text-2xl flex justify-center items-center text-black py-[0.8rem] px-[1.6rem] md:px-[1.2rem]"
                    >
                        <PersonIcon
                            className="w-8 h-8 md:mr-4"
                            color={`${active === 0 ? "primary" : ""}`}
                        />
                        <span className="hidden md:block">Thông tin cá nhân</span>
                    </Typography>
                </Link>
                <Link
                    to={"/account/change-password"}
                    className={`item w-[25%] md:w-full  flex justify-center items-center lg:justify-start md:my-1 rounded-2xl ${
                        active === 1 ? "active" : ""
                    }`}
                >
                    <Typography
                        variant="h6"
                        className="text-2xl flex items-center text-black py-[0.8rem] px-[1.6rem] md:px-[1.2rem]"
                    >
                        <ChangePasswordIcon
                            className="w-8 h-8 md:mr-4"
                            color={`${active === 1 ? "primary" : ""}`}
                        />
                        <span className="hidden md:block"> Thay đổi mật khẩu</span>
                    </Typography>
                </Link>
                <Link
                    to={"/account/addresses"}
                    className={`item w-[25%] md:w-full  flex justify-center items-center lg:justify-start md:my-1 rounded-2xl ${
                        active === 2 ? "active" : ""
                    }`}
                >
                    <Typography
                        variant="h6"
                        className="text-2xl flex items-center text-black py-[0.8rem] px-[1.6rem] md:px-[1.2rem]"
                    >
                        <AddLocationIcon
                            className="w-8 h-8 md:mr-4"
                            color={`${active === 2 ? "primary" : ""}`}
                        />
                        <span className="hidden md:block"> Địa chỉ giao hàng</span>
                    </Typography>
                </Link>
                <Link
                    to={"/account/purchase"}
                    className={`item w-[25%] md:w-full  flex justify-center items-center lg:justify-start md:my-1 rounded-2xl ${
                        active === 3 ? "active" : ""
                    }`}
                >
                    <Typography
                        variant="h6"
                        className="text-2xl flex items-center text-black py-[0.8rem] px-[1.6rem] md:px-[1.2rem]"
                    >
                        <PaymentsIcon
                            className="w-8 h-8 md:mr-4"
                            color={`${active === 3 ? "primary" : ""}`}
                        />
                        <span className="hidden md:block">Lịch sử mua hàng</span>
                    </Typography>
                </Link>
            </List>
        </Paper>
    );
}

export default SideBar;
