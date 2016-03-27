import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as underscore from 'underscore';
import * as Backbone from 'backbone';

import Interfaces from './interfaces'

module App {
  export class AppComponent extends React.Component<Interfaces.IAppProps, {}> {
    constructor(props : Interfaces.IAppProps) {
      super(props);
      this.state = {
      };
    }
    public componentDidMount() {
      this.setState(this.state);
    }
  }

  export class FooComponent extends React.Component<{}, {}> {
    render() {
      return (
        <div>foo</div>
      );
    }
  }

  export class BarComponent extends React.Component<{}, {}> {
    render() {
      return (
        <div>bar</div>
      );
    }
  }

  export class InterfaceComponent extends React.Component<Interfaces.InterfaceComponentProps, {}> {
    callback: Function;
    componentWillMount() {
      let self = this;
      self.callback = (function() {
        self.forceUpdate();
      }).bind(self);

      self.props.router.on("route", self.callback);
    }
    componentWillUnmount() {
      let self = this;
      self.props.router.off("route", self.callback);
    }
    render() {
      if (this.props.router.current == "home") {
        return <FooComponent />;
      }
      if (this.props.router.current == "trees") {
        return <BarComponent />;
      }
      return <div />;
    }
  }

  export class Router extends Backbone.Router {
    public current: string;
    public arguments: Array<string>;
    constructor(options?: Backbone.RouterOptions) {
      super(options);
      this.route("", "home");
      this.route("trees/:id", "trees");
    }
    home() {
      this.current = "home";
        //EventHandler.handleNavigate(VIEW_STATUS.HOME);
    }
    trees(id: string) {
      this.current = "trees";
      this.arguments = new Array<string>();
      this.arguments.push(id);
        //EventHandler.handleNavigate(VIEW_STATUS.TREES, { id: id });
    }
  }
}

let router = new App.Router();
ReactDOM.render((
  <App.InterfaceComponent router={router} />
), document.querySelector('#fp-app'));
Backbone.history.start();

export default App;
