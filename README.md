toy-Graph
=========

A small thumbnail sized Graph

##Usage
```
foo = new toyGraph('<dom element ID of canvas>', [color])
foo.draw([1,2,3,4,5])
```

```javascript
sData = [];
cData = [];
tData = [];

for (i = _i = 0; _i <= 2; i = _i += 0.02) {
  sData.push(1 + Math.sin(i * Math.PI));
}

for (i = _i = 0; _i <= 2; i = _i += 0.02) {
  cData.push(Math.cos(i * Math.PI));
}

for (i = _i = 0; _i <= 2; i = _i += 0.02) {
  v = Math.tan(i * Math.PI);
  if (v > 20) { v = 0};
  if (v < -20) {v = 0};
  tData.push(v);
}

foo = new toyGraph('toyGraphSIN');
foo.draw(sData);

bar = new toyGraph('toyGraphCOS');
bar.draw(cData);

baz = new toyGraph('toyGraphTAN');
baz.draw(tData);

foobar = (function(_this) {
  return function() {
    sData.push(sData.shift());
    cData.push(cData.shift());
    tData.push(tData.shift());
    foo.draw(sData);
    bar.draw(cData);
    baz.draw(tData);
  };
})(this);

setInterval(foobar, 1000 / 30);
```
Example: http://caffeineaddiction.github.io/toy-Graph/

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
