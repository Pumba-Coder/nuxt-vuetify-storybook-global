<template>
  <Fragment>
    <div class="scroll-action-container hidden-md-and-up">
      <div class="scroll-action-cheveron"></div>
      <div class="scroll-action-cheveron"></div>
    </div>
    <div class="scroll-msg hidden-sm-and-down">
      <div class="scroll-msg-wheel"></div>
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'

export default {
  name: 'ScrollAction',
  components: {
    Fragment
  }
}
</script>

<style lang="scss" scoped>
// Scroll Container (desktop)
$mouse_color: #ffffff;
$mouse_width: 26px;
$mouse_height: 40px;
$border_width: 2px;
$wheel_size: $border_width * 3;

@mixin keyframes($animationName) {
  @-webkit-keyframes #{$animationName} {
    @content;
  }
  @-moz-keyframes #{$animationName} {
    @content;
  }
  @-o-keyframes #{$animationName} {
    @content;
  }
  @keyframes #{$animationName} {
    @content;
  }
}

@mixin animation($animations) {
  -webkit-animation: $animations;
  -moz-animation: $animations;
  -o-animation: $animations;
  animation: $animations;
}

@include keyframes(mouse-scroll) {
  0% {
    top: 15%;
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    top: 35%;
    opacity: 0;
  }
}

// .scroll-msg-container {
.scroll-msg {
  bottom: 20px;
  z-index: 3;
  width: $mouse_width;
  height: $mouse_height;
  border-radius: $mouse_width/2 + $border_width * 2;
  border: $border_width solid $mouse_color;

  @include sm-down() {
    height: 20px;
  }
}

.scroll-msg-wheel {
  position: absolute;
  top: 10%;
  left: 50%;
  width: $wheel_size;
  height: $wheel_size;
  margin-left: -$wheel_size/2;
  border-radius: 50%;
  background-color: $mouse_color;

  @include animation(mouse-scroll 0.9s infinite);
}

// Scroll Action Container (mobile)
.scroll-action-container {
  width: 13px;
  height: 25px;
  z-index: 10;
  bottom: 10px;
}

.scroll-action-cheveron {
  position: absolute;
  width: 13px;
  height: 4px;
  z-index: 10;
  opacity: 0;
  transform: scale3d(0.5, 0.5, 0.5);
  animation: move 3s ease-out infinite;

  &:first-child {
    animation: move 2s ease-out 1s infinite;
  }

  &:nth-child(2) {
    animation: move 2s ease-out 2s infinite;
  }

  &:after,
  &:before {
    content: ' ';
    position: absolute;
    top: 0;
    height: 100%;
    width: 51%;
    background: #fff;
  }

  &:before {
    left: 0;
    transform: skew(0deg, 30deg);
  }

  &:after {
    right: 0;
    width: 50%;
    transform: skew(0deg, -30deg);
  }
}

@keyframes move {
  25% {
    opacity: 1;
  }
  33% {
    opacity: 1;
    transform: translateY(10px);
  }
  67% {
    opacity: 1;
    transform: translateY(20px);
  }
  100% {
    opacity: 0;
    transform: translateY(25px) scale3d(0.5, 0.5, 0.5);
  }
}
</style>
