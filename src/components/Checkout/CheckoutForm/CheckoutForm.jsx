import { useForm } from "react-hook-form";
import s from "./CheckoutForm.module.scss";
import { useState } from "react";

export const CheckoutForm = () => {
  const [data, setData] = useState();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const handleCheckout = (data) => {
    console.log(data);
  };

  return (
    <div className={s.formStyling}>
      <form onSubmit={handleSubmit(handleCheckout)}>
        <label htmlFor="firstname">First name</label>
        <input
          {...register("firstname", {
            required: "First name is required",
            pattern: {
              message: "Invalid name format",
            },
            minLength: {
              value: 2,
              message: "Must be at least 2 characters",
            },
          })}
          type="text"
          name="firstname"
        />
        {errors.firstname ? <span>{errors.firstname.message}</span> : null}

        <label htmlFor="lastname">Last name</label>
        <input
          {...register("lastname", {
            required: "Last name is required",
            pattern: {
              message: "Invalid name format",
            },
            minLength: {
              value: 5,
              message: "Must be at least 5 characters",
            },
          })}
          type="text"
          name="lastname"
        />
        {errors.lastname ? <span>{errors.lastname.message}</span> : null}

        <label htmlFor="address">Address</label>
        <input
          {...register("address", {
            required: "Address is required",
            pattern: {
              message: "Invalid address format",
            },
            minLength: {
              value: 12,
              message: "Must be at least 12 characters",
            },
          })}
          type="text"
          name="address"
        />
        {errors.address ? <span>{errors.address.message}</span> : null}

        <label htmlFor="city">City</label>
        <input
          {...register("city", {
            required: "City is required",
            pattern: {
              message: "Invalid city format",
            },
            minLength: {
              value: 3,
              message: "Must be at least 3 characters",
            },
          })}
          type="text"
          name="city"
        />
        {errors.city ? <span>{errors.city.message}</span> : null}

        <label htmlFor="phone">Phone</label>
        <input
          {...register("phone", {
            required: "Phone is required",
            pattern: {
              message: "Invalid phone format",
            },
            minLength: {
              value: 8,
              message: "Phone must be at least 8 characters",
            },
          })}
          type="number"
          name="phone"
        />
        {errors.phone ? <span>{errors.phone.message}</span> : null}

        <label htmlFor="provice">Provice</label>
        <input
          {...register("provice", {
            required: "Provice is required",
            pattern: {
              message: "Invalid provice format",
            },
            minLength: {
              value: 7,
              message: "Must be at least 7 characters",
            },
          })}
          type="text"
          name="provice"
        />
        {errors.provice ? <span>{errors.provice.message}</span> : null}

        <label htmlFor="country">Country</label>
        <input
          {...register("country", {
            required: "Country is required",
            pattern: {
              message: "Invalid country format",
            },
            minLength: {
              value: 5,
              message: "Must be at least 5 characters",
            },
          })}
          type="text"
          name="country"
        />
        {errors.country ? <span>{errors.country.message}</span> : null}

        {/* <input className={s.payButton} type="submit" value="Pay now" /> */}
      </form>
    </div>
  );
};
