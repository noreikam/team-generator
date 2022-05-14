const Manager = require('../lib/Manager');

test('Creates new manager', () => {
  const manager = new Manager('Matt', 1, 'noreikam1@gmail.com', '8601234567');

  expect(manager.name).toBe('Matt');
  expect(manager.id).toBe(1);
  expect(manager.email).toBe('noreikam1@gmail.com');
  expect(manager.officeNumber).toBe('8601234567');
})

test('getOfficeNumber returns officeNumber', () => {
  const manager = new Manager('Matt', 1, 'noreikam1@gmail.com', '8601234567');

  expect(manager.getOfficeNumber()).toBe('8601234567');
})

test('Parent methods from Employee work', () => {
  const manager = new Manager('Matt', 1, 'noreikam1@gmail.com', '8601234567');

  expect(manager.getName()).toBe('Matt');
  expect(manager.getId()).toBe(1);
  expect(manager.getRole()).toBe('Manager');
})