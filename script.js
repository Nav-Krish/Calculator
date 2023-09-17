var title=document.createElement("h1")
        title.innerHTML="Calculator"
        title.setAttribute("id","title")
        document.body.append(title)

        var des=document.createElement("p")
        des.innerHTML="A simple calculator using DOM"
        des.setAttribute("id","description")
        document.body.append(des)

        var parent = document.createElement("div");
        parent.setAttribute("class", "parent")
        parent.setAttribute("id", "parent")

        var child = document.createElement("div");
        child.setAttribute("class", "child")
        child.setAttribute("id", "child")

        var displayScreen = document.createElement("input")
        displayScreen.setAttribute("type", "text");
        displayScreen.setAttribute("id", "dispalyScreen");
        displayScreen.className="displayScreen"
        displayScreen.setAttribute("placeholder", "0");

        function createButton(btn_tag,btn_type,btn_id,btn_value,btn_class,btn_name){
            var button=document.createElement(btn_tag)
            button.setAttribute("type",btn_type)
            button.setAttribute("value",btn_value)
            button.setAttribute("id",btn_id)
            button.className=btn_class
            button.innerHTML=btn_name
            return button
        }
        
        var btn1=createButton("button","button","clear","clear","btn btn-default","C")
        var btn2=createButton("button","button","delete","delete","btn btn-default light","←")
        var btn3=createButton("button","button","dot",".","btn btn-default light",".")
        var btn4=createButton("button","button","op","*","btn btn-default light","*")

        var btn5=createButton("button","button","num","7","btn btn-default light","7")
        var btn6=createButton("button","button","num","8","btn btn-default light","8")
        var btn7=createButton("button","button","num","9","btn btn-default light","9")
        var btn8=createButton("button","button","op","/","btn btn-default light","/")

        var btn9=createButton("button","button","num","4","btn btn-default light","4")
        var btn10=createButton("button","button","num","5","btn btn-default light","5")
        var btn11=createButton("button","button","num","6","btn btn-default light","6")
        var btn12=createButton("button","button","op","-","btn btn-default light","-")

        var btn13=createButton("button","button","num","1","btn btn-default light","1")
        var btn14=createButton("button","button","num","2","btn btn-default light","2")
        var btn15=createButton("button","button","num","3","btn btn-default light","3")
        var btn16=createButton("button","button","op","+","btn btn-default light","+")

        var btn17=createButton("button","button","num","0","btn btn-default light","0")
        var btn18=createButton("button","button","num","00","btn btn-default light","00")
        var btn19=createButton("button","button","op","=","btn btn-primary","=")

        btn19.setAttribute("id","equal")
        btn1.setAttribute("id","clear")

        child.append(displayScreen,btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9,btn10,btn11,btn12,btn13,btn14,btn15,btn16,btn17,btn18,btn19)
        parent.append(child)
        document.body.append(parent)

        var buttons=document.querySelectorAll("button")
        var output=[]

        buttons.forEach((btn)=>{
            btn.addEventListener("click",()=>{
            if(!btn.id.match("delete") && !btn.id.match("equal")){
                // output.push(btn.value)
                displayScreen.value+=btn.value
                console.log(displayScreen.value)
            }
            if(btn.id.match("equal")){

                displayScreen.value=eval(displayScreen.value);
            }
            if(btn.id.match("clear")){
                displayScreen.value=[]
            }
            if(btn.id.match("delete")){
                displayScreen.value=displayScreen.value.slice(0,-1)
            }
        })
        })