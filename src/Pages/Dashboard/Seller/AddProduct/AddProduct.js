import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../Context/AuthProvider";
import Loading from "../../../Shared/Loading/Loading";

const AddProduct = () => {
  const [users, setUsers] = useState();
  const current = new Date();
  const time = current.toLocaleTimeString("en-US");

  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const { user, loading } = useContext(AuthContext);
  // const {email}=
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [user?.email]);

  console.log(users);
  const verify = users?.verify;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(time);

  const handleAddProduct = (data) => {
    const sellerEmail = user?.email;
    const sellerPhoto = user?.photoURL;
    const sellerName = user?.displayName;
    const image = data?.image[0];
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb_key}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((ImgData) => {
        const productInfo = {
          data,
          category: data?.category,
          sellerEmail,
          sellerName,
          sellerPhoto,
          image: ImgData?.data?.url,
          date: date,
          postTime: time,
          verify,
        };
        console.log(productInfo);

        fetch("http://localhost:5000/new-product", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(productInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.acknowledged > 0) {
              toast.success("Product added successfully");
              navigate("/dashboard/my-products");
            }
          });
      });
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-4xl font-bold text-center text-teal-600">
        Add A New Product
      </h2>

      <div className="bg-gray-200 py-10  mx-auto flex justify-center items-center rounded-xl mt-10">
        <form onSubmit={handleSubmit(handleAddProduct)}>
          <div className="grid lg:grid-cols-2 gap-x-10">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                {...register("productName", {
                  required: "Please provide product name",
                })}
                type="text"
                placeholder="Enter book name"
                className="input input-bordered w-full max-w-xs"
              />
              <p className="pt-2">
                {errors.productName && (
                  <p className="text-red-600 font-bold">
                    {errors.productName.message}
                  </p>
                )}
              </p>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Original Price</span>
              </label>
              <input
                {...register("originalPrice", {
                  required: "Please Provide Product Price.",
                })}
                type="number"
                placeholder="Enter Original price of this book"
                className="input input-bordered w-full max-w-xs"
              />
              <p className="pt-2">
                {errors.originalPrice && (
                  <p className="text-red-600 font-semibold">
                    {errors.originalPrice.message}
                  </p>
                )}
              </p>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Resale Price</span>
              </label>
              <input
                {...register("resalePrice", {
                  required: "Please Provide Product Price.",
                })}
                type="number"
                placeholder="Enter resale price"
                className="input input-bordered w-full max-w-xs"
              />
              <p className="pt-2">
                {errors.resalePrice && (
                  <p className="text-red-600 font-semibold">
                    {errors.resalePrice.message}
                  </p>
                )}
              </p>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                {...register("location", {
                  required: "Please Provide location.",
                })}
                type="text"
                placeholder="Enter your location"
                className="input input-bordered w-full max-w-xs"
              />
              <p className="pt-2">
                {errors.location && (
                  <p className="text-red-600 font-semibold">
                    {errors.location.message}
                  </p>
                )}
              </p>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Contact Number</span>
              </label>
              <input
                {...register("phone", {
                  required: "Please Provide Your Contact Number",
                })}
                type="number"
                placeholder="Enter your phone number"
                className="input input-bordered w-full max-w-xs"
              />
              <p className="pt-2">
                {errors.phone && (
                  <p className="text-red-600 font-semibold">
                    {errors.phone.message}
                  </p>
                )}
              </p>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Used Time</span>
              </label>
              <input
                {...register("time", {
                  required: "Please Provide time of use on this product",
                })}
                type="text"
                placeholder="Enter used time "
                className="input input-bordered w-full max-w-xs"
              />
              <p className="pt-2">
                {errors.time && (
                  <p className="text-red-600 font-semibold">
                    {errors.time.message}
                  </p>
                )}
              </p>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                {...register("category")}
                id=""
                className="select select-bordered w-full max-w-xs"
              >
                <option disabled selected defaultValue="">
                  Please select a category
                </option>
                <option>Networking</option>
                <option>WebDevelopment</option>
                <option>AI-Development</option>
              </select>

              <p className="pt-2">
                {errors.category && (
                  <p className="text-red-600 font-semibold">
                    {errors.category.message}
                  </p>
                )}
              </p>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">product Quality</span>
              </label>
              <select
                {...register("quality")}
                id=""
                className="select select-bordered w-full max-w-xs"
              >
                <option disabled selected defaultValue="">
                  select
                </option>
                <option>Excellent</option>
                <option>Good</option>
                <option>Fair</option>
              </select>

              <p className="pt-2">
                {errors.quality && (
                  <p className="text-red-600 font-semibold">
                    {errors.quality.message}
                  </p>
                )}
              </p>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                {...register("image", {
                  required: "Please provide your photo",
                })}
                type="file"
                className="file-input input-bordered w-full max-w-xs"
              />
              <p className="pt-2">
                {errors.image && (
                  <p className="text-red-600 font-bold">
                    {errors.image.message}
                  </p>
                )}
              </p>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Description</span>
              </label>

              <textarea
                {...register("description", {
                  required: "Please Provide description",
                })}
                name="description"
                id=""
                className="rounded-lg p-2"
                cols="10"
                rows="1"
              ></textarea>
              <p className="pt-2">
                {errors.description && (
                  <p className="text-red-600 font-semibold">
                    {errors.description.message}
                  </p>
                )}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <input
              className="btn btn-accent mt-5 w-1/2 "
              value="Add Product"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
