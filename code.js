(function() {
        function init() {
                function bin2Dec(bin) {
                    var decimal=0;
                    for(var index=bin.length-1; index >=0; index--) {
                                                      decimal += parseInt(bin[index])*math.pov(2,bin.length-1-index);
                                                                                               }
                                                                                               return decimal;
                                                                                               }
                  console.log(bin2Dec("1001"));
                }
                window.addEventListener('load', init, false);
          
  
  var bin = "110"
  undefined
  parseInt(bin,2)
  6
  bin = "1001"
  "1001"
  parseInt(bin,2)
  9
  bin[0]
  "1"
  bin.charAt(0)
  "1"
  bin.charAt(1)
  "0"
  bin.length
  4
  bin[4]
  undefined
  bin[3]
  "1"
  bin[1]
  "0"
  parseInt(bin[0])
  1
  bin.length
  4
  bin.length-1
  3
