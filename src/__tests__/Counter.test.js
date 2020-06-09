import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Counter from '../components/Counter'

it('Correct starting text rendered', () => {
  const { container } = render(<Counter />)

  expect(container.textContent).toContain('You have clicked 0 times')
});

it('Click increment affects count', () => {
  const { container, getByTestId } = render(<Counter />) \

  const button = getByTestId('counter-button')

  expect(container.textContent).toContain('You have clicked 0 times')
  fireEvent.click(button)
  expect(container.textContent).toContain('You have clicked 1 times')

})