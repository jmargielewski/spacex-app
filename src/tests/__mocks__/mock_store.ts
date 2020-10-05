export const mock_rockets = [
  {
    id: 1,
    active: false,
    stages: 2,
    boosters: 0,
    cost_per_launch: 6700000,
    success_rate_pct: 40,
    first_flight: '2006-03-24',
    country: 'Republic of the Marshall Islands',
    company: 'SpaceX',
    height: {
      meters: 22.25,
      feet: 73,
    },
    diameter: {
      meters: 1.68,
      feet: 5.5,
    },
    mass: {
      kg: 30146,
      lb: 66460,
    },
    payload_weights: [
      {
        id: 'leo',
        name: 'Low Earth Orbit',
        kg: 450,
        lb: 992,
      },
    ],
    first_stage: {
      reusable: false,
      engines: 1,
      fuel_amount_tons: 44.3,
      burn_time_sec: 169,
      thrust_sea_level: {
        kN: 420,
        lbf: 94000,
      },
      thrust_vacuum: {
        kN: 480,
        lbf: 110000,
      },
    },
    second_stage: {
      engines: 1,
      fuel_amount_tons: 3.38,
      burn_time_sec: 378,
      thrust: {
        kN: 31,
        lbf: 7000,
      },
      payloads: {
        option_1: 'composite fairing',
        composite_fairing: {
          height: {
            meters: 3.5,
            feet: 11.5,
          },
          diameter: {
            meters: 1.5,
            feet: 4.9,
          },
        },
      },
    },
    engines: {
      number: 1,
      type: 'merlin',
      version: '1C',
      layout: 'single',
      engine_loss_max: 0,
      propellant_1: 'liquid oxygen',
      propellant_2: 'RP-1 kerosene',
      thrust_sea_level: {
        kN: 420,
        lbf: 94000,
      },
      thrust_vacuum: {
        kN: 480,
        lbf: 110000,
      },
      thrust_to_weight: 96,
    },
    landing_legs: {
      number: 0,
      material: null,
    },
    wikipedia: 'https://en.wikipedia.org/wiki/Falcon_1',
    description:
      'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
    rocket_id: 'falcon1',
    rocket_name: 'Falcon 1',
    rocket_type: 'rocket',
    flickr_images: [
      'https://imgur.com/DaCfMsj.jpg',
      'https://imgur.com/azYafd8.jpg',
    ],
  },
  {
    id: 2,
    active: true,
    stages: 2,
    boosters: 0,
    cost_per_launch: 50000000,
    success_rate_pct: 97,
    first_flight: '2010-06-04',
    country: 'United States',
    company: 'SpaceX',
    height: {
      meters: 70,
      feet: 229.6,
    },
    diameter: {
      meters: 3.7,
      feet: 12,
    },
    mass: {
      kg: 549054,
      lb: 1207920,
    },
    payload_weights: [
      {
        id: 'leo',
        name: 'Low Earth Orbit',
        kg: 22800,
        lb: 50265,
      },
      {
        id: 'gto',
        name: 'Geosynchronous Transfer Orbit',
        kg: 8300,
        lb: 18300,
      },
      {
        id: 'mars',
        name: 'Mars Orbit',
        kg: 4020,
        lb: 8860,
      },
    ],
    first_stage: {
      reusable: true,
      engines: 9,
      fuel_amount_tons: 385,
      burn_time_sec: 162,
      thrust_sea_level: {
        kN: 7607,
        lbf: 1710000,
      },
      thrust_vacuum: {
        kN: 8227,
        lbf: 1849500,
      },
    },
    second_stage: {
      engines: 1,
      fuel_amount_tons: 90,
      burn_time_sec: 397,
      thrust: {
        kN: 934,
        lbf: 210000,
      },
      payloads: {
        option_1: 'dragon',
        option_2: 'composite fairing',
        composite_fairing: {
          height: {
            meters: 13.1,
            feet: 43,
          },
          diameter: {
            meters: 5.2,
            feet: 17.1,
          },
        },
      },
    },
    engines: {
      number: 9,
      type: 'merlin',
      version: '1D+',
      layout: 'octaweb',
      engine_loss_max: 2,
      propellant_1: 'liquid oxygen',
      propellant_2: 'RP-1 kerosene',
      thrust_sea_level: {
        kN: 845,
        lbf: 190000,
      },
      thrust_vacuum: {
        kN: 914,
        lbf: 205500,
      },
      thrust_to_weight: 180.1,
    },
    landing_legs: {
      number: 4,
      material: 'carbon fiber',
    },
    wikipedia: 'https://en.wikipedia.org/wiki/Falcon_9',
    description:
      'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.',
    rocket_id: 'falcon9',
    rocket_name: 'Falcon 9',
    rocket_type: 'rocket',
    flickr_images: [
      'https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg',
      'https://farm4.staticflickr.com/3955/32915197674_eee74d81bb_b.jpg',
      'https://farm1.staticflickr.com/293/32312415025_6841e30bf1_b.jpg',
      'https://farm1.staticflickr.com/623/23660653516_5b6cb301d1_b.jpg',
      'https://farm6.staticflickr.com/5518/31579784413_d853331601_b.jpg',
      'https://farm1.staticflickr.com/745/32394687645_a9c54a34ef_b.jpg',
    ],
  },
  {
    id: 3,
    active: true,
    stages: 2,
    boosters: 2,
    cost_per_launch: 90000000,
    success_rate_pct: 100,
    first_flight: '2018-02-06',
    country: 'United States',
    company: 'SpaceX',
    height: {
      meters: 70,
      feet: 229.6,
    },
    diameter: {
      meters: 12.2,
      feet: 39.9,
    },
    mass: {
      kg: 1420788,
      lb: 3125735,
    },
    payload_weights: [
      {
        id: 'leo',
        name: 'Low Earth Orbit',
        kg: 63800,
        lb: 140660,
      },
      {
        id: 'gto',
        name: 'Geosynchronous Transfer Orbit',
        kg: 26700,
        lb: 58860,
      },
      {
        id: 'mars',
        name: 'Mars Orbit',
        kg: 16800,
        lb: 37040,
      },
      {
        id: 'pluto',
        name: 'Pluto Orbit',
        kg: 3500,
        lb: 7720,
      },
    ],
    first_stage: {
      reusable: true,
      engines: 27,
      fuel_amount_tons: 1155,
      cores: 3,
      burn_time_sec: 162,
      thrust_sea_level: {
        kN: 22819,
        lbf: 5130000,
      },
      thrust_vacuum: {
        kN: 24681,
        lbf: 5548500,
      },
    },
    second_stage: {
      engines: 1,
      burn_time_sec: 397,
      thrust: {
        kN: 934,
        lbf: 210000,
      },
      payloads: {
        option_1: 'dragon',
        option_2: 'composite fairing',
        composite_fairing: {
          height: {
            meters: 13.1,
            feet: 43,
          },
          diameter: {
            meters: 5.2,
            feet: 17.1,
          },
        },
      },
    },
    engines: {
      number: 27,
      type: 'merlin',
      version: '1D+',
      layout: 'octaweb',
      engine_loss_max: 6,
      propellant_1: 'liquid oxygen',
      propellant_2: 'RP-1 kerosene',
      thrust_sea_level: {
        kN: 845,
        lbf: 190000,
      },
      thrust_vacuum: {
        kN: 914,
        lbf: 205500,
      },
      thrust_to_weight: 180.1,
    },
    landing_legs: {
      number: 12,
      material: 'carbon fiber',
    },
    wikipedia: 'https://en.wikipedia.org/wiki/Falcon_Heavy',
    description:
      'With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.',
    rocket_id: 'falconheavy',
    rocket_name: 'Falcon Heavy',
    rocket_type: 'rocket',
    flickr_images: [
      'https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg',
      'https://farm5.staticflickr.com/4645/38583830575_3f0f7215e6_b.jpg',
      'https://farm5.staticflickr.com/4696/40126460511_b15bf84c85_b.jpg',
      'https://farm5.staticflickr.com/4711/40126461411_aabc643fd8_b.jpg',
    ],
  },
  {
    id: 4,
    active: false,
    stages: 2,
    boosters: 0,
    cost_per_launch: 7000000,
    success_rate_pct: 0,
    first_flight: '2019-12-01',
    country: 'United States',
    company: 'SpaceX',
    height: {
      meters: 106,
      feet: 348,
    },
    diameter: {
      meters: 9,
      feet: 30,
    },
    mass: {
      kg: 4400000,
      lb: 9700000,
    },
    payload_weights: [
      {
        id: 'leo',
        name: 'Low Earth Orbit',
        kg: 150000,
        lb: 330000,
      },
      {
        id: 'mars',
        name: 'Mars Orbit',
        kg: 150000,
        lb: 330000,
      },
    ],
    first_stage: {
      reusable: true,
      engines: 31,
      fuel_amount_tons: 6700,
      burn_time_sec: 0,
      thrust_sea_level: {
        kN: 128000,
        lbf: 28775544,
      },
      thrust_vacuum: {
        kN: 138000,
        lbf: 31023634,
      },
    },
    second_stage: {
      engines: 6,
      fuel_amount_tons: 1100,
      burn_time_sec: 0,
      thrust: {
        kN: 1900,
        lbf: 427136,
      },
      payloads: {
        option_1: 'Spaceship',
        option_2: 'composite fairing',
        composite_fairing: {
          height: {
            meters: null,
            feet: null,
          },
          diameter: {
            meters: null,
            feet: null,
          },
        },
      },
    },
    engines: {
      number: 31,
      type: 'raptor',
      version: '',
      layout: null,
      engine_loss_max: null,
      propellant_1: 'liquid oxygen',
      propellant_2: 'liquid methane',
      thrust_sea_level: {
        kN: 1700,
        lbf: 382175,
      },
      thrust_vacuum: {
        kN: 1900,
        lbf: 427136,
      },
      thrust_to_weight: null,
    },
    landing_legs: {
      number: 4,
      material: 'carbon fiber',
    },
    wikipedia: 'https://en.wikipedia.org/wiki/BFR_(rocket)',
    description:
      "BFR is a privately funded next-generation reusable launch vehicle and spacecraft system developed by SpaceX. It was announced by Elon Musk in September 2017; the first spacecraft prototype was being manufactured as of March 2018 and will begin testing in early 2019. The overall space vehicle architecture includes both launch vehicles and spacecraft that are intended to completely replace all of SpaceX's existing space hardware by the early 2020s as well as ground infrastructure for rapid launch and relaunch, and zero-gravity propellant transfer technology to be deployed in low Earth orbit (LEO). The large payload to Earth orbit of up to 150,000 kg (330,000 lb) makes BFR a super heavy-lift launch vehicle.",
    rocket_id: 'bfr',
    rocket_name: 'Big Falcon Rocket',
    rocket_type: 'rocket',
    flickr_images: [
      'https://live.staticflickr.com/65535/48954138962_ee541e6755_b.jpg',
      'https://live.staticflickr.com/65535/48953946911_e60c5bcc5c_b.jpg',
      'https://live.staticflickr.com/65535/48954138922_9c42173f08_b.jpg',
      'https://live.staticflickr.com/65535/48953947006_313f01ec93_b.jpg',
    ],
  },
];

