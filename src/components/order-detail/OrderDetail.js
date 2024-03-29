import { Box, Grid, Paper, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchGetProfile } from "~/redux/customer/customerSlice";
import { fetchGetOrder } from "~/redux/order/orderSlice";
import Loading from "../loading/Loading";
import { OrderProduct } from "../order-product";
import "./OrderDetail.scss";
function OrderDetail() {
    const params = useParams();
    const { order, isLoading } = useSelector((state) => state.orderReducer);

    const { accessToken, accountId } = useSelector((state) => state.authReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchGetOrder({ id: params.id, accessToken }));
        dispatch(fetchGetProfile({ accessToken, accountId }));
    }, [dispatch, params, accessToken, accountId]);

    return (
        <Paper className="p-[2.4rem] lg:w-[95%] mb-8 rounded-2xl bg-white ">
            <Box className="flex justify-end">
                <Box
                    component={Link}
                    to="/account/purchase"
                    className="text-white bg-green-light py-2 px-4"
                >
                    Trở về
                </Box>
            </Box>
            <Box className="pb-4 border-b border-solid border-gray mt-4">
                <Typography variant="h5" className="text-[2.4rem] font-bold mb-8">
                    Thông tin nhận hàng
                </Typography>
                <Typography variant="body1" className="text-2xl text-light-black leading-10 w-full">
                    <span className=" font-bold text-black mr-2">Người nhận hàng:</span>
                    {order?.address.fullName}
                </Typography>
                <Typography variant="body1" className="text-2xl  text-light-black leading-10">
                    <span className="font-bold text-black mr-2">SDT người nhận: </span>
                    {order?.address.phone}
                </Typography>
                <Typography variant="body1" className="text-2xl text-light-black leading-10 w-full">
                    <span className=" font-bold text-black mr-2">Địa chỉ giao hàng:</span>
                    {order?.address.address},{order?.address.addresses.wardName},
                    {order?.address.addresses.districtName},{order?.address.addresses.provinceName}
                </Typography>
                <Typography
                    variant="body1"
                    className="text-2xl text-light-black leading-10 w-full text-ellipsis"
                >
                    <span className="font-bold text-black mr-2">Ghi chú: </span>
                    {order?.description}
                </Typography>
            </Box>
            <Box>
                <Typography variant="h5" className="text-[2.4rem] font-bold mb-8">
                    Thông tin đơn hàng
                </Typography>
                <Typography variant="body1" className="text-2xl text-light-black leading-10 w-full">
                    <span className="text-2xl font-bold text-black mr-2">Mã hoá đơn: </span>
                    {order?.id}
                </Typography>
                <Typography variant="body1" className="text-2xl text-light-black leading-10 w-full">
                    <span className="text-2xl font-bold text-black mr-2">Ngày đặt: </span>
                    {order?.orderTime}
                </Typography>
                <Typography variant="body1" className="text-2xl  leading-10 w-full">
                    <span className="text-2xl font-bold text-black mr-2">Trạng thái:</span>
                    {order?.orderStatus?.description}
                </Typography>
            </Box>
            <Box className="mt-8">
                <Typography variant="body1" className="text-[2.4rem] font-bold mb-8">
                    Chi tiết đơn hàng
                </Typography>
                {order &&
                    order.items.map((item, index) => <OrderProduct key={index} item={item} />)}
            </Box>

            <Grid
                container
                className="flex-col items-end pt-8 border-t-2  border-solid border-gray"
            >
                <Grid item className="flex items-center">
                    <Typography variant="body2" className="text-2xl mr-2">
                        Phí vận chuyển:
                    </Typography>
                    <Typography variant="body1" className="text-danger text-2xl ">
                        {order?.transportFee === 0
                            ? "Miễn phí"
                            : order?.transportFee.toLocaleString("it-IT", {
                                  style: "currency",
                                  currency: "VND",
                              })}
                    </Typography>
                </Grid>
                <Grid item className="flex items-center leading-10 ">
                    <Typography variant="body2" className="text-2xl mr-2">
                        Giảm giá:
                    </Typography>

                    <Typography variant="body2" className="text-danger text-2xl  inline-block ml-2">
                        {order?.coupon == null
                            ? "0 VND"
                            : `
                                -
                                ${order?.coupon.price.toLocaleString("it-IT", {
                                    style: "currency",
                                    currency: "VND",
                                })}
                            `}
                    </Typography>
                </Grid>
                <Grid item className="flex items-center leading-10 ">
                    <Typography variant="body2" className="text-2xl font-bold">
                        {" "}
                        Tổng tiền:
                    </Typography>
                    <Typography variant="body2" className="text-danger  inline-block text-2xl ml-2">
                        {order?.cost.toLocaleString("it-IT", {
                            style: "currency",
                            currency: "VND",
                        })}
                    </Typography>
                </Grid>
            </Grid>

            <Loading open={isLoading} />
        </Paper>
    );
}

export default OrderDetail;
