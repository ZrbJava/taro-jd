export default {
  pages: [
    "pages/workBench/index",
    "pages/store/index",
    "pages/mine/index",
    "pages/index/index"
  ],
  window: {
    navigationBarTitleText: "云货优选",
    navigationBarBackgroundColor: "#e43130",
    navigationBarTextStyle: "white",
    backgroundColorTop: "#f0f0f0"
  },
  tabBar: {
    color: "#999999",
    selectedColor: "#FF4466",
    backgroundColor: "#ffffff",
    borderStyle: "black",
    list: [
      {
        pagePath: "pages/workBench/index",
        iconPath: "static/tab/menu_workBench_default@3x.png",
        selectedIconPath: "static/tab/menu_workBench.@3x.png",
        text: "工作台"
      },
      {
        pagePath: "pages/store/index",
        iconPath: "static/tab/menu_home_default@3x.png",
        selectedIconPath: "static/tab/menu_home@3x.png",
        text: "店铺"
      },
      {
        pagePath: "pages/mine/index",
        iconPath: "static/tab/menu_my_default@3x.png",
        selectedIconPath: "static/tab/menu_my@3x.png",
        text: "我的"
      }
    ]
  }
};
