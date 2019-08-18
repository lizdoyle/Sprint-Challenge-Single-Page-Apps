import React from 'react';
import {Card, Label, Icon} from "semantic-ui-react";

const  EpisodeCard = ({name, air_date: airDate, episode, characters}) => {

    return(
      <Card
        header={name}
        description={`${airDate} - ${episode}`}
        extra={
          <Label className="bottom right attached">
            <Icon name="user" /> {characters && characters.length}
            </Label>
          }
      />
    );
}

 export default EpisodeCard
