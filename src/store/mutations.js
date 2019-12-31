import { MODEL_CONFIG } from "./mutation-types";

export default {
  /**
   * state:当前状态树
   * v: 提交matations时传的参数
   */
  [MODEL_CONFIG](state, value) {
    console.log("state", state);
    state.modelConfig = value;
  }
};
