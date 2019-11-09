ts+webpack+react
搭建过程中遇到的问题   
1. 在config目录下的文件在使用模板和入口文件的时候都写成了'../src', 其实这样是错误的，因为webpack打包是以webpack.config.js为参照，应该写成'./src'
2.  ts中的react， ReactDOM应该引成import * as .... from '....';