export const mock_dragons = [
  {
    active: true,
    crew_capacity: 0,
    description:
      'Dragon is a reusable spacecraft developed by SpaceX, an American private space transportation company based in Hawthorne, California. Dragon is launched into space by the SpaceX Falcon 9 two-stage-to-orbit launch vehicle. The Dragon spacecraft was originally designed for human travel, but so far has only been used to deliver cargo to the International Space Station (ISS).',
    diameter: { meters: 3.7, feet: 12 },
    dry_mass_kg: 4200,
    dry_mass_lb: 9300,
    first_flight: '2010-12-08',
    flickr_images: [
      'https://i.imgur.com/9fWdwNv.jpg',
      'https://live.staticflickr.com/8578/16655995541_7817565ea9_k.jpg',
      'https://farm3.staticflickr.com/2815/32761844973_4b55b27d3c_b.jpg',
      'https://farm9.staticflickr.com/8618/16649075267_d18cbb4342_b.jpg',
    ],
    heat_shield: {
      material: 'PICA-X',
      size_meters: 3.6,
      temp_degrees: 3000,
      dev_partner: 'NASA',
    },
    height_w_trunk: { meters: 7.2, feet: 23.6 },
    id: 'dragon1',
    launch_payload_mass: { kg: 6000, lb: 13228 },
    launch_payload_vol: { cubic_meters: 25, cubic_feet: 883 },
    name: 'Dragon 1',
    orbit_duration_yr: 2,
    pressurized_capsule: {
      payload_volume: {
        cubic_feet: 388,
        cubic_meters: 11,
      },
    },
    return_payload_mass: { kg: 3000, lb: 6614 },
    return_payload_vol: { cubic_meters: 11, cubic_feet: 388 },
    sidewall_angle_deg: 15,
    thrusters: [
      {
        amount: 18,
        fuel_1: 'nitrogen tetroxide',
        fuel_2: 'monomethylhydrazine',
        isp: 300,
        pods: 4,
        thrust: { kN: 0.4, lbf: 90 },
        type: 'Draco',
      },
    ],
    trunk: {
      trunk_volume: { cubic_feet: 494, cubic_meters: 14 },
      cargo: { solar_array: 2, unpressurized_cargo: true },
    },
    type: 'capsule',
    wikipedia: 'https://en.wikipedia.org/wiki/SpaceX_Dragon',
  },
];

export const mock_state = {
  error: {},
  spaceships: {
    loading: false,
    rockets: mock_rockets,
    dragons: [],
  },
};

export const mock_empty_state = {
  error: {},
  spaceships: {
    loading: false,
    rockets: [],
    dragons: [],
  },
};
