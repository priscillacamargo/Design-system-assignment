import { render, screen } from '@testing-library/react';
import { Button } from '../components/atoms/Button';
import '@testing-library/jest-dom';

test('renders MyComponent', () => {
    render(<Button bgColor="bg-primary" label="Hello, World" />);
    const element = screen.getByText('Hello, World');
    expect(element).toBeInTheDocument();
});
