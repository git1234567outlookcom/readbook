#容器属性
- flex-direction:
    - 排列方向
    - row 默认,水平 | row-reverse | column | column-reverse
- flex-wrap
    - 换行
    - nowrap | wrap | wrap-reverse;
- flex-flow
    - flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，
    - 默认值为row nowrap
    - <flex-direction> || <flex-wrap>
- justify-content
    - 主轴的对齐方式
    - flex-start 左| flex-end | center | space-between 两端| space-around
- align-items
    - 项目在交叉轴上如何对齐 上下
    - flex-start | flex-end | center | baseline | stretch;
- align-content 
    - 多行对齐方式 上下居中
    - flex-start | flex-end | center | space-between | space-around | stretch

#项目属性
- order
    - 排列顺序。数值越小，排列越靠前，默认为0
    - order: <integer>;
- flex-grow
    - 定义项目的放大比例
    - flex-grow: <number>; /* default 0 */
- flex-shrink
    - 定义了项目的缩小比例，默认为1
    - flex-shrink: <number>; /* default 1 */
- flex-basis
    - 分配多余空间之前
    - flex-basis: <length> | auto; /* default auto 项目的本来大小 */
- flex
    - flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto
    - flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
- align-self 
    - align-self: auto | flex-start | flex-end | center | baseline | stretch
 
  
