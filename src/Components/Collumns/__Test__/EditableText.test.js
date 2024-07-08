import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import EditableDiv from '../EditableText'; 

describe('EditableDiv Component', () => {
  test('renders with default text', () => {
    render(<EditableDiv />);
    expect(screen.getByText('Tasks')).toBeInTheDocument();
  });

  test('allows editing text', () => {
    render(<EditableDiv />);
    const input = screen.getByText('Tasks');
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.blur(input);
    expect(screen.getByText('New Task')).toBeInTheDocument();
  });

});