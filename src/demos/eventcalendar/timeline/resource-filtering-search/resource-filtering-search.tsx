import {
  Button,
  Checkbox,
  Eventcalendar,
  Input,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscPopupButton,
  MbscResource,
  Popup,
  setOptions,
  Toast,
} from '@mobiscroll/react';
import { ChangeEvent, useCallback, useMemo, useRef, useState } from 'react';

import './resource-filtering-search.css';

setOptions({
  // localeJs,
  // themeJs
});

const myEvents: MbscCalendarEvent[] = [
  {
    start: 'dyndatetime(y,m,d,5)',
    end: 'dyndatetime(y,m,d,19)',
    title: 'Excavate Foundation',
    resource: 'bulldozer - TX1234',
  },
  {
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,18)',
    title: 'Install Framing',
    resource: 'crane - NY9101',
  },
  {
    start: 'dyndatetime(y,m,d,7)',
    end: 'dyndatetime(y,m,d,20)',
    title: 'Electrical Wiring',
    resource: 'excavator - FL1213',
  },
  {
    start: 'dyndatetime(y,m,d,5)',
    end: 'dyndatetime(y,m,d,22)',
    title: 'Roofing',
    resource: 'crane - IL1617',
  },
  {
    start: 'dyndatetime(y,m,d,7)',
    end: 'dyndatetime(y,m,d,19)',
    title: 'Site Cleanup',
    resource: 'bulldozer - PA1819',
  },
  {
    start: 'dyndatetime(y,m,d,5)',
    end: 'dyndatetime(y,m,d,18)',
    title: 'Foundation Work',
    resource: 'concrete mixer - CA2223',
  },
  {
    start: 'dyndatetime(y,m,d,5)',
    end: 'dyndatetime(y,m,d,22)',
    title: 'Steel Framing',
    resource: 'crane - NY2425',
  },
  {
    start: 'dyndatetime(y,m,d,7)',
    end: 'dyndatetime(y,m,d,16)',
    title: 'Interior Plumbing',
    resource: 'excavator - FL2627',
  },
  {
    start: 'dyndatetime(y,m,d,7)',
    end: 'dyndatetime(y,m,d,16)',
    title: 'Masonry Work',
    resource: 'crane - IL3031',
  },
  {
    start: 'dyndatetime(y,m,d,6)',
    end: 'dyndatetime(y,m,d,15)',
    title: 'Exterior Work',
    resource: 'bulldozer - PA3233',
  },
  {
    start: 'dyndatetime(y,m,d,6)',
    end: 'dyndatetime(y,m,d,15)',
    title: 'Ground Breaking',
    resource: 'bulldozer - TX3435',
  },
  {
    start: 'dyndatetime(y,m,d,9)',
    end: 'dyndatetime(y,m,d,21)',
    title: 'Wall Construction',
    resource: 'crane - NY3839',
  },
  {
    start: 'dyndatetime(y,m,d,7)',
    end: 'dyndatetime(y,m,d,16)',
    title: 'Roof Installation',
    resource: 'excavator - FL4041',
  },
  {
    start: 'dyndatetime(y,m,d,6)',
    end: 'dyndatetime(y,m,d,19)',
    title: 'Painting',
    resource: 'crane - IL4445',
  },
  {
    start: 'dyndatetime(y,m,d,5)',
    end: 'dyndatetime(y,m,d,20)',
    title: 'Driveway Paving',
    resource: 'bulldozer - PA4647',
  },
  {
    start: 'dyndatetime(y,m,d,5)',
    end: 'dyndatetime(y,m,d,18)',
    title: 'Foundation',
    resource: 'concrete mixer - CA5051',
  },
  {
    start: 'dyndatetime(y,m,d,5)',
    end: 'dyndatetime(y,m,d,19)',
    title: 'Demolition',
    resource: 'crane - NY5253',
  },
  {
    start: 'dyndatetime(y,m,d,6)',
    end: 'dyndatetime(y,m,d,16)',
    title: 'Electrical Wiring',
    resource: 'excavator - FL5455',
  },
  {
    start: 'dyndatetime(y,m,d,5)',
    end: 'dyndatetime(y,m,d,17)',
    title: 'Roofing',
    resource: 'crane - IL5859',
  },
  {
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,18)',
    title: 'Finishing Touches',
    resource: 'bulldozer - PA6061',
  },
  {
    start: 'dyndatetime(y,m,d,12)',
    end: 'dyndatetime(y,m,d,22)',
    title: 'Site Preparation',
    resource: 'bulldozer - TX6263',
  },
  {
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,19)',
    title: 'Piling Work',
    resource: 'crane - NY6667',
  },
  {
    start: 'dyndatetime(y,m,d,7)',
    end: 'dyndatetime(y,m,d,18)',
    title: 'Concrete Pouring',
    resource: 'excavator - FL6869',
  },
  {
    start: 'dyndatetime(y,m,d,5)',
    end: 'dyndatetime(y,m,d,21)',
    title: 'Deck Construction',
    resource: 'drill - OH7071',
  },
  {
    start: 'dyndatetime(y,m,d,5)',
    end: 'dyndatetime(y,m,d,20)',
    title: 'Final Touches',
    resource: 'bulldozer - PA7475',
  }, //<hide-comment>
  {
    start: 'dyndatetime(y,m,d-2,5)',
    end: 'dyndatetime(y,m,d-2,19)',
    title: 'Excavate Foundation',
    resource: 'bulldozer - TX1234',
  },
  {
    start: 'dyndatetime(y,m,d-2,8)',
    end: 'dyndatetime(y,m,d-2,18)',
    title: 'Install Framing',
    resource: 'crane - NY9101',
  },
  {
    start: 'dyndatetime(y,m,d-2,7)',
    end: 'dyndatetime(y,m,d-2,20)',
    title: 'Electrical Wiring',
    resource: 'excavator - FL1213',
  },
  {
    start: 'dyndatetime(y,m,d-2,5)',
    end: 'dyndatetime(y,m,d-2,22)',
    title: 'Roofing',
    resource: 'crane - IL1617',
  },
  {
    start: 'dyndatetime(y,m,d-2,7)',
    end: 'dyndatetime(y,m,d-2,19)',
    title: 'Site Cleanup',
    resource: 'bulldozer - PA1819',
  },
  {
    start: 'dyndatetime(y,m,d-2,5)',
    end: 'dyndatetime(y,m,d-2,18)',
    title: 'Foundation Work',
    resource: 'concrete mixer - CA2223',
  },
  {
    start: 'dyndatetime(y,m,d-2,5)',
    end: 'dyndatetime(y,m,d-2,22)',
    title: 'Steel Framing',
    resource: 'crane - NY2425',
  },
  {
    start: 'dyndatetime(y,m,d-2,7)',
    end: 'dyndatetime(y,m,d-2,16)',
    title: 'Interior Plumbing',
    resource: 'excavator - FL2627',
  },
  {
    start: 'dyndatetime(y,m,d-2,7)',
    end: 'dyndatetime(y,m,d-2,16)',
    title: 'Masonry Work',
    resource: 'crane - IL3031',
  },
  {
    start: 'dyndatetime(y,m,d-2,6)',
    end: 'dyndatetime(y,m,d-2,15)',
    title: 'Exterior Work',
    resource: 'bulldozer - PA3233',
  },
  {
    start: 'dyndatetime(y,m,d-2,6)',
    end: 'dyndatetime(y,m,d-2,15)',
    title: 'Ground Breaking',
    resource: 'bulldozer - TX3435',
  },
  {
    start: 'dyndatetime(y,m,d-2,9)',
    end: 'dyndatetime(y,m,d-2,21)',
    title: 'Wall Construction',
    resource: 'crane - NY3839',
  },
  {
    start: 'dyndatetime(y,m,d-2,7)',
    end: 'dyndatetime(y,m,d-2,16)',
    title: 'Roof Installation',
    resource: 'excavator - FL4041',
  },
  {
    start: 'dyndatetime(y,m,d-2,6)',
    end: 'dyndatetime(y,m,d-2,19)',
    title: 'Painting',
    resource: 'crane - IL4445',
  },
  {
    start: 'dyndatetime(y,m,d-2,5)',
    end: 'dyndatetime(y,m,d-2,20)',
    title: 'Driveway Paving',
    resource: 'bulldozer - PA4647',
  },
  {
    start: 'dyndatetime(y,m,d-2,5)',
    end: 'dyndatetime(y,m,d-2,18)',
    title: 'Foundation',
    resource: 'concrete mixer - CA5051',
  },
  {
    start: 'dyndatetime(y,m,d-2,5)',
    end: 'dyndatetime(y,m,d-2,19)',
    title: 'Demolition',
    resource: 'crane - NY5253',
  },
  {
    start: 'dyndatetime(y,m,d-2,6)',
    end: 'dyndatetime(y,m,d-2,16)',
    title: 'Electrical Wiring',
    resource: 'excavator - FL5455',
  },
  {
    start: 'dyndatetime(y,m,d-2,5)',
    end: 'dyndatetime(y,m,d-2,17)',
    title: 'Roofing',
    resource: 'crane - IL5859',
  },
  {
    start: 'dyndatetime(y,m,d-2,8)',
    end: 'dyndatetime(y,m,d-2,18)',
    title: 'Finishing Touches',
    resource: 'bulldozer - PA6061',
  },
  {
    start: 'dyndatetime(y,m,d-2,12)',
    end: 'dyndatetime(y,m,d-2,22)',
    title: 'Site Preparation',
    resource: 'bulldozer - TX6263',
  },
  {
    start: 'dyndatetime(y,m,d-2,8)',
    end: 'dyndatetime(y,m,d-2,19)',
    title: 'Piling Work',
    resource: 'crane - NY6667',
  },
  {
    start: 'dyndatetime(y,m,d-2,7)',
    end: 'dyndatetime(y,m,d-2,18)',
    title: 'Concrete Pouring',
    resource: 'excavator - FL6869',
  },
  {
    start: 'dyndatetime(y,m,d-2,5)',
    end: 'dyndatetime(y,m,d-2,21)',
    title: 'Deck Construction',
    resource: 'drill - OH7071',
  },
  {
    start: 'dyndatetime(y,m,d-2,5)',
    end: 'dyndatetime(y,m,d-2,20)',
    title: 'Final Touches',
    resource: 'bulldozer - PA7475',
  },
  {
    start: 'dyndatetime(y,m,d-1,5)',
    end: 'dyndatetime(y,m,d-1,19)',
    title: 'Foundation Work',
    resource: 'bulldozer - TX1234',
  },
  {
    start: 'dyndatetime(y,m,d-1,8)',
    end: 'dyndatetime(y,m,d-1,18)',
    title: 'Steel Framing',
    resource: 'crane - NY9101',
  },
  {
    start: 'dyndatetime(y,m,d-1,10)',
    end: 'dyndatetime(y,m,d-1,20)',
    title: 'Electrical Wiring',
    resource: 'excavator - FL1213',
  },
  {
    start: 'dyndatetime(y,m,d-1,14)',
    end: 'dyndatetime(y,m,d-1,22)',
    title: 'Roofing',
    resource: 'crane - IL1617',
  },
  {
    start: 'dyndatetime(y,m,d-1,7)',
    end: 'dyndatetime(y,m,d-1,19)',
    title: 'Site Cleanup',
    resource: 'bulldozer - PA1819',
  },
  {
    start: 'dyndatetime(y,m,d-1,5)',
    end: 'dyndatetime(y,m,d-1,18)',
    title: 'Foundation Work',
    resource: 'concrete mixer - CA2223',
  },
  {
    start: 'dyndatetime(y,m,d-1,9)',
    end: 'dyndatetime(y,m,d-1,18)',
    title: 'Steel Framing',
    resource: 'crane - NY2425',
  },
  {
    start: 'dyndatetime(y,m,d-1,8)',
    end: 'dyndatetime(y,m,d-1,19)',
    title: 'Interior Plumbing',
    resource: 'excavator - FL2627',
  },
  {
    start: 'dyndatetime(y,m,d-1,8)',
    end: 'dyndatetime(y,m,d-1,20)',
    title: 'Masonry Work',
    resource: 'crane - IL3031',
  },
  {
    start: 'dyndatetime(y,m,d-1,5)',
    end: 'dyndatetime(y,m,d-1,13)',
    title: 'Exterior Work',
    resource: 'bulldozer - PA3233',
  },
  {
    start: 'dyndatetime(y,m,d-1,5)',
    end: 'dyndatetime(y,m,d-1,16)',
    title: 'Ground Work',
    resource: 'bulldozer - TX3435',
  },
  {
    start: 'dyndatetime(y,m,d-1,7)',
    end: 'dyndatetime(y,m,d-1,19)',
    title: 'Wall Construction',
    resource: 'crane - NY3839',
  },
  {
    start: 'dyndatetime(y,m,d-1,9)',
    end: 'dyndatetime(y,m,d-1,14)',
    title: 'Roof Installation',
    resource: 'excavator - FL4041',
  },
  {
    start: 'dyndatetime(y,m,d-1,5)',
    end: 'dyndatetime(y,m,d-1,16)',
    title: 'Painting',
    resource: 'crane - IL4445',
  },
  {
    start: 'dyndatetime(y,m,d-1,6)',
    end: 'dyndatetime(y,m,d-1,18)',
    title: 'Driveway Paving',
    resource: 'bulldozer - PA4647',
  },
  {
    start: 'dyndatetime(y,m,d-1,7)',
    end: 'dyndatetime(y,m,d-1,16)',
    title: 'Foundation',
    resource: 'concrete mixer - CA5051',
  },
  {
    start: 'dyndatetime(y,m,d-1,8)',
    end: 'dyndatetime(y,m,d-1,22)',
    title: 'Demolition',
    resource: 'crane - NY5253',
  },
  {
    start: 'dyndatetime(y,m,d-1,7)',
    end: 'dyndatetime(y,m,d-1,17)',
    title: 'Electrical Wiring',
    resource: 'excavator - FL5455',
  },
  {
    start: 'dyndatetime(y,m,d-1,4)',
    end: 'dyndatetime(y,m,d-1,15)',
    title: 'Roofing',
    resource: 'crane - IL5859',
  },
  {
    start: 'dyndatetime(y,m,d-1,7)',
    end: 'dyndatetime(y,m,d-1,20)',
    title: 'Finishing Touches',
    resource: 'bulldozer - PA6061',
  },
  {
    start: 'dyndatetime(y,m,d-1,8)',
    end: 'dyndatetime(y,m,d-1,19)',
    title: 'Site Preparation',
    resource: 'bulldozer - TX6263',
  },
  {
    start: 'dyndatetime(y,m,d-1,8)',
    end: 'dyndatetime(y,m,d-1,19)',
    title: 'Piling Work',
    resource: 'crane - NY6667',
  },
  {
    start: 'dyndatetime(y,m,d-1,7)',
    end: 'dyndatetime(y,m,d-1,18)',
    title: 'Concrete Pouring',
    resource: 'excavator - FL6869',
  },
  {
    start: 'dyndatetime(y,m,d-1,6)',
    end: 'dyndatetime(y,m,d-1,22)',
    title: 'Deck Construction',
    resource: 'drill - OH7071',
  },
  {
    start: 'dyndatetime(y,m,d-1,8)',
    end: 'dyndatetime(y,m,d-1,18)',
    title: 'Final Touches',
    resource: 'bulldozer - PA7475',
  },
  {
    start: 'dyndatetime(y,m,d+1,5)',
    end: 'dyndatetime(y,m,d+1,19)',
    title: 'Foundation Work',
    resource: 'bulldozer - TX1234',
  },
  {
    start: 'dyndatetime(y,m,d+1,8)',
    end: 'dyndatetime(y,m,d+1,18)',
    title: 'Steel Framing',
    resource: 'crane - NY9101',
  },
  {
    start: 'dyndatetime(y,m,d+1,10)',
    end: 'dyndatetime(y,m,d+1,20)',
    title: 'Electrical Wiring',
    resource: 'excavator - FL1213',
  },
  {
    start: 'dyndatetime(y,m,d+1,14)',
    end: 'dyndatetime(y,m,d+1,22)',
    title: 'Roofing',
    resource: 'crane - IL1617',
  },
  {
    start: 'dyndatetime(y,m,d+1,7)',
    end: 'dyndatetime(y,m,d+1,19)',
    title: 'Site Cleanup',
    resource: 'bulldozer - PA1819',
  },
  {
    start: 'dyndatetime(y,m,d+1,5)',
    end: 'dyndatetime(y,m,d+1,18)',
    title: 'Foundation Work',
    resource: 'concrete mixer - CA2223',
  },
  {
    start: 'dyndatetime(y,m,d+1,9)',
    end: 'dyndatetime(y,m,d+1,18)',
    title: 'Steel Framing',
    resource: 'crane - NY2425',
  },
  {
    start: 'dyndatetime(y,m,d+1,8)',
    end: 'dyndatetime(y,m,d+1,19)',
    title: 'Interior Plumbing',
    resource: 'excavator - FL2627',
  },
  {
    start: 'dyndatetime(y,m,d+1,8)',
    end: 'dyndatetime(y,m,d+1,20)',
    title: 'Masonry Work',
    resource: 'crane - IL3031',
  },
  {
    start: 'dyndatetime(y,m,d+1,5)',
    end: 'dyndatetime(y,m,d+1,13)',
    title: 'Exterior Work',
    resource: 'bulldozer - PA3233',
  },
  {
    start: 'dyndatetime(y,m,d+1,5)',
    end: 'dyndatetime(y,m,d+1,16)',
    title: 'Ground Work',
    resource: 'bulldozer - TX3435',
  },
  {
    start: 'dyndatetime(y,m,d+1,7)',
    end: 'dyndatetime(y,m,d+1,19)',
    title: 'Wall Construction',
    resource: 'crane - NY3839',
  },
  {
    start: 'dyndatetime(y,m,d+1,9)',
    end: 'dyndatetime(y,m,d+1,14)',
    title: 'Roof Installation',
    resource: 'excavator - FL4041',
  },
  {
    start: 'dyndatetime(y,m,d+1,5)',
    end: 'dyndatetime(y,m,d+1,16)',
    title: 'Painting',
    resource: 'crane - IL4445',
  },
  {
    start: 'dyndatetime(y,m,d+1,6)',
    end: 'dyndatetime(y,m,d+1,18)',
    title: 'Driveway Paving',
    resource: 'bulldozer - PA4647',
  },
  {
    start: 'dyndatetime(y,m,d+1,7)',
    end: 'dyndatetime(y,m,d+1,16)',
    title: 'Foundation',
    resource: 'concrete mixer - CA5051',
  },
  {
    start: 'dyndatetime(y,m,d+1,8)',
    end: 'dyndatetime(y,m,d+1,22)',
    title: 'Demolition',
    resource: 'crane - NY5253',
  },
  {
    start: 'dyndatetime(y,m,d+1,7)',
    end: 'dyndatetime(y,m,d+1,17)',
    title: 'Electrical Wiring',
    resource: 'excavator - FL5455',
  },
  {
    start: 'dyndatetime(y,m,d+1,4)',
    end: 'dyndatetime(y,m,d+1,15)',
    title: 'Roofing',
    resource: 'crane - IL5859',
  },
  {
    start: 'dyndatetime(y,m,d+1,7)',
    end: 'dyndatetime(y,m,d+1,20)',
    title: 'Finishing Touches',
    resource: 'bulldozer - PA6061',
  },
  {
    start: 'dyndatetime(y,m,d+1,8)',
    end: 'dyndatetime(y,m,d+1,19)',
    title: 'Site Preparation',
    resource: 'bulldozer - TX6263',
  },
  {
    start: 'dyndatetime(y,m,d+1,8)',
    end: 'dyndatetime(y,m,d+1,19)',
    title: 'Piling Work',
    resource: 'crane - NY6667',
  },
  {
    start: 'dyndatetime(y,m,d+1,7)',
    end: 'dyndatetime(y,m,d+1,18)',
    title: 'Concrete Pouring',
    resource: 'excavator - FL6869',
  },
  {
    start: 'dyndatetime(y,m,d+1,6)',
    end: 'dyndatetime(y,m,d+1,22)',
    title: 'Deck Construction',
    resource: 'drill - OH7071',
  },
  {
    start: 'dyndatetime(y,m,d+1,8)',
    end: 'dyndatetime(y,m,d+1,18)',
    title: 'Final Touches',
    resource: 'bulldozer - PA7475',
  },
  {
    start: 'dyndatetime(y,m,d+2,5)',
    end: 'dyndatetime(y,m,d+2,19)',
    title: 'Excavate Foundation',
    resource: 'bulldozer - TX1234',
  },
  {
    start: 'dyndatetime(y,m,d+2,8)',
    end: 'dyndatetime(y,m,d+2,18)',
    title: 'Install Framing',
    resource: 'crane - NY9101',
  },
  {
    start: 'dyndatetime(y,m,d+2,7)',
    end: 'dyndatetime(y,m,d+2,20)',
    title: 'Electrical Wiring',
    resource: 'excavator - FL1213',
  },
  {
    start: 'dyndatetime(y,m,d+2,5)',
    end: 'dyndatetime(y,m,d+2,22)',
    title: 'Roofing',
    resource: 'crane - IL1617',
  },
  {
    start: 'dyndatetime(y,m,d+2,7)',
    end: 'dyndatetime(y,m,d+2,19)',
    title: 'Site Cleanup',
    resource: 'bulldozer - PA1819',
  },
  {
    start: 'dyndatetime(y,m,d+2,5)',
    end: 'dyndatetime(y,m,d+2,18)',
    title: 'Foundation Work',
    resource: 'concrete mixer - CA2223',
  },
  {
    start: 'dyndatetime(y,m,d+2,5)',
    end: 'dyndatetime(y,m,d+2,22)',
    title: 'Steel Framing',
    resource: 'crane - NY2425',
  },
  {
    start: 'dyndatetime(y,m,d+2,7)',
    end: 'dyndatetime(y,m,d+2,16)',
    title: 'Interior Plumbing',
    resource: 'excavator - FL2627',
  },
  {
    start: 'dyndatetime(y,m,d+2,7)',
    end: 'dyndatetime(y,m,d+2,16)',
    title: 'Masonry Work',
    resource: 'crane - IL3031',
  },
  {
    start: 'dyndatetime(y,m,d+2,6)',
    end: 'dyndatetime(y,m,d+2,15)',
    title: 'Exterior Work',
    resource: 'bulldozer - PA3233',
  },
  {
    start: 'dyndatetime(y,m,d+2,6)',
    end: 'dyndatetime(y,m,d+2,15)',
    title: 'Ground Breaking',
    resource: 'bulldozer - TX3435',
  },
  {
    start: 'dyndatetime(y,m,d+2,9)',
    end: 'dyndatetime(y,m,d+2,21)',
    title: 'Wall Construction',
    resource: 'crane - NY3839',
  },
  {
    start: 'dyndatetime(y,m,d+2,7)',
    end: 'dyndatetime(y,m,d+2,16)',
    title: 'Roof Installation',
    resource: 'excavator - FL4041',
  },
  {
    start: 'dyndatetime(y,m,d+2,6)',
    end: 'dyndatetime(y,m,d+2,19)',
    title: 'Painting',
    resource: 'crane - IL4445',
  },
  {
    start: 'dyndatetime(y,m,d+2,5)',
    end: 'dyndatetime(y,m,d+2,20)',
    title: 'Driveway Paving',
    resource: 'bulldozer - PA4647',
  },
  {
    start: 'dyndatetime(y,m,d+2,5)',
    end: 'dyndatetime(y,m,d+2,18)',
    title: 'Foundation',
    resource: 'concrete mixer - CA5051',
  },
  {
    start: 'dyndatetime(y,m,d+2,5)',
    end: 'dyndatetime(y,m,d+2,19)',
    title: 'Demolition',
    resource: 'crane - NY5253',
  },
  {
    start: 'dyndatetime(y,m,d+2,6)',
    end: 'dyndatetime(y,m,d+2,16)',
    title: 'Electrical Wiring',
    resource: 'excavator - FL5455',
  },
  {
    start: 'dyndatetime(y,m,d+2,5)',
    end: 'dyndatetime(y,m,d+2,17)',
    title: 'Roofing',
    resource: 'crane - IL5859',
  },
  {
    start: 'dyndatetime(y,m,d+2,8)',
    end: 'dyndatetime(y,m,d+2,18)',
    title: 'Finishing Touches',
    resource: 'bulldozer - PA6061',
  },
  {
    start: 'dyndatetime(y,m,d+2,12)',
    end: 'dyndatetime(y,m,d+2,22)',
    title: 'Site Preparation',
    resource: 'bulldozer - TX6263',
  },
  {
    start: 'dyndatetime(y,m,d+2,8)',
    end: 'dyndatetime(y,m,d+2,19)',
    title: 'Piling Work',
    resource: 'crane - NY6667',
  },
  {
    start: 'dyndatetime(y,m,d+2,7)',
    end: 'dyndatetime(y,m,d+2,18)',
    title: 'Concrete Pouring',
    resource: 'excavator - FL6869',
  },
  {
    start: 'dyndatetime(y,m,d+2,5)',
    end: 'dyndatetime(y,m,d+2,21)',
    title: 'Deck Construction',
    resource: 'drill - OH7071',
  },
  {
    start: 'dyndatetime(y,m,d+2,5)',
    end: 'dyndatetime(y,m,d+2,20)',
    title: 'Final Touches',
    resource: 'bulldozer - PA7475',
  },
  {
    start: 'dyndatetime(y,m,d+3,5)',
    end: 'dyndatetime(y,m,d+3,19)',
    title: 'Foundation Work',
    resource: 'bulldozer - TX1234',
  },
  {
    start: 'dyndatetime(y,m,d+3,8)',
    end: 'dyndatetime(y,m,d+3,18)',
    title: 'Steel Framing',
    resource: 'crane - NY9101',
  },
  {
    start: 'dyndatetime(y,m,d+3,10)',
    end: 'dyndatetime(y,m,d+3,20)',
    title: 'Electrical Wiring',
    resource: 'excavator - FL1213',
  },
  {
    start: 'dyndatetime(y,m,d+3,14)',
    end: 'dyndatetime(y,m,d+3,22)',
    title: 'Roofing',
    resource: 'crane - IL1617',
  },
  {
    start: 'dyndatetime(y,m,d+3,7)',
    end: 'dyndatetime(y,m,d+3,19)',
    title: 'Site Cleanup',
    resource: 'bulldozer - PA1819',
  },
  {
    start: 'dyndatetime(y,m,d+3,5)',
    end: 'dyndatetime(y,m,d+3,18)',
    title: 'Foundation Work',
    resource: 'concrete mixer - CA2223',
  },
  {
    start: 'dyndatetime(y,m,d+3,9)',
    end: 'dyndatetime(y,m,d+3,18)',
    title: 'Steel Framing',
    resource: 'crane - NY2425',
  },
  {
    start: 'dyndatetime(y,m,d+3,8)',
    end: 'dyndatetime(y,m,d+3,19)',
    title: 'Interior Plumbing',
    resource: 'excavator - FL2627',
  },
  {
    start: 'dyndatetime(y,m,d+3,8)',
    end: 'dyndatetime(y,m,d+3,20)',
    title: 'Masonry Work',
    resource: 'crane - IL3031',
  },
  {
    start: 'dyndatetime(y,m,d+3,5)',
    end: 'dyndatetime(y,m,d+3,13)',
    title: 'Exterior Work',
    resource: 'bulldozer - PA3233',
  },
  {
    start: 'dyndatetime(y,m,d+3,5)',
    end: 'dyndatetime(y,m,d+3,16)',
    title: 'Ground Work',
    resource: 'bulldozer - TX3435',
  },
  {
    start: 'dyndatetime(y,m,d+3,7)',
    end: 'dyndatetime(y,m,d+3,19)',
    title: 'Wall Construction',
    resource: 'crane - NY3839',
  },
  {
    start: 'dyndatetime(y,m,d+3,9)',
    end: 'dyndatetime(y,m,d+3,14)',
    title: 'Roof Installation',
    resource: 'excavator - FL4041',
  },
  {
    start: 'dyndatetime(y,m,d+3,5)',
    end: 'dyndatetime(y,m,d+3,16)',
    title: 'Painting',
    resource: 'crane - IL4445',
  },
  {
    start: 'dyndatetime(y,m,d+3,6)',
    end: 'dyndatetime(y,m,d+3,18)',
    title: 'Driveway Paving',
    resource: 'bulldozer - PA4647',
  },
  {
    start: 'dyndatetime(y,m,d+3,7)',
    end: 'dyndatetime(y,m,d+3,16)',
    title: 'Foundation',
    resource: 'concrete mixer - CA5051',
  },
  {
    start: 'dyndatetime(y,m,d+3,8)',
    end: 'dyndatetime(y,m,d+3,22)',
    title: 'Demolition',
    resource: 'crane - NY5253',
  },
  {
    start: 'dyndatetime(y,m,d+3,7)',
    end: 'dyndatetime(y,m,d+3,17)',
    title: 'Electrical Wiring',
    resource: 'excavator - FL5455',
  },
  {
    start: 'dyndatetime(y,m,d+3,4)',
    end: 'dyndatetime(y,m,d+3,15)',
    title: 'Roofing',
    resource: 'crane - IL5859',
  },
  {
    start: 'dyndatetime(y,m,d+3,7)',
    end: 'dyndatetime(y,m,d+3,20)',
    title: 'Finishing Touches',
    resource: 'bulldozer - PA6061',
  },
  {
    start: 'dyndatetime(y,m,d+3,8)',
    end: 'dyndatetime(y,m,d+3,19)',
    title: 'Site Preparation',
    resource: 'bulldozer - TX6263',
  },
  {
    start: 'dyndatetime(y,m,d+3,8)',
    end: 'dyndatetime(y,m,d+3,19)',
    title: 'Piling Work',
    resource: 'crane - NY6667',
  },
  {
    start: 'dyndatetime(y,m,d+3,7)',
    end: 'dyndatetime(y,m,d+3,18)',
    title: 'Concrete Pouring',
    resource: 'excavator - FL6869',
  },
  {
    start: 'dyndatetime(y,m,d+3,6)',
    end: 'dyndatetime(y,m,d+3,22)',
    title: 'Deck Construction',
    resource: 'drill - OH7071',
  },
  {
    start: 'dyndatetime(y,m,d+3,8)',
    end: 'dyndatetime(y,m,d+3,18)',
    title: 'Final Touches',
    resource: 'bulldozer - PA7475',
  },
  {
    start: 'dyndatetime(y,m,d+4,5)',
    end: 'dyndatetime(y,m,d+4,19)',
    title: 'Excavate Foundation',
    resource: 'bulldozer - TX1234',
  },
  {
    start: 'dyndatetime(y,m,d+4,8)',
    end: 'dyndatetime(y,m,d+4,18)',
    title: 'Install Framing',
    resource: 'crane - NY9101',
  },
  {
    start: 'dyndatetime(y,m,d+4,7)',
    end: 'dyndatetime(y,m,d+4,20)',
    title: 'Electrical Wiring',
    resource: 'excavator - FL1213',
  },
  {
    start: 'dyndatetime(y,m,d+4,5)',
    end: 'dyndatetime(y,m,d+4,22)',
    title: 'Roofing',
    resource: 'crane - IL1617',
  },
  {
    start: 'dyndatetime(y,m,d+4,7)',
    end: 'dyndatetime(y,m,d+4,19)',
    title: 'Site Cleanup',
    resource: 'bulldozer - PA1819',
  },
  {
    start: 'dyndatetime(y,m,d+4,5)',
    end: 'dyndatetime(y,m,d+4,18)',
    title: 'Foundation Work',
    resource: 'concrete mixer - CA2223',
  },
  {
    start: 'dyndatetime(y,m,d+4,5)',
    end: 'dyndatetime(y,m,d+4,22)',
    title: 'Steel Framing',
    resource: 'crane - NY2425',
  },
  {
    start: 'dyndatetime(y,m,d+4,7)',
    end: 'dyndatetime(y,m,d+4,16)',
    title: 'Interior Plumbing',
    resource: 'excavator - FL2627',
  },
  {
    start: 'dyndatetime(y,m,d+4,7)',
    end: 'dyndatetime(y,m,d+4,16)',
    title: 'Masonry Work',
    resource: 'crane - IL3031',
  },
  {
    start: 'dyndatetime(y,m,d+4,6)',
    end: 'dyndatetime(y,m,d+4,15)',
    title: 'Exterior Work',
    resource: 'bulldozer - PA3233',
  },
  {
    start: 'dyndatetime(y,m,d+4,6)',
    end: 'dyndatetime(y,m,d+4,15)',
    title: 'Ground Breaking',
    resource: 'bulldozer - TX3435',
  },
  {
    start: 'dyndatetime(y,m,d+4,9)',
    end: 'dyndatetime(y,m,d+4,21)',
    title: 'Wall Construction',
    resource: 'crane - NY3839',
  },
  {
    start: 'dyndatetime(y,m,d+4,7)',
    end: 'dyndatetime(y,m,d+4,16)',
    title: 'Roof Installation',
    resource: 'excavator - FL4041',
  },
  {
    start: 'dyndatetime(y,m,d+4,6)',
    end: 'dyndatetime(y,m,d+4,19)',
    title: 'Painting',
    resource: 'crane - IL4445',
  },
  {
    start: 'dyndatetime(y,m,d+4,5)',
    end: 'dyndatetime(y,m,d+4,20)',
    title: 'Driveway Paving',
    resource: 'bulldozer - PA4647',
  },
  {
    start: 'dyndatetime(y,m,d+4,5)',
    end: 'dyndatetime(y,m,d+4,18)',
    title: 'Foundation',
    resource: 'concrete mixer - CA5051',
  },
  {
    start: 'dyndatetime(y,m,d+4,5)',
    end: 'dyndatetime(y,m,d+4,19)',
    title: 'Demolition',
    resource: 'crane - NY5253',
  },
  {
    start: 'dyndatetime(y,m,d+4,6)',
    end: 'dyndatetime(y,m,d+4,16)',
    title: 'Electrical Wiring',
    resource: 'excavator - FL5455',
  },
  {
    start: 'dyndatetime(y,m,d+4,5)',
    end: 'dyndatetime(y,m,d+4,17)',
    title: 'Roofing',
    resource: 'crane - IL5859',
  },
  {
    start: 'dyndatetime(y,m,d+4,8)',
    end: 'dyndatetime(y,m,d+4,18)',
    title: 'Finishing Touches',
    resource: 'bulldozer - PA6061',
  },
  {
    start: 'dyndatetime(y,m,d+4,12)',
    end: 'dyndatetime(y,m,d+4,22)',
    title: 'Site Preparation',
    resource: 'bulldozer - TX6263',
  },
  {
    start: 'dyndatetime(y,m,d+4,8)',
    end: 'dyndatetime(y,m,d+4,19)',
    title: 'Piling Work',
    resource: 'crane - NY6667',
  },
  {
    start: 'dyndatetime(y,m,d+4,7)',
    end: 'dyndatetime(y,m,d+4,18)',
    title: 'Concrete Pouring',
    resource: 'excavator - FL6869',
  },
  {
    start: 'dyndatetime(y,m,d+4,5)',
    end: 'dyndatetime(y,m,d+4,21)',
    title: 'Deck Construction',
    resource: 'drill - OH7071',
  },
  {
    start: 'dyndatetime(y,m,d+4,5)',
    end: 'dyndatetime(y,m,d+4,20)',
    title: 'Final Touches',
    resource: 'bulldozer - PA7475',
  },
  //</hide-comment>
];

