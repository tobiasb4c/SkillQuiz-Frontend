import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Frage from "../components/Frage.vue";

//https://testdriven.io/blog/vue-unit-testing/

describe('Frage.vue Implementation Test', () => {
  it('processes the props the right way', () => {
    const wrapper = mount(Frage, {
        props: {
          text: "Bogo Frage",
        },
    });

    // check prop data
    expect(wrapper.vm.text).toMatch("Bogo Frage");

    // check that the heading text is rendered
    expect(wrapper.findAll('h2').length).toEqual(1);
    expect(wrapper.findAll('h2').at(0).text()).toMatch('Bogo Frage')
  })
});
