const Intern = require('../lib/Intern');

test('Creates new intern', () => {
  const intern = new Intern('Matt', 1, 'noreikam1@gmail.com', 'UConn');

  expect(intern.name).toBe('Matt');
  expect(intern.id).toBe(1);
  expect(intern.email).toBe('noreikam1@gmail.com');
  expect(intern.school).toBe('UConn');
})

test('getSchool returns school', () => {
  const intern = new Intern('Matt', 1, 'noreikam1@gmail.com', 'UConn');

  expect(intern.getSchool()).toBe('UConn');
})