const myResources: MbscResource[] = [
  {
    id: 'site1',
    name: '123 Main St, Downtown City',
    eventCreation: false,
    children: [
      {
        id: 'bulldozer - TX1234',
        name: 'Bulldozer - TX1234',
        color: '#1dab2f',
        status: 'on site',
      },
      {
        id: 'concrete mixer - CA5678',
        name: 'Concrete Mixer - CA5678',
        color: '#1dab2f',
        status: 'in maintenance',
      },
      {
        id: 'crane - NY9101',
        name: 'Crane - NY9101',
        color: '#1dab2f',
        status: 'on site',
      },
      {
        id: 'excavator - FL1213',
        name: 'Excavator - FL1213',
        color: '#1dab2f',
        status: 'on site',
      },
      {
        id: 'drill - OH1415',
        name: 'Drill - OH1415',
        color: '#1dab2f',
        status: 'in maintenance',
      },
      {
        id: 'crane - IL1617',
        name: 'Crane - IL1617',
        color: '#1dab2f',
        status: 'on site',
      },
      {
        id: 'bulldozer - PA1819',
        name: 'Bulldozer - PA1819',
        color: '#1dab2f',
        status: 'on site',
      },
    ],
  },
  {
    id: 'site2',
    name: '456 Elm St, Uptown City',
    eventCreation: false,
    children: [
      {
        id: 'bulldozer - TX2021',
        name: 'Bulldozer - TX2021',
        color: '#4981d6',
        status: 'in maintenance',
      },
      {
        id: 'concrete mixer - CA2223',
        name: 'Concrete Mixer - CA2223',
        color: '#4981d6',
        status: 'on site',
      },
      {
        id: 'crane - NY2425',
        name: 'Crane - NY2425',
        color: '#4981d6',
        status: 'on site',
      },
      {
        id: 'excavator - FL2627',
        name: 'Excavator - FL2627',
        color: '#4981d6',
        status: 'on site',
      },
      {
        id: 'drill - OH2829',
        name: 'Drill - OH2829',
        color: '#4981d6',
        status: 'in maintenance',
      },
      {
        id: 'crane - IL3031',
        name: 'Crane - IL3031',
        color: '#4981d6',
        status: 'on site',
      },
      {
        id: 'bulldozer - PA3233',
        name: 'Bulldozer - PA3233',
        color: '#4981d6',
        status: 'on site',
      },
    ],
  },
  {
    id: 'site3',
    name: '789 Maple Ave, Suburban Area',
    eventCreation: false,
    children: [
      {
        id: 'bulldozer - TX3435',
        name: 'Bulldozer - TX3435',
        color: '#f7961e',
        status: 'on site',
      },
      {
        id: 'concrete mixer - CA3637',
        name: 'Concrete Mixer - CA3637',
        color: '#f7961e',
        status: 'in maintenance',
      },
      {
        id: 'crane - NY3839',
        name: 'Crane - NY3839',
        color: '#f7961e',
        status: 'on site',
      },
      {
        id: 'excavator - FL4041',
        name: 'Excavator - FL4041',
        color: '#f7961e',
        status: 'on site',
      },
      {
        id: 'crane - IL4445',
        name: 'Crane - IL4445',
        color: '#f7961e',
        status: 'on site',
      },
      {
        id: 'bulldozer - PA4647',
        name: 'Bulldozer - PA4647',
        color: '#f7961e',
        status: 'on site',
      },
    ],
  },
  {
    id: 'site4',
    name: '101 Industrial Blvd, Industrial City',
    eventCreation: false,
    children: [
      {
        id: 'bulldozer - TX4849',
        name: 'Bulldozer - TX4849',
        color: '#e25dd2',
        status: 'in maintenance',
      },
      {
        id: 'concrete mixer - CA5051',
        name: 'Concrete Mixer - CA5051',
        color: '#e25dd2',
        status: 'on site',
      },
      {
        id: 'crane - NY5253',
        name: 'Crane - NY5253',
        color: '#e25dd2',
        status: 'on site',
      },
      {
        id: 'excavator - FL5455',
        name: 'Excavator - FL5455',
        color: '#e25dd2',
        status: 'on site',
      },
      {
        id: 'drill - OH5657',
        name: 'Drill - OH5657',
        color: '#e25dd2',
        status: 'in maintenance',
      },
      {
        id: 'crane - IL5859',
        name: 'Crane - IL5859',
        color: '#e25dd2',
        status: 'on site',
      },
      {
        id: 'bulldozer - PA6061',
        name: 'Bulldozer - PA6061',
        color: '#e25dd2',
        status: 'on site',
      },
    ],
  },
  {
    id: 'site5',
    name: '202 River Rd, Riverside City',
    eventCreation: false,
    children: [
      {
        id: 'bulldozer - TX6263',
        name: 'Bulldozer - TX6263',
        color: '#34c8e0',
        status: 'on site',
      },
      {
        id: 'concrete mixer - CA6465',
        name: 'Concrete Mixer - CA6465',
        color: '#34c8e0',
        status: 'in maintenance',
      },
      {
        id: 'crane - NY6667',
        name: 'Crane - NY6667',
        color: '#34c8e0',
        status: 'on site',
      },
      {
        id: 'excavator - FL6869',
        name: 'Excavator - FL6869',
        color: '#34c8e0',
        status: 'on site',
      },
      {
        id: 'drill - OH7071',
        name: 'Drill - OH7071',
        color: '#34c8e0',
        status: 'on site',
      },
      {
        id: 'crane - IL7273',
        name: 'Crane - IL7273',
        color: '#34c8e0',
        status: 'in maintenance',
      },
      {
        id: 'bulldozer - PA7475',
        name: 'Bulldozer - PA7475',
        color: '#34c8e0',
        status: 'on site',
      },
    ],
  },
];

