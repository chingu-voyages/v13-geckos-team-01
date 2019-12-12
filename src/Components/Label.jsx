import React, { useState, useEffect } from "react";

const Label = ({ names, units, values }) => {
  return (
    <tbody>
      <tr>
        <td>
          <strong>{names}</strong>
        </td>
        <td>{values}</td>
        <td>{units}</td>
      </tr>
    </tbody>
  );
};

export default Label;
