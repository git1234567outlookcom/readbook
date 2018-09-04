# learning TypeScript

# TypeScript 简介

- 设计目标
  - 编译器进行静态类型分析的强类型语言
  - js 的超集
  - 加入了基于类的对象、接口和模块，提供一个构建机制
  - 术语
    - design time code 设计时代码
    - execution time code 执行时代码
    - runtime code 运行时代码
- ts 组件

  - 语言层：实现所有 ts 的语言特性
  - 编译层：进行代码转换
  - 语言服务层：生成信息
  - IDE 整合

---

- 类型
  - boolean
  - number
  - string
  - array
  - enum
  - any 任意类型 js 值
  - void any 的对立面，所有的类型都不存在的时候

---

变量声明：var、let、const

- var ：作用域 函数
- let 保存在最近的 比函数作用域小的块作用域中
- const：创建一个保存在创建位置作用域中的常量

---

联合类型

`TypeScript var path : string[]| string;`

用来生命那些可以存储多种类型值的变量

---

运算符

默认包含一个名为 lib.d.ts 的文件

提供了像 dom 这中 js 内置库的接口

- == 比较两个元素的值
- === 比较值和类型

---

> 代码 test1.ts

---

# 自动化工作流程

- 版本控制
- 包管理
- 自动化任务 grunt gulp
- 自动化测试 karma
- 持续集成 CI Travis CI
- 脚手架 Yeoman

自动化测试工具 Karma

测试框架 Mocha

chai（断言库）

sinon（数据模拟框架）

---

# 使用函数

> test3.ts
