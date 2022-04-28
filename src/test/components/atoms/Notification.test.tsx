import React from 'react';
import Notification from '../../../components/atoms/Notification';
import { render, screen } from '@testing-library/react';


describe('test Notification component', () => {
  test('error notification is shown', async() => {
    render(<Notification status={'error'} />);
    const inputLabel = screen.getByText('Error, vuelve a intentarlo.');
    expect(inputLabel).toBeInTheDocument();
  });

  test('warning notification is shown', async() => {
    render(<Notification status={'warning'} />);
    const inputLabel = screen.getByText('Precaución, algo no salio tan bien.');
    expect(inputLabel).toBeInTheDocument();
  });

  test('success notification is shown', async() => {
    render(<Notification status={'success'} />);
    const inputLabel = screen.getByText('Exitoso,todo salio bien.');
    expect(inputLabel).toBeInTheDocument();
  });

  test('info notification is shown', async() => {
    render(<Notification status={'info'} />);
    const inputLabel = screen.getByText('Informate, revisa algo.');
    expect(inputLabel).toBeInTheDocument();
  });

})

