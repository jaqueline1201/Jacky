import React from "react";

const page = () => {
  return (
    <div>
      <h1>Menus</h1>
      <div className="e-menu">
        <h2>Everyday Menu</h2>
        <ul className="flavors">
          <li>Adobada</li>
          <li>Barbacoa</li>
          <li>Cabeza</li>
          <li>Carne</li>
          <li>Chicharron</li>
          <li>Cochinita</li>
          <li>Costilla</li>
          <li>Frijol</li>
          <li>Higado</li>
          <li>Lengua</li>
          <li>Machaca</li>
          <li>Papa</li>
          <li>Pastor</li>
          <li>Suadero</li>
        </ul>
      </div>
      <div className="s-menu">
        <h2>Special Menu</h2>
        <ul></ul>
      </div>
    </div>
  );
};

export default page;
