class toyGraph
  constructor: (@EleID) ->
    @canvas = document.getElementById(@EleID)
    @context = @canvas.getContext('2d')
    @bgColor = 'rgba(0,0,0,.75)'
    @width = @canvas.width || 100
    @height = @canvas.height || 50
    @Stroke_Width = 1 + ((@height + @width) / 200)
    @Graph_X_Min = @width * 0.02
    @Graph_X_Max = @width * 0.98
    @Graph_Y_Min = @height * 0.10
    @Graph_Y_Max = @height * 0.90

  resize: () ->
    return

  draw: (aData,aColor) ->
    # Check Data
    aData_Min = 0
    aData_Max = 0
    aData_Avg = 0
    for i in aData
      n = -i
      aData_Avg += n
      aData_Min = n if n < aData_Min
      aData_Max = n if n > aData_Max
    aData_Avg = aData_Avg / aData.length
    local_mod = 0 - aData_Min
    local_Max = aData_Max + local_mod
    local_Min = aData_Min + local_mod
    # Clear Canvas
    @context.clearRect(0,0,@width,@height)
    # Draw Background
    @context.beginPath()
    @context.rect(0,0,@width,@height)
    @context.fillStyle = @bgColor
    @context.fill()
    # Draw Ref lines
    # Draw Graph
    @context.beginPath()
    idxi = (@Graph_X_Max - @Graph_X_Min) / aData.length
    idx = @Graph_X_Min + ( idxi / 2 )
    v = ((-aData[0] + local_mod) * @Graph_Y_Max) / local_Max
    @context.moveTo(idx,v + (@Graph_Y_Min / 2))
    for i in aData
      n = -i
      v = ((n + local_mod) * @Graph_Y_Max) / local_Max
      @context.lineTo(idx,v + (@Graph_Y_Min / 2))
      idx += idxi
    @context.lineWidth = @Stroke_Width
    @context.strokeStyle = aColor || '#aaaaaa'
    @context.lineCap = 'round'
    @context.lineJoin = 'round'
    @context.stroke()
    # Draw Text
    @context.font = '20px Calibri'
    @context.textAlign = 'left'
    @context.fillStyle = '#aaaaaa'
    @context.strokeStyle = '#000000'
    tCurrent = aData[aData.length - 1].toFixed(2)
    tX = @width - (@context.measureText(tCurrent).width + (@Stroke_Width * 2))
    tY = 15 + (@Stroke_Width * 2)
    @context.strokeText(tCurrent, tX , tY )
    @context.fillText(tCurrent, tX , tY )
    # Draw Border
    @context.beginPath()
    @context.rect(0,0,@width,@height)
    @context.lineWidth = @Stroke_Width * 2
    @context.strokeStyle = '#aaaaaa'
    @context.stroke()
