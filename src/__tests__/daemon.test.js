import Character, { nameError, typeError } from '../games';

test.each([['b'], ['12345678901']])('Проверка невалидного имени персонажа', (name) => {
  const input = () => new Character(name);
  expect(input).toThrow(nameError);
});

test('Проверка невалидного типа персонажа', () => {
  const input = () => new Character('123', '1');
  expect(input).toThrow(typeError);
});

test('Проверка валидного имени и типа персонажа', () => {
  const input = new Character('123', 'daemon');
  const result = {
    name: '123',
    type: 'daemon',
    health: 100,
    level: 1,
  };

  expect(input).toEqual(result);
});
