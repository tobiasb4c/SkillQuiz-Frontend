import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Fragennummer from "../components/Fragennummer.vue";

//https://testdriven.io/blog/vue-unit-testing/

describe("Fragennummer.vue Implementation Test", () => {
    it('processes the props the right way', () => {
        const wrapper = mount(Fragennummer, {
            props: {
              max: 12,
            },
        });
    
        // check prop data
        expect(wrapper.vm.max).equals(12);
      })

  it("renders the text", () => {
    const wrapper = mount(Fragennummer, {
        props: {
          max: 12,
        },
    });

    // check that the fragennummer text is rendered
    expect(wrapper.findAll('p').at(0).text()).toMatch('Question 1 of 12')
  });

  it("changes after increase and decrease", () => {
    const wrapper = mount(Fragennummer, {
        props: {
          max: 12,
        },
    });

    // check button click increase
    wrapper.findAll("button").at(0).trigger("click");
    expect(wrapper.vm.current).equals(2)

    // check button click decrease
    wrapper.findAll("button").at(1).trigger("click");
    expect(wrapper.vm.current).equals(1)
  });

  it("the current number doesnt go further than the max", () => {
    const wrapper = mount(Fragennummer, {
        props: {
          max: 2,
        },
    });
    
    // check button click increase
    // exceed the maximum
    wrapper.findAll("button").at(0).trigger("click");
    wrapper.findAll("button").at(0).trigger("click");

    // should
    expect(wrapper.vm.current).equals(2)
  });

  it("the current number doesnt go below 1", () => {
    const wrapper = mount(Fragennummer, {
        props: {
          max: 2,
        },
    });
    
    // go below 1
    wrapper.findAll("button").at(1).trigger("click");
    wrapper.findAll("button").at(1).trigger("click");

    // should
    expect(wrapper.vm.current).equals(1)
  });
});
