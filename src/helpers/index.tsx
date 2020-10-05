import { ICardData } from '../components/CardEl';
import { IModalData } from '../components/Modal';
import { IDragon, IRocket } from '../api/api.types';

const priceFormatter = (val: number): string =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(val);

export const normalizeCardData = (spaceship: IRocket | IDragon): ICardData => ({
  id: spaceship.id,
  name: (spaceship as IRocket)?.rocket_name || (spaceship as IDragon)?.name,
  image: spaceship.flickr_images[0],
  first_flight: spaceship.first_flight,
  description: spaceship.description,
});

export const normalizeRocketData = (rocket: IRocket): IModalData => ({
  image: rocket.flickr_images[0],
  image2: rocket.flickr_images[1],
  active: rocket.active,
  name: rocket.rocket_name,
  cost: priceFormatter(rocket.cost_per_launch),
  firstFlight: rocket.first_flight,
  description: rocket.description,
  link: rocket.wikipedia,
  props: [
    {
      label: 'Height',
      val1: (rocket.height.meters || '-') + 'm',
      val2: (rocket.height.feet || '-') + ' ft',
    },
    {
      label: 'Mass',
      val1: (rocket.mass.kg || '-') + ' kg',
      val2: (rocket.mass.lb || '-') + ' lb',
    },
    {
      label: 'Diameter',
      val1: (rocket.diameter.meters || '-') + ' m',
      val2: (rocket.diameter.feet || '-') + ' ft',
    },
    {
      label: 'Boosters',
      val1: rocket.boosters || '-',
    },
    {
      label: 'PCT',
      val1: rocket.success_rate_pct || '-',
    },
  ],
  modules: [
    {
      label: 'First Stage',
      props: [
        {
          label: 'Burn time sec',
          val1: rocket.first_stage.burn_time_sec || '-',
        },
        {
          label: 'Engines',
          val1: rocket.first_stage.engines || '-',
        },
        {
          label: 'Fuel Amount Tons',
          val1: rocket.first_stage.fuel_amount_tons || '-',
        },
        {
          label: 'Reusable',
          val1: rocket.first_stage.reusable,
        },
        {
          label: 'Thrust sea level',
          val1: (rocket.first_stage.thrust_sea_level.kN || '-') + ' kN',
        },
        {
          label: 'Thrust vacuum',
          val1: (rocket.first_stage.thrust_vacuum.kN || '-') + ' kN',
        },
      ],
    },
    {
      label: 'Second Stage',
      props: [
        {
          label: 'Burn time sec',
          val1: rocket.second_stage.burn_time_sec || '-',
        },
        {
          label: 'Engines',
          val1: rocket.second_stage.engines || '-',
        },
        {
          label: 'Fuel Amount Tons',
          val1: rocket.second_stage.fuel_amount_tons || '-',
        },
        {
          label: 'Reusable',
          val1: rocket.second_stage.reusable,
        },
        {
          label: 'Payloads',
          val1: rocket.second_stage.payloads.option_1 || '-',
        },
        {
          label: 'Thrust',
          val1: (rocket.second_stage.thrust.kN || '-') + ' kN',
        },
      ],
    },
    {
      label: 'Payload',
      props: [
        {
          label: 'Diameter',
          val1:
            (rocket.second_stage.payloads.composite_fairing.diameter.meters ||
              '-') + ' m',
          val2:
            (rocket.second_stage.payloads.composite_fairing.diameter.feet ||
              '-') + ' ft',
        },
        {
          label: 'Height',
          val1:
            (rocket.second_stage.payloads.composite_fairing.height.meters ||
              '-') + ' m',
          val2:
            (rocket.second_stage.payloads.composite_fairing.height.feet ||
              '-') + ' m',
        },
        {
          label: 'Option 1',
          val1: rocket.second_stage.payloads.option_1 || '-',
          val2: rocket.second_stage.payloads.option_1 || '-',
        },
        {
          label: 'Low Earth Orbit',
          val1: (rocket.payload_weights[0]?.kg || '-') + ' kg',
          val2: (rocket.payload_weights[0]?.lb || '-') + ' lb',
        },
        {
          label: 'Mars Orbit',
          val1: (rocket.payload_weights[1]?.kg || '-') + ' kg',
          val2: (rocket.payload_weights[1]?.lb || '-') + ' lb',
        },
        {
          label: 'Moon Orbit',
          val1: (rocket.payload_weights[2]?.kg || '-') + ' kg',
          val2: (rocket.payload_weights[2]?.lb || '-') + ' lb',
        },
      ],
    },
  ],
});

export const normalizeDragonData = (dragon: IDragon): IModalData => ({
  image: dragon.flickr_images[0],
  image2: dragon.flickr_images[1],
  active: dragon.active,
  name: dragon.name,
  firstFlight: dragon.first_flight,
  description: dragon.description,
  link: dragon.wikipedia,
  props: [
    {
      label: 'Height',
      val1: (dragon.height_w_trunk.meters || '-') + ' m',
      val2: (dragon.height_w_trunk.feet || '-') + ' ft',
    },
    {
      label: 'Mass',
      val1: (dragon.dry_mass_kg || '-') + ' kg',
      val2: (dragon.dry_mass_lb || '-') + ' lb',
    },
    {
      label: 'Diameter',
      val1: (dragon.diameter.meters || '-') + ' m',
      val2: (dragon.diameter.feet || '-') + ' ft',
    },
    {
      label: 'Crew capacity',
      val1: dragon.crew_capacity || '-',
    },
    {
      label: 'Orbit duration',
      val1: (dragon.orbit_duration_yr || '-') + ' yr',
    },
  ],
  modules: [
    {
      label: 'Thruster 1',
      props: [
        {
          label: 'Amount',
          val1: dragon.thrusters[0].amount || '-',
        },
        {
          label: 'Fuel 1',
          val1: dragon.thrusters[0].fuel_1 || '-',
        },
        {
          label: 'Fuel 2',
          val1: dragon.thrusters[0].fuel_2 || '-',
        },
        {
          label: 'PODS',
          val1: dragon.thrusters[0].pods || '-',
        },
      ],
    },
    {
      label: 'Thruster 2',
      props: [
        {
          label: 'Amount',
          val1: dragon.thrusters[1]?.amount || '-',
        },
        {
          label: 'Fuel 1',
          val1: dragon.thrusters[1]?.fuel_1 || '-',
        },
        {
          label: 'Fuel 2',
          val1: dragon.thrusters[1]?.fuel_2 || '-',
        },
        {
          label: 'PODS',
          val1: dragon.thrusters[1]?.pods || '-',
        },
      ],
    },
    {
      label: 'Payload',
      props: [
        {
          label: 'Launch payload mass',
          val1: (dragon.launch_payload_mass.kg || '-') + ' kg',
          val2: (dragon.launch_payload_mass.lb || '-') + ' lb',
        },
        {
          label: 'Launch payload vol',
          val1:
            (dragon.launch_payload_vol.cubic_meters || '-') + ' cubic meters',
          val2: (dragon.launch_payload_vol.cubic_feet || '-') + ' cubic feet',
        },
        {
          label: 'Return payload mass',
          val1: (dragon.return_payload_mass.kg || '-') + ' kg',
          val2: (dragon.return_payload_mass.lb || '-') + ' lb',
        },
        {
          label: 'Return payload vol',
          val1:
            (dragon.return_payload_vol.cubic_meters || '-') + ' cubic meters',
          val2: (dragon.return_payload_vol.cubic_feet || '-') + ' cubic feet',
        },
      ],
    },
  ],
});
