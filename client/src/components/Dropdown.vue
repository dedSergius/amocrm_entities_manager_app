<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="control--select"
    :style="{ zIndex: controlStore.isOpen ? '60' : '' }"
  >
    <ul
      :class="[
        'custom-scroll',
        { 'control--select--list': !controlStore.selectIsOpen },
        { 'control--select--list-opened': controlStore.selectIsOpen },
      ]"
      :style="{ zIndex: controlStore.selectIsOpen ? '30' : '' }"
    >
      <li
        v-for="option in options"
        :key="option.value"
        :data-value="option.value"
        :class="[
          'control--select--list--item',
          {
            'control--select--list--item-selected':
              option.value === controlStore.selectedOption.value,
          },
          {
            'control--select--list--item-key_selected':
              option.value === controlStore.selectedOption.value &&
              controlStore.selectIsOpen,
          },
        ]"
        @click="select(option)"
      >
        <span class="control--select--list--item-inner" :title="option.label">{{
          option.label
        }}</span>
      </li>
    </ul>
    <button class="control--select--button" @click="toggleDropdown">
      <span class="control--select--button-inner">{{
        controlStore.selectedOption.label
      }}</span>
    </button>
    <input
      type="hidden"
      class="control--select--input"
      :value="controlStore.selectedOption.value"
    />
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useControlStore } from '../stores/ControlStore.js';
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  options: { type: Array, required: true },
});
const controlStore = useControlStore();
if (!controlStore.selectedOption) {
  // eslint-disable-next-line vue/no-setup-props-destructure
  const a = props.options[0];
  controlStore.selectedOption = a;
}
const toggleDropdown = () => {
  controlStore.selectIsOpen = !controlStore.selectIsOpen;
};
const select = (option) => {
  controlStore.selectedOption = option;
  toggleDropdown();
};
</script>

<style scoped>
.control--select,
.control--select--button {
  position: relative;
  z-index: 10;
  color: #2e3640;
  height: 36px;
  min-width: 150px;
}

.control--select-white .control--select--button {
  background: #fff;
}

.control--select--button {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  box-sizing: border-box;
  max-width: 100%;
  display: inline-block;
  width: 100%;
  height: 100%;
  text-align: left;
  outline: 0;
  padding-top: 1px;
  border: 1px solid #d4d5d8;
  border-bottom-width: 2px;
  border-radius: 3px;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#fcfcfc),
    to(#f8f8f9)
  );
  background: linear-gradient(to bottom, #fcfcfc 0%, #f8f8f9 100%);
  padding-right: 25px;
  padding-left: 9px;
  color: inherit;
}

.control--select--button-small-text {
  display: -webkit-box;
  display: flex;
  overflow: visible;
}

.control--select--button-colored {
  border: 0;
  padding-top: 1px;
  padding-bottom: 2px;
}

.control--select--button-inner-small {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  box-sizing: border-box;
  display: inline-block;
  font-size: 13px;
  margin-left: 5px;
  color: #8f9a9d;
  max-width: 100px;
}

.control--select--button:after {
  content: '';
  position: absolute;
  top: calc(50% - 5px);
  width: 6px;
  height: 6px;
  border-bottom: 1px solid #000;
  border-right: 1px solid #000;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  margin-left: 7px;
  right: 12px;
  z-index: 10;
}

.control--select--button:focus:after,
.control--select--button:hover:after {
  -webkit-transform: rotate(45deg) scale(1.075);
  transform: rotate(45deg) scale(1.075);
}

.control--select--button:focus {
  border-color: #c1c1c1;
}

.control--select--button[disabled='Y'],
.control--select--button[disabled='disabled'] {
  background: 0 0;
  color: #b3b6bd;
  border-color: #dfdfdf;
  border-bottom-width: 1px;
}

.control--select--button[data-before]:before {
  content: attr(data-before);
}

.control--select--button[data-after]:after {
  content: attr(data-after);
  top: 0;
}

.control--select--list {
  display: none;
}

.control--select--list-opened {
  display: block;
  width: 100%;
  border: 1px solid #d4d5d8;
  background-color: #fff;
  padding-right: 11px;
  height: auto;
  margin-right: -13px;
  border-radius: 3px;
  overflow: auto;
  position: absolute;
  max-height: 211px;
  bottom: auto;
  top: 0;
}

.control--select--list-opened.control--select--list-to-top {
  bottom: 3px;
  top: auto;
}

.control--select--list--item {
  cursor: pointer;
  position: relative;
  list-style-type: none;
  padding: 8px 6px 7px 0;
  margin: 0 -11px 0 0;
  overflow: hidden;
  box-sizing: border-box;
}

.control--select--list--item:hover {
  background-color: #ededed;
}

.control--select--list--item-link .control--select--list--item-inner {
  color: #0085c3;
}

.control--select--list--item-inner {
  position: relative;
  display: block;
  padding-left: 22px;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: normal;
  z-index: 2;
  text-align: initial;
}

.control--select--list--item-small-text .control--select--list--item-inner {
  display: inline-block;
  width: auto;
  height: 15px;
}

.control--select--list--item-small-text
  .control--select--list--item-inner-small {
  z-index: 2;
  font-size: 13px;
  margin-left: 5px;
  color: #8f9a9d;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  box-sizing: border-box;
  display: inline-block;
  max-width: 100px;
  position: absolute;
}

.control--select--list--item-key_selected {
  background: #f5f5f5;
}

.control--select--list--item-key_selected
  .control--select--list--item-inner-small,
html.no-touch
  .control--select--list-opened
  .control--select--list--item:hover:before
  .control--select--list--item-inner-small-text,
html.touch
  .control--select--list-opened
  .control--select--list--item:active:before
  .control--select--list--item-inner-small-text {
  color: #afbabd;
}

.control--select--list--item[data-disabled] {
  font-size: 11px;
  text-transform: uppercase;
  font-weight: 700;
  color: #acb0b3;
}

.control--select--list--item-selected .control--select--list--item-inner {
  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5IiBoZWlnaHQ9IjciIHZpZXdCb3g9IjAgMCA5IDciPgogIDxwYXRoIGlkPSJmZWVkLXRhc2siIGQ9Ik0yNDkuMDEsMTQ4Ny43M2wtNS44NzgsNi4yOC0wLjEtLjExLTAuMS4xMS0yLjkzOS0zLjE0LDAuNjkzLS43NCwyLjM0OCwyLjUxLDUuMjg2LTUuNjVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjQwIC0xNDg3KSIvPgo8L3N2Zz4K)
    8px 6px no-repeat;
}
</style>
