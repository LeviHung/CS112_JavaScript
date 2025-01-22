"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Chapter case

      Order Form Code
      Author: Levi Hung
      Date:   10/17/2024

      Filename: js06a.js
 */
window.addEventListener("load", function() {
      let orderForm = document.forms.orderForm;
      let model = orderForm.elements.model;

      // Select model selection list when form opens
      model.focus();

      // Add an event listener for every form element
      for (let i = 0; i < orderForm.elements.length; i++) {
            orderForm.elements[i].addEventListener("change", calcOrder);
      }
      
      // Calcuate the cost of the order
      calcOrder();

      function calcOrder() {
            // Determine the selected model
            let mIndex = model.selectedIndex;
            let mValue = model.options[mIndex].value;
            //console.log(mIndex + ", " + mValue);
            /*
                  For multiple options:
                  let selectedOpt = new Array();
                  for (let i = 0; i < model.options.length; i++) {
                        if (model.options[i].selected) {
                              selectedOpt.put(model.options[i]);
                        }
                  }
            */

            // Determine the selected quanitiy
            let qIndex = qty.selectedIndex;
            let qValue = qty.options[qIndex].value;
           //console.log(qIndex + ", " + qValue);
      
           let modelCost = mValue * qValue;
           orderForm.elements.modelCost.value = modelCost.toLocaleString("en-US", {style: "currency", currency: "USD"});      
      
           
           // Retreive the cost of the protection plan by CSS
           let planValue = document.querySelector('input[name="plan"]:checked').value;
           
           document.forms.orderForm.elements.plan[0];
           /*
           // Retrieve the cost of the protection plan by DOM
           let plan = orderForm.elements.plan;
           let planValue;
           for (let i = 0; i < plan.length; i++) {
                  if (plan[i].checked) {
                        planValue = plan[i].value;
                        break;
                  }
           }
           */
           
           // Change the plan to each item order
           let planCost = planValue * qValue;
           orderForm.elements.planCost.value = planCost.toLocaleString("en-US", {style: "currency", currency: "USD"});

           // Calculate the order subtotal
           let subtotal = modelCost + planCost;
           orderForm.elements.subtotal.value = subtotal.toLocaleString("en-US", {style: "currency", currency: "USD"});;

           // Calcuate the 5% sales tax
           let salesTax = subtotal * 0.05;
           orderForm.elements.salesTax.value = salesTax.toLocaleString("en-US", {style: "currency", currency: "USD"});;

           // Calcuate the total cost of the order
           let totalCost = subtotal + salesTax;
           orderForm.elements.totalCost.value = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"});;

           orderForm.elements.modelName.value = model.options[mIndex].text;
           let selectedPlan = document.querySelector('input[name="plan"]:checked');
           orderForm.elements.planName.value = selectedPlan.labels[0].textContent;
      }
      
});

//document.getElementById("orderForm").addEventListener("change", calcOrder());



