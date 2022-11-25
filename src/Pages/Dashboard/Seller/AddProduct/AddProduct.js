import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../Context/AuthProvider";
const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddProduct = (data) => {
    const sellerEmail = user?.email;
    const sellerPhoto = user?.photoURL;
    const sellerName = user?.displayName;
    const image = data?.image[0];
    const formData = new FormData();
    formData.append("image", image);

    console.log(data);

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
                <span className="label-text">Price</span>
              </label>
              <input
                {...register("price", {
                  required: "Please Provide Product Price.",
                })}
                type="number"
                className="input input-bordered w-full max-w-xs"
              />
              <p className="pt-2">
                {errors.price && (
                  <p className="text-red-600 font-semibold">
                    {errors.price.message}
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
                <option disabled selected>
                  Please select a category
                </option>
                <option>Networking</option>
                <option>WebDevelopment</option>
                <option>AI-Development</option>
              </select>

              <p className="pt-2">
                {errors.password && (
                  <p className="text-red-600 font-semibold">
                    {errors.password.message}
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
