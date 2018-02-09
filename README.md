# iChickenFarm
Intelligent Chicken Farm, innovation Project based on SAPUI5.

## Installation

1. Open your terminal console, change directory to folder __iChickenFarm__
2. Run below commands
```bash
    npm start
```
3. Access **http://localhost:3000/** in your browser (Chrome is recommended)

## Cautions
Page "Analysis" is embedded with cross-domain page <http://preview.agnet.com.cn/#/>, and this page will access **window.localStrage**. Due to browser security policy, this will lead to loading failure. So you need to turn off one security setting of browser temporarily. (Don't forget to reset them after you finish your development)

* Access <chrome://settings/content/cookies>
* Turn on **Allow sites to save and read cookie data**
* Turn off **Block third-party cookies**