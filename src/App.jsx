import { useAutoAnimate } from "@formkit/auto-animate/react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Punct2 from "./components/Punct2/Punct2";
import Punct3 from "./components/Punct3/Punct3";
import Punct4 from "./components/Punct4/Punct4";
import Punct5 from "./components/Punct5/Punct5";
import Cartitemtg from "./components/Cartitemtg/Cartitemtg";
import MainLayout from "./layouts/MainLayout";
import User from "./components/User/User";
import MessageUser from "./components/MessageUser/MessageUser";

function App() {
  const [anim] = useAutoAnimate();
  return (
    <div ref={anim}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Punct2" element={<Punct2 />} />
        <Route path="/Punct3" element={<MainLayout />}>
          <Route index={true} element={<Punct3 />} />
          <Route path="cartitemtg/:id/" element={<Cartitemtg />} />
          <Route path="cartitemtg/:id/userid/:usid" element={<User />} />
          <Route
            path="cartitemtg/:id/userid/:usid/message/:tg"
            element={<MessageUser />}
          />
        </Route>
        <Route path="/Punct4" element={<MainLayout />}>
          <Route index={true} element={<Punct4 />} />
          <Route path="userid/:usid" element={<User />} />
          <Route path="userid/:usid/message/:tg" element={<MessageUser />} />
        </Route>
        {/* <Route path="/Punct5" element={<Punct5 />} /> */}
        <Route path="/Punct5" element={<MainLayout />}>
          <Route index={true} element={<Punct5 />} />
          <Route path="userid/:usid" element={<User />} />
          <Route path="userid/:usid/message/:tg" element={<MessageUser />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
