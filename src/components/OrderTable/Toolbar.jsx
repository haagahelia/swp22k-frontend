import React from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
//import dao from "../../ajax/dao";
import { usePopup } from "../../contexts/PopupContext";
import { useOrders } from "../../contexts/OrdersContext";

export default function Toolbar(props) {
  const navigate = useNavigate();
  const { setContent } = usePopup();
  const { orders, setOrders } = useOrders();
  const rowData = props.valueFormatted ? props.valueFormatted : props.value;

  const signOrder = () => {
    navigate(`/sign/${rowData.uuid}`);
    rowData.setOrder(rowData.uuid);
  };

  const showOrder = () => {
    navigate(`/order/${rowData.uuid}`);
    rowData.setOrder(rowData);
  };

  const deleteOrder = async () => {
    const consent = `Are you sure you want to delete order ${rowData.uuid}?`;

    if (window.confirm(consent)) {
      /*
        try {
        const isDeleted = await dao.deleteOrder();
        setOrders(orders.filter((order) => order.uuid !== rowData.uuid));
        setContent({
          isOpen: true,
          msg: `Successfully deleted order ${rowData.uuid}`,
        });
      } catch (error) {
        console.log(error);
        setContent({ isOpen: true, msg: `Can't delete order, ${error}` });
      }*/
    }
  };

  return (
    <div className="order-table-toolbar">
      <VisibilityIcon onClick={showOrder} color="primary" />

      {!rowData.pu_signature_image && (
        <BorderColorIcon onClick={signOrder} color="warning" />
      )}

      <DeleteIcon onClick={deleteOrder} color="error" />
    </div>
  );
}
