import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import vit from "../assets/vit-bd.jpg";
import { IoMdLogOut } from "react-icons/io";
import { useLogoutMutation, useProfileQuery } from "../redux/api/userApiSlice";
import { toast } from "react-toastify";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const { _id } = useSelector((state) => state.auth);

  const { data: profileUser, refetch, isLoading, isError } = useProfileQuery();

  const [logoutUser] = useLogoutMutation();

  console.log(profileUser);

  useEffect(() => {
    if (_id) {
      refetch;
    }
  }, [refetch, _id]);

  const handleLogout = async () => {
    try {
      const res = await logoutUser();
    } catch (error) {
      console.error(error);
      toast.error(error?.data?.message);
    }
  };
  return (
    <div className="bg-white w-full text-gray-600 border">
      <div className="w-full flex justify-between items-center py-2 px-3 border">
        <div className="text-2xl font-bold border ">
          <a href="#">MyStore</a>
        </div>

        <nav className="space-x-4  ">
          <Link to={"/"} className="hover:bg-primary-600 py-2 px-4 rounded">
            Home
          </Link>
          <Link
            to={"/product"}
            className="hover:bg-primary-600 py-2 px-4 rounded"
          >
            Shop
          </Link>
          <Link
            to={"/about"}
            className="hover:bg-primary-600 py-2 px-4 rounded"
          >
            About
          </Link>
          <Link
            to={"/contact"}
            className="hover:bg-primary-600 py-2 px-4 rounded"
          >
            Contact
          </Link>
        </nav>

        <div className="">
          {_id ? (
            <div>
              <button onClick={(e) => setMenu(!menu)}>
                <img src={vit} className="w-12 h-12 rounded-full" />
              </button>
              <div className="absolute bg-white w-[350px] right-3 top-16 rounded-lg border-2 border-gray-200 shadow-xl space-y-3 py-3 px-3">
                <div className="border py-1 px-1 rounded-lg shadow-lg  ">
                  <div className="flex items-center px-2 py-3 hover:bg-[#ECF0F1] space-x-3 rounded-lg">
                    <img src={vit} className="w-10 h-10 rounded-full" />
                    <p className="font-semibold text-lg">
                      {profileUser?.full_name}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center space-x-3 pt-1 px-2 hover:bg-[#ECF0F1] rounded-lg"
                >
                  <div className="bg-[#ECF0F1] rounded-full py-2 px-2 ">
                    <IoMdLogOut className="text-[30px]" />
                  </div>
                  <div className="font-semibold text-lg">Đăng xuất</div>
                </button>
              </div>
            </div>
          ) : (
            <div>
              <Link
                to={"/register"}
                className="hover:bg-primary-600 py-2 px-4 rounded"
              >
                Register
              </Link>
              <Link
                to={"/login"}
                className="hover:bg-primary-600 py-2 px-4 rounded"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
