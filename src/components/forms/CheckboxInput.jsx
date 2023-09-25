import React from "react";
import styles from "./CheckboxInput.module.css";

const CheckboxInput = ({ checked, onChange }) => {
  return (
    <div>
      <label className={styles.labelcheck}>
        <input
          className={styles.inputCheck}
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        Termos e condições
      </label>
    </div>
  );
};

export default CheckboxInput;
