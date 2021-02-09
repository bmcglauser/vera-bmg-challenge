import React, { FunctionComponent } from 'react';
import './ActionAreas.scss';
import {
  getActionIcon,
  getActionDescription
} from '../../utils/getActionAreaInfo';

interface ActionAreasProps {
  areas: string[];
}

const ActionAreas: FunctionComponent<ActionAreasProps> = ({ areas }) => {
  const items = areas.map((areaString, i) => {
    const icon = getActionIcon(areas[i]);
    const description = getActionDescription(areas[i]);

    return (
      <div className="action-area-wrapper" key={`${areaString}/${i}`}>
        <img src={icon} alt={`${description}`} />
        <p>{description}</p>
      </div>
    );
  });

  return (
    <div className="areas-wrapper">
      <h3>Action Areas</h3>
      {items}
    </div>
  );
};

export default ActionAreas;
