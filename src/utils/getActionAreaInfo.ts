import CommunityIcon from '../assets/actionIcons/community.png';
import CourtsIcon from '../assets/actionIcons/courts.png';
import VictimsIcon from '../assets/actionIcons/victims.png';

export function getActionIcon(iconName: string) {
  switch (iconName) {
    case 'community':
      return CommunityIcon;
    case 'courts':
      return CourtsIcon;
    case 'victims':
      return VictimsIcon;
    default:
      return;
  }
}

export function getActionDescription(iconName: string) {
  switch (iconName) {
    case 'community':
      return 'Community Informed Policing';
    case 'courts':
      return 'Courts and Sentencing';
    case 'victims':
      return 'Helping Underserved Victims of Crime';
    default:
      return '';
  }
}