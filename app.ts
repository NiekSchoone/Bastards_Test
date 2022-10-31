import ValidationUtils from "./src/validation-utils";
import { barSchema, barObj, barObjF } from "./examples/bars";
import { carSchema, carObj, carObjF } from "./examples/cars";
import { personSchema, personObj, personObjF } from "./examples/persons";

if (ValidationUtils.ValidateObjectBySchema(personObj, personSchema)) {
  console.log("personObj succesfully compares to personSchema");
} else {
  console.log("personObj does not compare to personSchema");
}

if (ValidationUtils.ValidateObjectBySchema(personObjF, personSchema)) {
  console.log("personObjF succesfully compares to personSchema");
} else {
  console.log("personObjF does not compare to personSchema");
}

if (ValidationUtils.ValidateObjectBySchema(barObj, barSchema)) {
  console.log("barObj succesfully compares to barSchema");
} else {
  console.log("barObj does not compare to barSchema");
}

if (ValidationUtils.ValidateObjectBySchema(barObjF, barSchema)) {
  console.log("barObjF succesfully compares to barSchema");
} else {
  console.log("barObjF does not compare to barSchema");
}

if (ValidationUtils.ValidateObjectBySchema(carObj, carSchema)) {
  console.log("carObj succesfully compares to carSchema");
} else {
  console.log("carObj does not compare to carSchema");
}

if (ValidationUtils.ValidateObjectBySchema(carObjF, carSchema)) {
  console.log("carObjF succesfully compares to carSchema");
} else {
  console.log("carObjF does not compare to carSchema");
}
