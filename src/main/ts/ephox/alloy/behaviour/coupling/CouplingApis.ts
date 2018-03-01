import { AlloyComponent } from 'ephox/alloy/api/component/Component';

const getCoupled = function (component, coupleConfig, coupleState, name): AlloyComponent {
  return coupleState.getOrCreate(component, coupleConfig, name);
};

export {
  getCoupled
};