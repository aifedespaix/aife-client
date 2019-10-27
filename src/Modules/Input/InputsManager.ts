import Player from '../Player/Player';
import {Direction} from '../Player/Character';

export interface InputTargets {
  player: Player;
}

export default class InputsManager {

  private _targets: InputTargets;

  constructor(targets: InputTargets) {
    this._targets = targets;
    this.configKeyboard();
  }

  private configKeyboard() {
    document.addEventListener('keydown', ($event) => {
      switch ($event.key) {
        case 'ArrowDown':
          this._targets.player.move(Direction.Bottom);
          break;
        case 'ArrowUp':
          this._targets.player.move(Direction.Top);
          break;
        case 'ArrowLeft':
          this._targets.player.move(Direction.Left);
          break;
        case 'ArrowRight':
          this._targets.player.move(Direction.Right);
          break;
      }
    });
  }

}
