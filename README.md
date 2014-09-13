toy-Graph
=========

A small thumbnail sized Graph

##Usage
```
foo = new toyGraph('<dom element ID of canvas>', [color])
foo.draw([1,2,3,4,5])
```

```coffee
# CoffeeScript example Code
tData = []
for i in [0..2] by 0.02
  tData.push( 1 + Math.sin(i * Math.PI))

foo = new toyGraph('toyGraph')
foo.draw(tData)

foobar = () =>
  tData.push(tData.shift())
  foo.draw(tData)

setInterval( foobar , 1000 / 30 )
```
Result:

![result of example code](https://dl.dropboxusercontent.com/u/7308460/images/toy-Graph.PNG)



##API
**soon**

##TODO:
> **Coding:**
>
> - [x] **Decide to use KineticJS or Raw Canvas**
> - [x] **Build GUI framework**
> - [x] **Display Scaling based on data's min/max**
>
> **Testing / Doc:**
> - [ ] Document API
>
> **Eventualy:**
