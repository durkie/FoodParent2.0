export default class RouterHandler extends Backbone.Router {
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
