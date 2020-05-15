import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("Status from props should be in the state", () => {
    const component = create(<ProfileStatus status="React course" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("React course");
  });
  test("After creation span should be displayed", () => {
    const component = create(<ProfileStatus status="React course" />);
    const root = component.root;
    let span = root.findByType('span');
    expect(span).not.toBeNull();
  });
  test("After creation input should't be displayed", () => {
    const component = create(<ProfileStatus status="React course" />);
    const root = component.root;
    expect(() => {
      let input = root.findByType('input');
    }).toThrow();
  });
  test("After creation span should contains correct status", () => {
    const component = create(<ProfileStatus status="React course" />);
    const root = component.root;
    let span = root.findByType('span');
    expect(span.children[0]).toBe("React course");
  });
  test("Input should be displayed in EditMode insted of span", () => {
    const component = create(<ProfileStatus status="React course" />);
    const root = component.root;
    let span = root.findByType('span');
    span.props.onDoubleClick();
    let input = root.findByType('input');
    expect(input.props.value).toBe("React course");
  });
  test("Callback should be called", () => {
    const mockCallBack = jest.fn();
    const component = create(<ProfileStatus status="React course" updateStatus={mockCallBack} />);
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallBack.mock.calls.length).toBe(1);
  });
});
