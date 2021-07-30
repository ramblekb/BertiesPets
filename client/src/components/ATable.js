class Form extends TraditionalObjectOrientedView {
   render() {
     // Read some data passed to the view
     const { isSubmitted, buttonText } = this.attrs;
 
     if (!isSubmitted && !this.button) {
       // Form is not yet submitted. Create the button!
       this.button = new Button({
         children: buttonText,
         color: 'blue'
       });
       this.el.appendChild(this.button.el);
     }
 
     if (this.button) {
       // The button is visible. Update its text!
       this.button.attrs.children = buttonText;
       this.button.render();
     }
 
     if (isSubmitted && this.button) {
       // Form was submitted. Destroy the button!
       this.el.removeChild(this.button.el);
       this.button.destroy();
     }
 
     if (isSubmitted && !this.message) {
       // Form was submitted. Show the success message!
       this.message = new Message({ text: 'Success!' });
       this.el.appendChild(this.message.el);
     }
   }
 }