import Character, {Direction} from './Character';
import SocketManager from '../Socket/SocketManager';
import {Scene} from 'three';

export default class Player extends Character {

  private _socketManager: SocketManager;

  constructor(socketManager: SocketManager, scene: Scene) {
    super(scene);
    this._socketManager = socketManager;
    this.init();
  }

  private init() {
    this._socketManager.emitInit({position: this.mesh.position});
  }

  public move(direction: Direction) {
    super.move(direction);
    this._socketManager.emitMove({position: this.mesh.position});
  }

}
