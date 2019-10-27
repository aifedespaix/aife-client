import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  Scene,
  GridHelper,
  Vector3,
  Color,
} from 'three';
import SocketManager from '../Socket/SocketManager';
import MainCamera from '../Camera/Main.camera';
import MainRenderer from '../Renderer/Main.renderer';
import Debug from '../Debug/Debug';
import InputsManager from '../Input/InputsManager';
import Player from '../Player/Player';
import PlayerSoket from '../Socket/Player.soket';
import Character from '../Player/Character';

export default class MainScene {
  private _scene: Scene;
  private _camera: MainCamera;
  private _socketManager: SocketManager;
  private _renderer: MainRenderer;
  private _inputsManager!: InputsManager;
  private _player: Player;
  private _players: Map<string, Character>;
  private _debug!: Debug;

  constructor(el: HTMLElement, debug?: boolean) {
    this._scene = new Scene();
    this._camera = new MainCamera(el);
    this._players = new Map<string, Character>();
    this._socketManager = new SocketManager(this._players, this._scene);
    this._player = new Player(this._socketManager, this._scene);
    this._renderer = new MainRenderer(el, this._scene, this._camera.camera);
    this._inputsManager = new InputsManager({player: this._player});

    if (debug) {
      this._debug = new Debug(this._scene);
    }
  }

}
