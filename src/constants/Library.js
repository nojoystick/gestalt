import { colors } from './theme';
import * as Previews from '../assets';

/**
 * Hardcoded data for the 9 effect pedal options
 * Eventually these could be migrated to Firebase or similar; at least the text portions
 */

const LibraryOptions = [
  {
    title: 'glanz',
    subtitle: 'preamp and equalizer',
    description: '',
    borderColor: colors.a,
    fillColor: colors.a40,
    activeColor: colors.a80,
    previewImage: Previews.Glanz,
    params: {
      knobs: [
        {
          name: 'bass',
          min: '0',
          max: '100',
          value: '60',
          hideLabel: true,
        },
        {
          name: 'mid',
          min: '0',
          max: '100',
          value: '20',
          hideLabel: true,
        },
        {
          name: 'treble',
          min: '0',
          max: '100',
          value: '40',
          hideLabel: true,
        },
        {
          name: 'gain',
          min: '0',
          max: '100',
          value: '0',
          hideLabel: true,
        },
      ],
    },
  },
  {
    title: 'lügner',
    subtitle: 'distortion',
    description: '',
    borderColor: colors.b,
    fillColor: colors.b40,
    activeColor: colors.b80,
    previewImage: Previews.Lügner,
    params: {
      knobs: [
        {
          name: 'amt',
          min: '0',
          max: '100',
          value: '20',
          hideLabel: 'true',
        },
        {
          name: 'warmth',
          min: '0',
          max: '100',
          value: '40',
          hideLabel: 'false',
        },
      ],
      switches: [
        {
          name: 'velocity',
          value: true,
        },
      ],
    },
  },
  {
    title: 'no joystick',
    subtitle: 'chaos',
    description: '',
    borderColor: colors.c,
    fillColor: colors.c40,
    activeColor: colors.c80,
    previewImage: Previews.NoJoystick,
  },
  {
    title: 'pendeln',
    subtitle: 'lfo',
    description: '',
    borderColor: colors.d,
    fillColor: colors.d40,
    activeColor: colors.d80,
    previewImage: Previews.Pendeln,
    params: {
      knobs: [
        {
          name: 'rate',
          min: '0',
          max: '2000',
          step: '1',
          value: '0',
          hideLabel: true,
        },
        {
          name: 'depth',
          min: '0',
          max: '2000',
          value: '2000',
          hideLabel: true,
        },
      ],
    },
  },
  {
    title: 'post',
    subtitle: 'envelope',
    description: 'from me to you',
    params: {
      knobs: [
        {
          name: 'a',
          min: '0',
          max: '2000',
          step: '1',
          value: '0',
          hideLabel: true,
        },
        {
          name: 'd',
          min: '0',
          max: '2000',
          value: '2000',
          hideLabel: true,
        },
        {
          name: 's',
          min: '0',
          max: '2000',
          value: '1000',
          hideLabel: true,
        },
        {
          name: 'r',
          min: '0',
          max: '2000',
          value: '0',
          hideLabel: true,
        },
      ],
    },
    borderColor: colors.e,
    fillColor: colors.e40,
    activeColor: colors.e80,
    previewImage: Previews.Post,
  },
  {
    title: 'reflektion',
    subtitle: 'reverb',
    description: 'find a chamber to reflekt',
    borderColor: colors.f,
    fillColor: colors.f40,
    activeColor: colors.f80,
    previewImage: Previews.Reflektion,
    params: {
      radioButtons: [
        {
          name: 'type',
          options: ['plate', 'spring', 'room', 'cathedral'],
          labels: ['plate', 'spring', 'room', 'cathedral'],
          value: 'room',
          hideLabel: 'true',
        },
      ],
      knobs: [
        {
          name: 'amt',
          min: '0',
          max: '100',
          value: '20',
          hideLabel: 'true',
        },
        {
          name: 'warmth',
          min: '0',
          max: '100',
          value: '40',
          hideLabel: 'true',
        },
        {
          name: 'high',
          min: '0',
          max: '100',
          value: '20',
          hideLabel: 'true',
        },
        {
          name: 'pre-del',
          min: '0',
          max: '100',
          value: '0',
          hideLabel: 'false',
        },
      ],
      switches: [
        {
          name: 'velocity',
          value: true,
        },
      ],
    },
  },
  {
    title: 'sieb',
    subtitle: 'filter',
    description: '',
    borderColor: colors.g,
    fillColor: colors.g40,
    activeColor: colors.g80,
    previewImage: Previews.Sieb,
    params: {
      radioButtons: [
        {
          name: 'type',
          options: [
            'low pass',
            'high pass',
            'band pass',
            'band reject',
            'peak',
          ],
          labels: ['low pass', 'high pass', 'band pass', 'band reject', 'peak'],
          value: 'low pass',
          hideLabel: 'true',
        },
      ],
      knobs: [
        {
          min: '0',
          max: '20000',
          value: '0',
          hideLabel: 'false',
          name: 'freq',
        },
        {
          min: '0',
          max: '50',
          value: '0',
          hideLabel: 'false',
          name: 'q',
        },
      ],
    },
  },
  {
    title: 'verbrecher',
    subtitle: 'bitcrusher',
    description: '',
    borderColor: colors.h,
    fillColor: colors.h40,
    activeColor: colors.h80,
    previewImage: Previews.Verbrecher,
    params: {
      knobs: [
        {
          name: 'bits',
          min: '1',
          max: '64',
          value: '16',
          hideLabel: 'false',
        },
        {
          name: 'amt',
          min: '0',
          max: '100',
          value: '40',
          hideLabel: 'true',
        },
      ],
      switches: [
        {
          name: 'velocity',
          value: true,
        },
      ],
    },
  },
  {
    title: 'wiedersehen',
    subtitle: 'delay',
    description: 'once was never enough',
    borderColor: colors.i,
    fillColor: colors.i40,
    activeColor: colors.i80,
    previewImage: Previews.Wiedersehen,
    params: {
      knobs: [
        {
          name: 'amt',
          min: '0',
          max: '2000',
          step: '1',
          value: '0',
          hideLabel: true,
          top: '0px',
          left: '0px',
          size: '70',
          padding: '5px',
        },
        {
          name: 'time',
          min: '0',
          max: '2000',
          value: '2000',
          hideLabel: true,
          top: '0px',
          left: '80px',
          size: '115',
          padding: '5px',
        },
        {
          name: 'filter',
          min: '0',
          max: '20000',
          value: '1000',
          hideLabel: true,
          top: '90px',
          left: '10px',
          size: '70',
          padding: '5px',
        },
        {
          name: 'detune',
          min: '0',
          max: '100',
          value: '0',
          hideLabel: true,
          top: '125px',
          left: '95px',
          size: '70',
          padding: '5px',
        },
      ],
    },
  },
];

export default LibraryOptions;
