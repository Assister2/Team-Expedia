function carDivSearchFun(){
    
    var main=document.querySelector("#input2")
    // ...........MainDiv
    var div21  = document.createElement("div")
    div21.setAttribute("class", "input21")

    // ...........div 211

    var div211 =document.createElement("div")
    div211.setAttribute("class", "input211")

    var div2111 =document.createElement("div")
    div2111.setAttribute("class", "input2111")
    div2111.innerText="Car Hire";

    var div2112 =document.createElement("div")
    div2112.setAttribute("class", "input2112")
    div2112.innerText="Airport Transport"

    div211.append(div2111, div2112)

     // ...........div 212

     var div212 =document.createElement("div")
     div212.setAttribute("class", "input212")

     var div2121 =document.createElement("div")
    div2121.setAttribute("class", "input2121")
     
    var input2121 =document.createElement("input")
    input2121.placeholder = "Pick-Up"
    
    div2121.append(input2121)

    var div2122 =document.createElement("div")
    div2122.setAttribute("class", "input2122")
     
    var input2122 =document.createElement("input")
    input2122.placeholder = "Drop-Off"
    
    div2122.append(input2122)

    div212.append(div2121, div2122)

      // ...........div 213......

    var div213 =document.createElement("div")
    div213.setAttribute("class", "input213")

    var div2131 =document.createElement("div")
    div2131.setAttribute("class", "input2131")
     
    var input2131 =document.createElement("input")
    input2131.placeholder = "Pick-Up-date"
    
    div2131.append(input2131)

    var div2132 =document.createElement("div")
    div2132.setAttribute("class", "input2132")
     
    var input2132 =document.createElement("input")
    input2132.placeholder = "Drop-Off-date"
    
    div2132.append(input2132)

    var div2133 =document.createElement("div")
    div2133.setAttribute("class", "input2133")
     
    var input2133 =document.createElement("input")
    input2133.placeholder = "Pick-Up-time"
    
    div2133.append(input2133)

    var div2134 =document.createElement("div")
    div2134.setAttribute("class", "input2134")
     
    var input2134 =document.createElement("input")
    input2134.placeholder = "Drop-Off-time"
    
    div2134.append(input2134)

     // ...........4 inside Div

     var div214 =document.createElement("div")
     div214.setAttribute("class", "input214")

     var btn = document.createElement("button")
     btn.setAttribute("class", "carSearchBtn")
     btn.innerText="Search"
     
     div214.append(btn)

    //  ......append Main

    div21.append(div211, div212, div213, div214)

    // ........append in input 2

    main.append(div21)
}