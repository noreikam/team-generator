const Employee = require('../lib/Employee');

test('Creates new employee', () => {
  const employee = new Employee('Matt', 1, 'noreikam1@gmail.com');

  expect(employee.name).toBe('Matt');
  expect(employee.id).toBe(1);
  expect(employee.email).toBe('noreikam1@gmail.com');
})

test('getName returns name', () => {
  const employee = new Employee('Matt', 1, 'noreikam1@gmail.com');

  expect(employee.getName()).toBe('Matt');
})

test('getId returns id', () => {
  const employee = new Employee('Matt', 1, 'noreikam1@gmail.com');

  expect(employee.getId()).toBe(1);
})

test('getRole returns Employee', () => {
  const employee = new Employee('Matt', 1, 'noreikam1@gmail.com');

  expect(employee.getRole()).toBe('Employee');
})