<template>
  <div ref="loading" class="loader" :style="parentStyle">
    <div class="la-ball-atom la-2x">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sw-loading',
  props: {
    backgroundColor: {
      type: String,
      default: '#100e17'
    }
  },
  computed: {
    parentStyle () {
      let result = ''
      if (this.backgroundColor) {
        result += `background-color: ${this.backgroundColor};`
      }
      // console.log(result)
      return result
    }
  },
  methods: {
    hide () {
      this.$refs.loading.style.zIndex = '-1'
      this.$refs.loading.style.opacity = '0'
      // this.$refs.loading.style.display = 'none'
    },
    show () {
      this.$refs.loading.style.zIndex = '1000'
      this.$refs.loading.style.opacity = '1'
      // this.$refs.loading.style.display = 'block'
    }
  }
}
</script>
<style>
:root {
  --font-color: #000;
  --night-font-color: #ddd;
  --primary: #b2fefa;
  --secondary: #0ed2f7;
  --dark: #0052d4;
  --gradient-light: #5d9eea;
  --gradient-middle: #0f27b5;
  --gradient-dark: #100e17;
  --code-gradient-light: #cff0ff;
  --code-gradient-dark: #afcafd;
  --maxwidth: 1284px;
}
</style>
<style lang="scss" scoped>
.loader {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  transition: opacity 600ms linear;
  opacity: 0;
  z-index: -1;
  /* background: #100e17; */
}

.loader > .la-ball-atom {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.la-ball-atom.la-2x {
  width: 64px;
  height: 64px;
}
.la-ball-atom {
  width: 32px;
  height: 32px;
}
.la-ball-atom {
  display: block;
  font-size: 0;
  color: #fff;
}
.la-ball-atom, .la-ball-atom>div {
  position: relative;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.la-ball-atom {
  color: #64d6e2 !important;
}

.la-ball-atom>div:nth-child(1) {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  width: 60%;
  height: 60%;
  background: #aaa;
  border-radius: 100%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-animation: ball-atom-shrink 4.5s infinite linear;
  -moz-animation: ball-atom-shrink 4.5s infinite linear;
  -o-animation: ball-atom-shrink 4.5s infinite linear;
  animation: ball-atom-shrink 4.5s infinite linear;
}
.la-ball-atom > div:nth-child(1) {
  color: var(--dark);
  background: var(--primary) !important;
  background: -webkit-linear-gradient(to right, var(--primary), var(--secondary), var(--dark)) !important;
  background: linear-gradient(to right, var(--primary), var(--secondary), var(--dark)) !important;
}
.la-ball-atom>div {
  display: inline-block;
  float: none;
  background-color: currentColor;
  border: 0 solid currentColor;
}
.la-ball-atom, .la-ball-atom>div {
  position: relative;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.la-ball-atom>div:nth-child(2) {
  -webkit-animation-delay: .75s;
  -moz-animation-delay: .75s;
  -o-animation-delay: .75s;
  animation-delay: .75s;
}
.la-ball-atom>div:not(:nth-child(1)) {
  position: absolute;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  background: none;
  -webkit-animation: ball-atom-zindex 1.5s 0s infinite steps(2, end);
  -moz-animation: ball-atom-zindex 1.5s 0s infinite steps(2, end);
  -o-animation: ball-atom-zindex 1.5s 0s infinite steps(2, end);
  animation: ball-atom-zindex 1.5s 0s infinite steps(2, end);
}
.la-ball-atom>div {
  display: inline-block;
  float: none;
  background-color: currentColor;
  border: 0 solid currentColor;
}
.la-ball-atom, .la-ball-atom>div {
  position: relative;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.la-ball-atom.la-2x>div:not(:nth-child(1)):before {
  width: 20px;
  height: 20px;
  margin-top: -10px;
  margin-left: -10px;
}
.la-ball-atom>div:nth-child(2):before {
  -webkit-animation-delay: 0s,-1.125s;
  -moz-animation-delay: 0s,-1.125s;
  -o-animation-delay: 0s,-1.125s;
  animation-delay: 0s,-1.125s;
}
.la-ball-atom>div:not(:nth-child(1)):before {
  position: absolute;
  top: 0;
  left: 0;
  width: 10px;
  height: 10px;
  margin-top: -5px;
  margin-left: -5px;
  content: "";
  background: currentColor;
  border-radius: 50%;
  opacity: .75;
  -webkit-animation: ball-atom-position 1.5s 0s infinite ease,ball-atom-size 1.5s 0s infinite ease;
  -moz-animation: ball-atom-position 1.5s 0s infinite ease,ball-atom-size 1.5s 0s infinite ease;
  -o-animation: ball-atom-position 1.5s 0s infinite ease,ball-atom-size 1.5s 0s infinite ease;
  animation: ball-atom-position 1.5s 0s infinite ease,ball-atom-size 1.5s 0s infinite ease;
}

.la-ball-atom>div:nth-child(3) {
  -webkit-transform: rotate(120deg);
  -moz-transform: rotate(120deg);
  -ms-transform: rotate(120deg);
  -o-transform: rotate(120deg);
  transform: rotate(120deg);
  -webkit-animation-delay: -.25s;
  -moz-animation-delay: -.25s;
  -o-animation-delay: -.25s;
  animation-delay: -.25s;
}

.la-ball-atom>div {
  display: inline-block;
  float: none;
  background-color: currentColor;
  border: 0 solid currentColor;
}
.la-ball-atom, .la-ball-atom>div {
  position: relative;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.la-ball-atom>div:nth-child(3):before {
  -webkit-animation-delay: -1s,-0.75s;
  -moz-animation-delay: -1s,-0.75s;
  -o-animation-delay: -1s,-0.75s;
  animation-delay: -1s,-0.75s;
}

.la-ball-atom>div:nth-child(4) {
  -webkit-transform: rotate(240deg);
  -moz-transform: rotate(240deg);
  -ms-transform: rotate(240deg);
  -o-transform: rotate(240deg);
  transform: rotate(240deg);
  -webkit-animation-delay: .25s;
  -moz-animation-delay: .25s;
  -o-animation-delay: .25s;
  animation-delay: .25s;
}

.la-ball-atom>div {
  display: inline-block;
  float: none;
  background-color: currentColor;
  border: 0 solid currentColor;
}
.la-ball-atom, .la-ball-atom>div {
  position: relative;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.la-ball-atom>div:nth-child(4):before {
  -webkit-animation-delay: -0.5s,-0.125s;
  -moz-animation-delay: -0.5s,-0.125s;
  -o-animation-delay: -0.5s,-0.125s;
  animation-delay: -0.5s,-0.125s;
}

@keyframes ball-atom-position {
  50% {
    top: 100%;
    left: 100%
  }
}

@keyframes ball-atom-size {
  50% {
    -webkit-transform: scale(0.5, 0.5);
    -moz-transform: scale(0.5, 0.5);
    -o-transform: scale(0.5, 0.5);
    transform: scale(0.5, 0.5)
  }
}

@keyframes ball-atom-zindex {
  50% {
    z-index: 10
  }
}

@keyframes ball-atom-shrink {
  50% {
    -webkit-transform: translate(-50%, -50%) scale(0.8, 0.8);
    -moz-transform: translate(-50%, -50%) scale(0.8, 0.8);
    -o-transform: translate(-50%, -50%) scale(0.8, 0.8);
    transform: translate(-50%, -50%) scale(0.8, 0.8)
  }
}
</style>
