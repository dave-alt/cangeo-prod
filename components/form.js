import React from "react";
import { useForm, Controller } from "react-hook-form";

import axios from "axios";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";



export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    // console.log(data);
    axios
      .post("https://cangeo.herokuapp.com/api/v1/lead/create", data)
      .then((res) =>{
        if(res.status ===200)
        {
          document.querySelector('.feedcon').style.display="flex";
          setTimeout(() =>{
            document.querySelector('.feedcon').style.display="none";
          },1000)
        }
      })
      .catch((err) => console.log(err));
  };

  console.log(errors);

  return (
    <div id="contact" className="contact">
      <h1>Reach Us</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("name", { required: true })}
          placeholder="Enter your name"
        ></input>
        {errors.name?.type == "required" && (
          <p className="error">*Name is required</p>
        )}
        <input
          type="text"
          placeholder="Enter your email"
          {...register("email", {
            required: true,
            pattern: /[^@\t\r\n]+@[^@ \t\r\n]+\.[^@\t\r\n]+/,
          })}
        ></input>

        {errors.email?.type == "required" && (
          <p className="error">*Email is required</p>
        )}
        {errors.email?.type == "pattern" && (
          <p className="error">*Enter a valid email ID</p>
        )}

        <Controller
          name="phone"
          control={control}
          render={({ field: { onChange, value } }) => (
            <div>
              <PhoneInput
                country={"ca"}
                value={value}
                onChange={onChange}
                autocompleteSearch="true"
              />
            </div>
          )}
        />

        <textarea
          className="message"
          type="text"
          placeholder="Enter your message"
          {...register("message", { required: true })}
        ></textarea>
        {errors.message?.type == "required" && (
          <p className="error">*Please enter a message</p>
        )}

        <button className="btn" type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
}
