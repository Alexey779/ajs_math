import Daemon from '../players/daemon';

test('Проверка нанесённого урона персонажем Daemon', () => {
  const input = new Daemon('123', 'daemon');
  input.damage = 2;

  expect(input.damage).toBe(9);
});

test('Проверка нанесённого урона персонажем Daemon под «дурманом»', () => {
  const input = new Daemon('123', 'daemon');
  input.stoned = true;
  input.damage = 2;

  expect(input.damage).toBe(4);
});

test('Проверка отсутствия урона персонажа Daemon под «дурманом»', () => {
  const input = new Daemon('123', 'daemon');
  input.stoned = true;
  input.damage = 20;

  expect(input.damage).toBe(0);
});

test('Проверка наложения «дурмана» на персонаж Daemon', () => {
  const input = new Daemon('123', 'daemon');
  input.stoned = [];

  expect(input.stoned).toBe(undefined);
});
