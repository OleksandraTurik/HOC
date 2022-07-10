import media from "./media";
import { queries } from "../helpers/helpers";

const matchDevice = (WrappedComponent) => {
  const devices = Object.keys(queries);
  let component = WrappedComponent;

  devices.forEach((device) => {
    component = media(component, queries[device], device);
  });

  component.displayName = `matchDevice(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;
  return component;
};
export default matchDevice;
