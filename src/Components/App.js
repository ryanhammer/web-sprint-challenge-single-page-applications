import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';

import Home from './Home'
import PizzaForm from './PizzaForm'
import Help from './Help'

const App = () => {

  // Setting initial form values 
const initialFormValues = {
  // Text Input for name
  name: '',
   // Dropdown Input for pizza size
  size: '',
  // Radio Buttons for sauce type
  sauce: '',
  // Optional Checkbox for pizza topping choices
  x_cheese: false,
  pepperoni: false,
  sausage: false,
  ham: false,
  bacon: false,
  pineapple: false, 
  spinach: false,
  green_peppers: false,
  // Optional Checkbox for substituting gluten free crust
  gluten: false,
  // Text Input for special instructions
  instructions: ''
};

// Setting intial values for form validation error messages
const initialFormErrors = {
  name: '',
  size: '',
  sauce: '',
};

// Setting initial value for pizza order form submit button as disabled
const initialDisabled = true;

// Setting variables into State

  /* For Stretch
  // Setting into state user variable for array of order info which will change on successful form submissions
  const [order, setOrder] = useState({});
  */
  // Setting form values object into state
  const [formValues, setFormValues] = useState(initialFormValues);
  // Setting object containing different form field errors into state
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  // Setting boolean variable controlling submit button into state
  const [disabled, setDisabled] = useState(initialDisabled);

  const postNewOrder = newOrder => {

    // Using axios to post successfully submitted form with new order data to backend location
    axios
      .post(`https://reqres.in/`, newOrder)
        .then((res) => {
          // If post is successful, log order data to the console
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        })
        // Form is reset regardless of whether post is successful
        .finally(setFormValues(initialFormValues))
  }

  // Event handler functions
  const inputChange = (name, value) => {
    // Using yup.reach to use the defined schema to test individual parts of the form for validation
    // It takes the schema as the first argument, and the key to be tested as the second argument
    yup
      .reach(schema, name) 
      .validate(value)
      // Clears error if validation is successful
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: '',
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          // Validation error from schema if unsuccessful
          [name]: err.errors[0],
        });
      })
    setFormValues({
      ...formValues,
      [name]: value
    });
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      sauce: formValues.sauce,
      toppings: ['x_cheese', 'pepperoni', 'sausage', 'ham', 'bacon', 'pineapple', 'spinach', 'green_peppers'].filter(toppings => formValues[toppings]),
      gluten: formValues.gluten,
      instructions: formValues.instructions.trim()
    };
    postNewOrder(newOrder);
  }

  // Employing an effect hook to validate the form each time it is updated allowing for the submit button to be enabled once the form is completely valid
  useEffect(() => {
    
    schema.isValid(formValues).then(valid => {
      setDisabled(!valid);
    });
  }, [formValues])


  return (
    <>
      {/* Create header to splash across top of any routed location of app */}
      <header className='app-header'>
        <h1>Lambda Eats</h1>
        <nav className='nav-menu'>
          <Link to='/'>
            <button>Home</button>
          </Link>
          <Link to='/help'>
            <button>Help</button>
          </Link>
        </nav>
      </header>
      {/* Use a Switch to route to each App component. Current functionality is to get to the Pizza Order Form and Help page, but other ordering destinations can be added */}
      <Switch>
        <Route path={'/help'} >
          <Help />
        </Route>
        <Route path='/pizza' >
          <PizzaForm 
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
        <Route path='/' component = { Home }/>
      </Switch>
    </>
  );
};
export default App;
