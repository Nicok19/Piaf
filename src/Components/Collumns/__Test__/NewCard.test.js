import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NewCard from '../NewCard';

describe('NewCard Component', () => {
  test('renders without crashing', () => {
    render(<NewCard />);

    const elementText = screen.getByText(/some specific test into new card/i);
    expect(elementText).toBeInTheDocument();
  });


});