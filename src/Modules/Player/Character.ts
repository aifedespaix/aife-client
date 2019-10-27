import {BoxGeometry, Color, Mesh, MeshBasicMaterial, Scene, Vector3} from 'three';

export default class Character {
  private _mesh!: Mesh;

  get mesh(): Mesh {
    return this._mesh;
  }

  constructor(scene: Scene) {
    this.initMesh();
    scene.add(this.mesh);
  }

  private initMesh() {
    const geometry = new BoxGeometry(1, 1, 1);

    const color = new Color();
    color.setRGB(255, 255, 0);
    const material = new MeshBasicMaterial({color});

    this._mesh = new Mesh(geometry, material);
    this._mesh .position.x = .5;
    this._mesh .position.y = .5;
    this._mesh .position.z = .5;
  }

  public move(direction: Direction) {
    switch (direction) {
      case Direction.Bottom:
        this.mesh.translateZ(-1);
        break;
      case Direction.Top:
        this.mesh.translateZ(1);
        break;
      case Direction.Left:
        this.mesh.translateX(1);
        break;
      case Direction.Right:
        this.mesh.translateX(-1);
        break;
    }
  }
}

export enum Direction {
  Top,
  Left,
  Right,
  Bottom,
}
