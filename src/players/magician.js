import MathAttack from '../logicAttack';

export default class Magician extends MathAttack {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
