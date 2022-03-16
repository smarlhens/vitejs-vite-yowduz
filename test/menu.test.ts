import { PencilIcon } from '@heroicons/vue/solid';
import Menu from '../src/components/Menu.vue';
import { render, fireEvent } from '@testing-library/vue';

test('mount component', async () => {
  expect(Menu).toBeTruthy();

  const navigationItems = [
    {
      label: 'Edit',
      icon: PencilIcon,
      onClick: () => jest.fn(),
    },
  ];

  const options = {
    props: {
      navigationItems,
    },
  };

  const { unmount, debug, getByTestId, getByText } = render(Menu, options);
  const spy = jest.spyOn(options.props.navigationItems[0], 'onClick');

  getByText('Options');

  // should open menu*
  const button = getByTestId('menu-button');
  await fireEvent.click(button);
  
  // opened menu should contain menu item
  getByText('Edit');

  const menuItem = getByTestId('menu-item-0');
  await fireEvent.click(menuItem);

  // should have been called on click
  expect(spy).toHaveBeenCalledTimes(1);

  jest.restoreAllMocks();
  unmount();
});
