import React, { useState, useEffect } from "react"
import { Typography } from "@mui/material"
import dao from "../ajax/dao"

import { usePopup } from "../contexts/PopupContext"
import { useOrder } from "../contexts/OrderContext"
import Container from "../components/CommonComponents/Container"
import OrderTable from "../components/OrderTable/Table"

export default function UnsignedOrdersView() {
    const { setContent } = usePopup()
    const { setOrder } = useOrder()
    const [ unsigned, setUnsigned ] = useState([])

    useEffect(() => {
        fetchUnsignedOrders()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchUnsignedOrders = async () => {
        try {
            const data = await dao.getUnsignedOrders();
            console.log("Data: " + data);
            const dataWithId = data.map((d, i) => {
                return { ...d, id: i }
            })

            setUnsigned(dataWithId)
            // setContent({ isOpen: true, msg: "Successfully fetched unsigned orders" })
        } catch (error) {
            console.log(error);
            setContent({ isOpen: true, msg: `Can't fetch unsigned orders, ${error}` })
        }
    };

    return (
        <Container>
            <Typography variant="h5" fontWeight="bold" my={2} color="primary">Unsigned Orders</Typography>
            <OrderTable orders={unsigned} setOrder={setOrder} /> 
        </Container>
    )
}
