import "mocha";
import { expect } from "chai";
import ValidationUtils from "../src/validation-utils";
import { barObj, barObjF, barSchema } from "../examples/bars";
import { personObj, personObjF, personSchema } from "../examples/persons";
import { carObj, carObjF, carSchema } from "../examples/cars";

describe("ValidationUtils", () => {
  describe("ValidateObjectBySchema", () => {
    context(
      "When an object is missing keys that are specified in the schema",
      () => {
        it("Should return false if personObjF is compared to personSchema", () => {
          const result = ValidationUtils.ValidateObjectBySchema(
            personObjF,
            personSchema
          );
          expect(result).to.equal(false);
        });
      }
    );
    context("When a property in an object is of the wrong type", () => {
      it("Should return false if 'array' is passed where 'object' is expected", () => {
        const result = ValidationUtils.ValidateObjectBySchema(
          barObjF,
          barSchema
        );
        expect(result).to.equal(false);
      });
      it("Should return false if 'string' is passed where 'number' is expected", () => {
        const result = ValidationUtils.ValidateObjectBySchema(
          carObjF,
          carSchema
        );
        expect(result).to.equal(false);
      });
    });
    context("When the wrong schema is passed", () => {
      it("Should return false if barObj is compared to personSchema", () => {
        const result = ValidationUtils.ValidateObjectBySchema(
          barObj,
          personSchema
        );
        expect(result).to.equal(false);
      });
    });
    context(
      "When all properties in an object are of the correct type specified in the schema",
      () => {
        it("Should return true with parameters personObj & personSchema", () => {
          const result = ValidationUtils.ValidateObjectBySchema(
            personObj,
            personSchema
          );
          expect(result).to.equal(true);
        });
        it("Should return true with parameters barObj & barSchema", () => {
          const result = ValidationUtils.ValidateObjectBySchema(
            barObj,
            barSchema
          );
          expect(result).to.equal(true);
        });
        it("Should return true with parameters carObj & carSchema", () => {
          const result = ValidationUtils.ValidateObjectBySchema(
            carObj,
            carSchema
          );
          expect(result).to.equal(true);
        });
      }
    );
  });
});
