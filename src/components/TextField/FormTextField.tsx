import React from "react";
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  Path,
} from "react-hook-form";

import { TextField } from "../TextField";
import { Flex } from "../Flex/Flex";
import InputMask from "react-input-mask";

interface FormTextFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  placeholder?: string;
  alwaysShowMask?: boolean;
  type?: string;
  errors: FieldErrors<T>;
  label?: string;
  className?: string;
  mask?: string;
  maskChar?: string | null;
}

const FormTextField = <T extends FieldValues>({
  control,
  name,
  placeholder,
  type = "text",
  errors,
  label,
  className,
  mask,
  maskChar,
  alwaysShowMask = true,
  ...props
}: FormTextFieldProps<T>) => {
  return (
    <Flex direction="col" className="gap-1 w-full">
      {label && (
        <label
          htmlFor={name as string}
          className="2xl:text-[14px] text-[12px] -mb-2 text-neutral-pure400 font-[500]"
        >
          {label}
        </label>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field }) =>
          mask ? (
            <InputMask
              mask={mask}
              maskChar={maskChar}
              alwaysShowMask={alwaysShowMask}
              {...field}
            >
              <TextField
                name={name}
                type={type}
                placeholder={placeholder}
                {...props}
                className={`font-[500] bg-white outline-none 2xl:text-[16px] text-[14px] py-2 border-b-[1px] ${
                  errors[name] ? "border-b-red-500" : "border-b-grey-300"
                } ${className}`}
                errors={errors}
              />
            </InputMask>
          ) : (
            <TextField
              name={name}
              type={type}
              placeholder={placeholder}
              {...props}
              className={`font-[500] bg-white 2xl:text-[16px] text-[14px] outline-none py-2 border-b-[1px]  ${
                errors[name] ? "border-b-red-500" : "border-b-grey-300"
              } ${className}`}
              errors={errors}
              field={field}
            />
          )
        }
      />
      {errors[name] && (
        <span className=" 2xl:mt-1 text-xs text-red-500">
          {String(errors[name]?.message)}
        </span>
      )}
    </Flex>
  );
};

export default FormTextField;