const myFilters = [
  { id: 'on site', name: 'On site', value: true },
  { id: 'in maintenance', name: 'In maintenance', value: true },
];

myResources.forEach((site) => {
  myFilters.push({ id: site.id as string, name: site.name as string, value: true });
});

function App() {
  const [filteredResources, setFilteredResources] = useState<MbscResource[]>(myResources);
  const [isPopupOpen, setPopupOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [myAnchor, setAnchor] = useState<HTMLElement>();
  const [filters, setFilters] = useState<{ [key: string]: boolean }>(
    myFilters.reduce(
      (map, f) => {
        map[f.id] = true;
        return map;
      },
      {} as { [key: string]: boolean },
    ),
  );
  const [tempFilters, setTempFilters] = useState<{ [key: string]: boolean }>({});
  const [isToastOpen, setToastOpen] = useState<boolean>(false);
  const [toastMsg, setToastMsg] = useState<string>('');

  const buttonRef = useRef<Button>(null);
  const searchTimeout = useRef<ReturnType<typeof setTimeout>>();

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      timeline: {
        type: 'week',
        startTime: '05:00',
        endTime: '22:00',
        startDay: 1,
        endDay: 5,
        timeCellStep: 60,
        timeLabelStep: 60,
        weekNumbers: true,
      },
    }),
    [],
  );

  const filterResources = useCallback((currentFilters: { [key: string]: boolean }, currentQuery: string) => {
    setFilteredResources(
      myResources
        .map((site) => ({
          id: site.id,
          name: site.name,
          eventCreation: site.eventCreation,
          children: (site.children ?? []).filter(
            (resource) =>
              currentFilters[resource.status] &&
              (!currentQuery || (resource.name && resource.name.toLowerCase().includes(currentQuery.toLowerCase()))),
          ),
        }))
        .filter((site) => site.children.length > 0 && currentFilters[site.id]),
    );
  }, []);

  const openToast = useCallback((message: string) => {
    setToastMsg(message);
    setToastOpen(true);
  }, []);

  const openFilters = useCallback(() => {
    setTempFilters({ ...filters });
    if (buttonRef.current) {
      setAnchor(buttonRef.current.nativeElement);
    }
    setPopupOpen(true);
  }, [filters]);

  const applyFilters = useCallback(() => {
    setFilters({ ...tempFilters });
    setPopupOpen(false);
    filterResources(tempFilters, searchQuery);
    openToast('Filters applied');
  }, [filterResources, openToast, searchQuery, tempFilters]);

  const resetFilters = useCallback(() => {
    const updatedFilters = myFilters.reduce(
      (map, f) => {
        map[f.id] = true;
        return map;
      },
      {} as { [key: string]: boolean },
    );
    setSearchQuery('');
    setFilters(updatedFilters);
    filterResources(updatedFilters, '');
    openToast('Filters cleared');
  }, [filterResources, openToast]);

  const handleCloseToast = useCallback(() => {
    setToastOpen(false);
  }, []);

  const handlePopupClose = useCallback(() => {
    setPopupOpen(false);
  }, []);

  const handleSearch = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      const query = ev.target.value;
      setSearchQuery(query);
      if (searchTimeout.current) {
        clearTimeout(searchTimeout.current);
      }
      searchTimeout.current = setTimeout(() => filterResources(filters, query), 300);
    },
    [filterResources, filters],
  );

  const handleCheckboxChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      const key = ev.target.value;
      if (key) {
        tempFilters[key] = !tempFilters[key];
      }
      setTempFilters({ ...tempFilters });
    },
    [tempFilters],
  );

  const renderCustomResource = useCallback(
    (resource: MbscResource) => (
      <>
        <div className="mds-resource-filtering-name">{resource.name}</div>
        {resource.status && (
          <div className="mds-resource-filtering-status">
            <span
              className="mds-resource-filtering-status-dot"
              style={{ backgroundColor: resource.status === 'on site' ? 'green' : 'orange' }}
            ></span>
            {resource.status}
          </div>
        )}
      </>
    ),
    [],
  );

  const renderCustomResourceEmpty = useCallback(
    () => (
      <div className="mds-resource-filtering-empty mbsc-flex mbsc-align-items-center">
        <div className="mbsc-flex-1-1">
          <img src="https://img.mobiscroll.com/demos/filter-no-result.png" alt="Empty list" style={{ width: '100px' }} />
          <p className="mbsc-font mbsc-margin mbsc-medium mbsc-italic mbsc-txt-muted">No resources match your search.</p>
          <p className="mbsc-margin mbsc-medium mbsc-italic mbsc-txt-muted">Adjust your filters or try a different keyword.</p>
          <Button mbsc-button="true" variant="outline" onClick={resetFilters}>
            Reset Filters
          </Button>
        </div>
      </div>
    ),
    [resetFilters],
  );

  const renderCustomResourceHeader = useCallback(
    () => (
      <div className="mbsc-flex mbsc-align-items-center mbsc-font mds-resource-filtering-search">
        <label className="mbsc-flex-1-1">
          <Input
            type="text"
            autoComplete="off"
            inputStyle="outline"
            startIcon="material-search"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </label>
        <Button ref={buttonRef} startIcon="material-filter-list" variant="outline" className="mbsc-flex-none" onClick={openFilters}>
          Filter
        </Button>
      </div>
    ),
    [handleSearch, openFilters, searchQuery],
  );

  const popupButtons = useMemo<(string | MbscPopupButton)[]>(
    () => [
      'cancel',
      {
        text: 'Apply',
        keyCode: 'enter',
        handler: applyFilters,
        cssClass: 'mbsc-popup-button-primary',
      },
    ],
    [applyFilters],
  );

  return (
    <>
      <Eventcalendar
        cssClass="mds-resource-filtering-calendar"
        clickToCreate={true}
        dragToCreate={true}
        dragToMove={true}
        dragToResize={true}
        view={myView}
        data={myEvents}
        resources={filteredResources}
        renderResource={renderCustomResource}
        renderResourceEmpty={renderCustomResourceEmpty}
        renderResourceHeader={renderCustomResourceHeader}
      />
      <Popup
        contentPadding={false}
        display="anchored"
        anchor={myAnchor}
        focusOnClose={false}
        focusOnOpen={false}
        showOverlay={false}
        width={400}
        buttons={popupButtons}
        isOpen={isPopupOpen}
        onClose={handlePopupClose}
      >
        <div className="mbsc-form-group">
          <div className="mbsc-form-group-title">Operational Status</div>
          {myFilters.slice(0, 2).map((filter) => (
            <Checkbox
              key={filter.id}
              label={filter.name}
              value={filter.id}
              checked={tempFilters[filter.id]}
              onChange={handleCheckboxChange}
            />
          ))}
        </div>

        <div className="mbsc-form-group">
          <div className="mbsc-form-group-title">Job sites</div>
          {myFilters.slice(2).map((filter) => (
            <Checkbox
              key={filter.id}
              label={filter.name}
              value={filter.id}
              checked={tempFilters[filter.id]}
              onChange={handleCheckboxChange}
            />
          ))}
        </div>
      </Popup>
      <Toast message={toastMsg} isOpen={isToastOpen} onClose={handleCloseToast} />
    </>
  );
}

export default App;
