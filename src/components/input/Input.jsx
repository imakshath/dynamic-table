import React from "react";
import './Input.scss';

export default function Input({ onChange, value, name, type, label }) {
    return (
        <div className="input-wrapper">
            <label htmlFor={name}>{label}</label>:
            <input
                type={type}
                onChange={onChange}
                value={value}
                name={name}
            />
        </div>
    );
}
