import Character from '../Player/Character';

interface EventEmitter {
  emitMove(position: ICharacter): void;

  emitInit(init: ICharacter): void;
}

import SocketIOClient from 'socket.io-client';
import {CharacterEvent, ICharacter, IOtherCharacter} from 'server/src/Modules/Character.module';
import {Scene} from 'three';

export default class SocketManager implements EventEmitter {
  private static readonly SERVER_URL = 'http://localhost:3000';
  private _socket: SocketIOClient.Socket;
  private _players: Map<string, Character>;
  private _scene: Scene;

  constructor(players: Map<string, Character>, scene: Scene) {
    this._socket = SocketIOClient(SocketManager.SERVER_URL);
    this._players = players;
    this._scene = scene;
    this.initRecepters();
  }

  public emitInit(infos: ICharacter): void {
    this._socket.emit(CharacterEvent.Move, infos);
  }

  public emitMove(infos: ICharacter): void {
    this._socket.emit(CharacterEvent.Init, infos);
  }

  /**
   * todo use character.move()
   */
  private initRecepters() {
    this._socket.on(CharacterEvent.Add, (character: IOtherCharacter) => {
      const newCharacter = new Character(this._scene);
      newCharacter.mesh.position.x = character.position.x;
      newCharacter.mesh.position.y = character.position.y;
      newCharacter.mesh.position.z = character.position.z;
      this._players.set(character.id, newCharacter);
    });

    this._socket.on(CharacterEvent.Moved, (character: IOtherCharacter) => {
      const target = this._players.get(character.id);
      if (target) {
        target.mesh.position = character.position;
      } else {
        console.log(`Player ${character.id} doesn't exists`);
      }
    });
  }

}
