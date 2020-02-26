import Bowman from '../characters/Bowman';
import Swordsman from '../characters/Swordsman';
import Magician from '../characters/Magician';
import Undead from '../characters/Undead';
import Zombie from '../characters/Zombie';
import Daemon from '../characters/Daemon';


test('Creating Bowman', () => {
  const recieved = new Bowman('Steve Gadd');
  const expected = {
    name: 'Steve Gadd',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    protection: 25,
  };
  expect(recieved).toEqual(expected);
});

test('Creating Swordsman', () => {
  const recieved = new Swordsman('Todd Sucherman');
  const expected = {
    name: 'Todd Sucherman',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    protection: 10,
  };
  expect(recieved).toEqual(expected);
});

test('Creating Magician', () => {
  const recieved = new Magician('Jared Falk');
  const expected = {
    name: 'Jared Falk',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    protection: 40,
  };
  expect(recieved).toEqual(expected);
});

test('Creating Undead', () => {
  const recieved = new Undead('Anika Nilles');
  const expected = {
    name: 'Anika Nilles',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    protection: 25,
  };
  expect(recieved).toEqual(expected);
});

test('Creating Zombie', () => {
  const recieved = new Zombie('Emmanuelle Caplette');
  const expected = {
    name: 'Emmanuelle Caplette',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    protection: 10,
  };
  expect(recieved).toEqual(expected);
});

test('Creating Daemon', () => {
  const recieved = new Daemon('Elise Trouw');
  const expected = {
    name: 'Elise Trouw',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    protection: 40,
  };
  expect(recieved).toEqual(expected);
});
