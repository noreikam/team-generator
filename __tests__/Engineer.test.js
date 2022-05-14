const Engineer = require('../lib/Engineer');

test('Creates new engineer', () => {
  const engineer = new Engineer('Matt', 1, 'noreikam1@gmail.com', 'noreikam');

  expect(engineer.name).toBe('Matt');
  expect(engineer.id).toBe(1);
  expect(engineer.email).toBe('noreikam1@gmail.com');
  expect(engineer.github).toBe('noreikam');
})

test('getOfficeNumber returns officeNumber', () => {
  const engineer = new Engineer('Matt', 1, 'noreikam1@gmail.com', 'noreikam');

  expect(engineer.getGithub()).toBe('noreikam');
})