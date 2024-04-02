import * as model from "./model.js";
import view from "./view.js";

const controllLoadingData = async function (query) {
  try {
    await model.loadResults(query);
    view.renderResult(model.result);
  } catch (err) {
    console.error(err);
    view.renderErrorMsg(err);
  }
};

const init = function () {
  //document.querySelector(".weather").style.display = "block";
  view.addHandlerSearch(controllLoadingData);
};
init();
