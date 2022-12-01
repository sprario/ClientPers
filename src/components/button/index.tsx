import React from "react";
import PropTypes from "prop-types";

type ButtonProps = {
  children: string;
  to?: string;
  color?: string;
  variant?: string;
  size?: string;
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

/**
 * Button
 * @param {string} icon
 * @param {string} label
 * @param {string} to
 * @param {string} color - (success, primary, secondary, warning, error)
 * @param {string} variant - (contained, outlined, text)
 * @param {string} size - (small, medium, large)
 * @param {bool} fullWidth
 * @param {bool} loading
 * @param {bool} disabled
 */
const Button = ({ children, to, onClick, ...props }: ButtonProps) => {
  return (
    <button onClick={onClick} type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
      {children}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  to: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  fullWidth: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  variant: "contained",
  color: "primary"
};

export default Button;
