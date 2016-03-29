import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Interfaces from './../shared/interfaces';
import * as styles from './trees.component.css';
import Settings from './../shared/settings';
import NavigationHandler from './../shared/navigation.handler';
import ENUMS from './../shared/enums';


module Trees {
  export interface ITreesProps {
  }
  export interface ITreesStatus {
  }
  export class TreesComponent extends React.Component<ITreesProps, ITreesStatus> {
    constructor(props : ITreesProps) {
      super(props);
      this.state = {
      };
    }
    public componentDidMount() {
      this.setState(this.state);
    }
    render() {
      let self = this;
      return (
        <div className={styles.wrapper}>
          TREES
        </div>
      );
    }
  }
}

export default Trees;
