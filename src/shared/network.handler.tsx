import * as $ from 'jquery';

module NetworkHandler {
  var xhrPool: Array<JQueryXHR>;
  export function pushXHR(xhr: JQueryXHR) {
    xhrPool.push(xhr);
  }
  export function removeXHR(xhr: JQueryXHR) {
    let index = xhrPool.indexOf(xhr);
    if (index > -1) {
      xhrPool.splice(index, 1);
    }
  }
  export function abortAllXHR() {
    $.each(xhrPool, function (index: number, xhr: JQueryXHR) {
      if (xhr != undefined) {
        xhr.abort();
      }
    });
    xhrPool = new Array<JQueryXHR>();
  }
}


export default NetworkHandler;
