import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Card from './Card';

const renderComponent = () => {
  render(<Card />);
};

describe('Card', () => {
  it('Render Card', () => {
    expect(renderComponent).toBeTruthy();
  });
});
