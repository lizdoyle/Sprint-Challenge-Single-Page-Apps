import React from "react";
import {Card, Icon, Label} from "semantic-ui-react";

export default function LocationCard({ name, type, dimension, residents }) {
  return (
    <Card
      name={name}
      description={`${type} - ${dimension}`}
      exra={
        <Label className="bottom right attached">
          {residents && residents.length} Residents
          </Label>
      }

    />


  );
}
