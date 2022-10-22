<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Micro-Sub-App1" />

    <div>
      <button class="send-btn btn-active" @click="sendMessge(1)">
        发送数据1
      </button>

      <button class="send-btn" @click="sendMessge(2)">发送数据2</button>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import actions from "./utils";

// 消息配置
const messageMap = {
  1: "Vue-1-数据: 曾经沧海难为水",
  2: "Vue-1-数据: 除却巫山不是云",
};

export default {
  name: "App",
  components: { HelloWorld },
  mounted() {
    // 监听全局 state 变化
    actions.onGlobalStateChange((state, prev) => {
      console.log("子应用-Vue1 监听 prev: ", prev);
      console.log("子应用-Vue1 监听 state: ", state);
    });
  },
  methods: {
    // 子应用发送消息
    sendMessge(type) {
      const message = messageMap[type];
      actions.setGlobalState({ message });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 20px;
}

.send-btn {
  width: 120px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  border-radius: 4px;
  background: #fff;
  border: 1px solid #ccc;
  outline: unset;
  cursor: pointer;
  color: #333;
}

.send-btn:not(:last-of-type) {
  margin-right: 10px;
}

.btn-active {
  background: rgb(242, 159, 6);
  color: #fff;
  border: none;
}
</style>
