// Declared and sofort invoked weil of the ();
//Budget controller
var budgetController = (function() {})(); //() sofort invoked function

//UI Controller
var UIController = (function() {
  //public method

  //To simplify Strings from DOM
  var DOMStrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value"
  };

  return {
    getInput: function() {
      //Returns multiple values from UI as an Object:
      return {
        type: document.querySelector(DOMStrings.inputType).value, //Either inc or Exp
        description: document.querySelector(DOMStrings.inputDescription).value,
        value: document.querySelector(DOMStrings.inputValue).value
      };

      // Old COde
      //Changed above to return mulitple values
      // var type = document.querySelector('.add__type').value; //Either inc or Exp
      // var description = document.querySelector('.add__description').value;
      // var value = document.querySelector('.add__value').value;
    },

    //Passes DOMStrings to Public Access
    getDOMStrings: function() {
      return DOMStrings;
    }
  };
})();

//GLobal App controller
var controller = (function(budgetCrtl, UICtrl) {
  var DOM = UICtrl.getDOMStrings();

  var cntrlAddItem = function() {
    // Get the Field Input Data
    var input = UIController.getInput();
    console.log(input);
    // Add Item to Budget Controlller
    // Add Item to UI
    // Calculate the Budget
    // Display budget on UI
  };

  document.querySelector(".add__btn").addEventListener("click", cntrlAddItem);

  document.addEventListener("keypress", function(event) {
    if (event.keyCode === 13 || event.which === 13) {
      cntrlAddItem();
    }
  });
})(budgetController, UIController);
