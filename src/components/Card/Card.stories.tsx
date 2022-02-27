import { ComponentMeta, ComponentStory } from '@storybook/react';
import Card from './Card';

export default {
  title: 'Componentes / Card',
  component: Card,
  argTypes: {
    backgroundColor: {
      description: 'Define a cor de fundo do card.',
      control: 'color',
      type: 'string',
    },
    padding: {
      description: 'Espaçamento interno.',
      type: 'string',
    },
    borderRadius: {
      description: 'Arredondamento das bordas.',
      type: 'string',
    },
  },
} as ComponentMeta<typeof Card>;

export const Common = (props: ComponentStory<typeof Card>) => (
  <Card {...props} />
);
Common.storyName = 'Card comum';
