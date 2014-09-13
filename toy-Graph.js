var toyGraph;

toyGraph = (function() {
  function toyGraph(EleID) {
    this.EleID = EleID;
    this.canvas = document.getElementById(this.EleID);
    this.context = this.canvas.getContext('2d');
    this.bgColor = 'rgba(0,0,0,.75)';
    this.width = this.canvas.width || 100;
    this.height = this.canvas.height || 50;
    this.Stroke_Width = 1 + ((this.height + this.width) / 200);
    this.Graph_X_Min = this.width * 0.02;
    this.Graph_X_Max = this.width * 0.98;
    this.Graph_Y_Min = this.height * 0.10;
    this.Graph_Y_Max = this.height * 0.90;
  }

  toyGraph.prototype.resize = function() {};

  toyGraph.prototype.draw = function(aData, aColor) {
    var aData_Avg, aData_Max, aData_Min, i, idx, idxi, local_Max, local_Min, local_mod, n, tCurrent, tX, tY, v, _i, _j, _len, _len1;
    aData_Min = 0;
    aData_Max = 0;
    aData_Avg = 0;
    for (_i = 0, _len = aData.length; _i < _len; _i++) {
      i = aData[_i];
      n = -i;
      aData_Avg += n;
      if (n < aData_Min) {
        aData_Min = n;
      }
      if (n > aData_Max) {
        aData_Max = n;
      }
    }
    aData_Avg = aData_Avg / aData.length;
    local_mod = 0 - aData_Min;
    local_Max = aData_Max + local_mod;
    local_Min = aData_Min + local_mod;
    this.context.clearRect(0, 0, this.width, this.height);
    this.context.beginPath();
    this.context.rect(0, 0, this.width, this.height);
    this.context.fillStyle = this.bgColor;
    this.context.fill();
    this.context.beginPath();
    idxi = (this.Graph_X_Max - this.Graph_X_Min) / aData.length;
    idx = this.Graph_X_Min + (idxi / 2);
    v = ((-aData[0] + local_mod) * this.Graph_Y_Max) / local_Max;
    this.context.moveTo(idx, v + (this.Graph_Y_Min / 2));
    for (_j = 0, _len1 = aData.length; _j < _len1; _j++) {
      i = aData[_j];
      n = -i;
      v = ((n + local_mod) * this.Graph_Y_Max) / local_Max;
      this.context.lineTo(idx, v + (this.Graph_Y_Min / 2));
      idx += idxi;
    }
    this.context.lineWidth = this.Stroke_Width;
    this.context.strokeStyle = aColor || '#aaaaaa';
    this.context.lineCap = 'round';
    this.context.lineJoin = 'round';
    this.context.stroke();
    this.context.font = '20px Calibri';
    this.context.textAlign = 'left';
    this.context.fillStyle = '#aaaaaa';
    this.context.strokeStyle = '#000000';
    tCurrent = aData[aData.length - 1].toFixed(2);
    tX = this.width - (this.context.measureText(tCurrent).width + (this.Stroke_Width * 2));
    tY = 15 + (this.Stroke_Width * 2);
    this.context.strokeText(tCurrent, tX, tY);
    this.context.fillText(tCurrent, tX, tY);
    this.context.beginPath();
    this.context.rect(0, 0, this.width, this.height);
    this.context.lineWidth = this.Stroke_Width * 2;
    this.context.strokeStyle = '#aaaaaa';
    return this.context.stroke();
  };

  return toyGraph;

})();
