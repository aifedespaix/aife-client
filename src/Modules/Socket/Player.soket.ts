import {Mesh} from 'three';
import { ICubeInfosTransfert, CubeEvent } from 'server/src/Modules/Cube.module';

export default class PlayerSoket {

  private _socket: SocketIOClient.Socket;
  private _mesh: Mesh;


  get mesh(): Mesh {
    return this._mesh;
  }

  constructor(socket: SocketIOClient.Socket) {
    this._socket = socket;
  }

  public init() {
    this.configEvents();
    const init: ICubeInfosTransfert = {
      cube: {
        position: this._mesh.position,
      },
    };
    this._socket.emit(CubeEvent.Init, init);
  }

  public move(mesh: Mesh): void {
    const infos: ICubeInfosTransfert = {
      cube: {
        position: mesh.position,
      },
    };
    this._socket.emit(CubeEvent.Move, infos);
  }

  private configEvents() {
    this._socket.on(CubeEvent.Moved, (infos: ICubeInfosTransfert) => {
      console.log('moved', this._socket.id, this._cubes);
      const cube = this._cubes.get(this._socket.id);
      if (cube) {
        this.moveCube(cube, infos.cube.position);
      } else {
        console.error('On demande à move un cube pas initialisé, c\'est chelou mdr');
      }
    });

    this._socket.on(CubeEvent.Add, (infos: ICubeInfosTransfert) => {
      console.log('Add cube', infos);
      console.log(infos.cube);
      console.log(this._cubes);
      this.addCube(this._socket.id, infos.cube.position);
    });

    this._socket.on(CubeEvent.Remove, (id: string) => {
      console.log('remove', id);
      const cube = this._cubes.get(id);
      console.log(this.cubes);
      console.log(this._socket.id);
      if (cube) {
        this.scene.remove(cube);
        this._cubes.delete(id);
      } else {
        console.error(`Can't remove cube ${id}`)
      }
    });
  }

}
