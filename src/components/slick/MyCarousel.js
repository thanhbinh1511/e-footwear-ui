import { Box } from "@mui/system";
import classNames from "classnames/bind";
import Slider from "react-slick";
import style from "./Slick.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataCarouselExample } from "../../assets/dataCarousel/dataCarouselExample";

const cx = classNames.bind(style);

function MyCarousel() {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        appendDots: (dots) => (
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    bottom: "30px",
                }}
            >
                <Box
                    component={"ul"}
                    sx={{
                        display: "flex",
                        width: "10%",
                        justifyContent: "space-between",
                        margin: "0",
                    }}
                >
                    {dots}
                </Box>
            </Box>
        ),

        customPaging: (i) => (
            <Box className="custom-dots-carousel--border">
                <Box component={"span"} className="custom-dots-carousel--dot"></Box>
            </Box>
        ),
    };

    return (
        <Box className={cx("main")}>
            <Slider {...settings}>
                {dataCarouselExample.map((item, index) => (
                    <Box className={cx("card")} key={index}>
                        <img className={cx("picture")} src={item.linkImage} alt="slider" />
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}

export default MyCarousel;