import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import OrdersView from "../views/OrdersView";
import OrderView from "../views/OrderView";
import UnsignedOrdersView from "../views/UnsignedOrdersView";
import SignaturesView from "../views/SignaturesView";
import SignatureView from "../views/SignatureView";
import SignView from "../views/SignView";
import CreateNewOrderView from "../views/CreateNewOrderView";
import UnsignedTimelimitView from "../views/UnsignedTimelimitView";
import EditOrderView from "../views/EditOrderView";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OrdersView />} />
        <Route path="/order/:orderId" element={<OrderView />} />
        <Route path="/edit/:orderId" element={<EditOrderView />} />
        <Route path="/unsigned" element={<UnsignedOrdersView />} />
        <Route path="/signatures" element={<SignaturesView />} />
        <Route path="/unsignedtimelimit" element={<UnsignedTimelimitView />} />
        <Route path="/signatures/:id" element={<SignatureView />} />
        <Route path="/sign/:orderId" element={<SignView />} />
        <Route path="/new" element={<CreateNewOrderView />} />
      </Routes>
    </Router>
  );
}
