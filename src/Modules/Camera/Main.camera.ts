import {PerspectiveCamera, Vector3} from 'three';

export default class MainCamera {

  private _camera: PerspectiveCamera;

  get camera(): PerspectiveCamera {
    return this._camera;
  }

  constructor(el: HTMLElement) {
    this._camera = new PerspectiveCamera(75, el.clientWidth / el.clientHeight, .1, 1000);
    this.configCamera(el);
  }

  private configCamera(el: HTMLElement) {
    this._camera.position.y = 6;
    this._camera.position.z = -5;

    const point = new Vector3(0, 0, 0);
    this._camera.lookAt(point);
  }
}
