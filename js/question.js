class Question{
    constructor(){
        this.title = createElement("h1");
        this.input1 = createInput("Enter Your Name!");
        this.input2 = createInput("Enter Your option!");
        this.button = createButton("Submit");
        this.question = createElement("h2");
        this.option1 = createElement("h3");
        this.option2 = createElement("h3");
        this.option3 = createElement("h3");
        this.option4 = createElement("h3");

    }
    hide(){
        this.title.hide();
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
    
    }
    display(){
        this.title.html("My Quiz Game!")
        this.title.position(325,8);
        this.question.html("question: What starts and ends with the letter 'e' but has only one letter?")
        this.question.position(150,80);
        this.option1.html("1: Everyone")
        this.option1.position(150,110);
        this.option2.html("1: Envelope")
        this.option2.position(150,135);
        this.option3.html("1: Estimate")
        this.option3.position(150,160);
        this.option4.html("1: Everyone")
        this.option4.position(150,185);
        this.input1.position(150,250);
        this.input2.position(350,250);
        this.button.position(290,300);


    }
}
/*
Create all the input, heading elements you need to create your Quiz game UI inside the constructor.
Write a hide( ) to hide the elements
Create display( ) function and inside it assign the position, text, heading names to all the HTML elements you 
create in the constructor.
*/