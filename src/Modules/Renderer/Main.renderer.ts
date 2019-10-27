import {Camera, Scene, WebGLRenderer} from 'three';

export default class MainRenderer {

  private _renderer!: WebGLRenderer;

  constructor(el: HTMLElement, scene: Scene, camera: Camera) {
    this._renderer = new WebGLRenderer({antialias: true});
    this.init(el, scene, camera);
  }

  private init(el: HTMLElement, scene: Scene, camera: Camera) {
    this._renderer.setSize(el.clientWidth, el.clientHeight);
    el.appendChild(this._renderer.domElement);
    const animate = () => {
      requestAnimationFrame(animate);
      this._renderer.render(scene, camera);
    };

    animate();
  }

}
