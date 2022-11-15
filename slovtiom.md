# REACT & electron命令启动
1. 开两个终端，先运行`npm start`，再运行`npm run ele`
   1. 有先后顺序，麻烦
2. 添加命令：`"dev":"npm start & npm run ele"`
   1. 输出混乱，不知道运行的是哪个命令，不跨平台，不好用
3. 使用工具`concurrently`运行多个命令`"dev": "concurrently \"electron .\" \"npm start\""`
   1. 白屏，使用wait-on`"dev": "concurrently \"wait-on http://localhost:3000 && electron .\" \"npm start\""`
   2. 让**create-react-app**不打开浏览器
      1. 安装**cross-en**
      2. `"dev": "concurrently \"wait-on http://localhost:3000 && electron .\" \"cross-env BROWSER=none npm start\""`