import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App'; 

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
   
    expect(screen.getByTestId('column-1')).toBeInTheDocument();
  });

  test('adds a new column on handleAddColumn', () => {
    render(<App />);
    
    fireEvent.click(screen.getByText('Add Column'));

    expect(screen.getByTestId('column-2')).toBeInTheDocument();
  });

  test('removes a column on handleRemoveColumn', () => {
    render(<App />);

    fireEvent.click(screen.getByText('Add Column'));

    fireEvent.click(screen.getByTestId('remove-column-1'));
    expect(screen.queryByTestId('column-1')).not.toBeInTheDocument();
  });
});