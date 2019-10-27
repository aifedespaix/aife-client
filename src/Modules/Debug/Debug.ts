import {Color, GridHelper, Scene} from 'three';

export default class Debug {

  constructor(scene: Scene) {
    this.addGrid(scene);
  }

  private addGrid(scene: Scene) {
    const size = 100;
    const divisions = 100;

    const colorA = new Color(20, 30, 180);
    const colorB = new Color(180, 30, 20);
    const gridHelper = new GridHelper(size, divisions, colorA, colorB);
    scene.add(gridHelper);
  }
}
