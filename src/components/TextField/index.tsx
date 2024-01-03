import React from "react";
import {
  ControllerRenderProps,
  FieldValues,
  Path,
} from "react-hook-form/dist/types";
import { Flex } from "../Flex/Flex";
interface Props<T extends FieldValues> {
  name: string;
  type?: string;
  placeholder?: string;
  className?: string;
  errors?: Record<string, unknown>;
  field?: ControllerRenderProps<T, Path<T>>;
  icon?: React.ReactNode;
  disabled?: boolean;
  value?: string;
  onClick?: () => void;
}
export const TextField = <T extends FieldValues>({
  name,
  type,
  placeholder,
  className,
  errors,
  field,
  icon,
  value,
  disabled = false,
  onClick,
  ...props
}: Props<T>): JSX.Element => {
  return (
    <div>
      <input
        id={name}
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onClick={onClick}
        className={className}
        {...props}
        {...field}
      />
      {icon && (
        <Flex className="absolute inset-y-0 right-3" align="center">
          {icon}
        </Flex>
      )}
    </div>
  );
};
