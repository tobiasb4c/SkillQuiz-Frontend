import { mount } from "@vue/test-utils"
import { describe, expect, it } from "vitest"
import Beenden from "../components/Beenden.vue"

//https://testdriven.io/blog/vue-unit-testing/

describe("Beenden.vue Implementation Test", () => {
  const wrapper = mount(Beenden)

  it("renders the button", () => {
    // check that the button is rendered
    expect(wrapper.findAll("button").length).toEqual(1)
    expect(wrapper.findAll("label").length).toEqual(1)
    expect(wrapper.findAll("label").at(0).text()).toMatch("Submit Exam")
  })

  it("allows the button to be clicked", () => {
    //check button click
    expect(wrapper.vm.submitted).toBeFalsy()
    wrapper.findAll("button").at(0).trigger("click")
    expect(wrapper.vm.submitted).toBeTruthy()
  })
})
