import React from 'react'
import { useHistory } from 'react-router-dom';

export default function PizzaForm(props) {

  const { values, submit, change, disabled, errors } = props;

  const onSubmit = evt => {
    evt.preventDefault();
    submit();
  }

  const onChange = evt => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
  }

  return (
    <main className='form-container'>
      <h3>Build Your Own Pizza</h3>
      <img src='./Assets/Pizza.jpg'/>
      <h2 id='form-title'>Build Your Own Pizza</h2>
      <form className='order-form' onSubmit={onSubmit}>

        <section className='form-heading'>
          <h3>Name for Order</h3>
          <p>Required</p>
        </section>

        <section className='form-item'>
          <label>Name:
            <input
                value={values.name}
                onChange={onChange}
                name='name'
                type='text'
            />
          </label>
        </section>

        {/* Dropdown menu for pizza size selection */}
        <section className='form-heading'>
          <h3>Choice of Size</h3>
          <p>Required</p>
        </section>

        <section className='form-item'>

          <label>Choose a Pizza Size: 
            <select
              onChange={onChange}
              value={values.size}
              name='size'
            >
              <option value=''>- Select an option -</option>
              <option value='Small'>Small</option>
              <option value='Medium'>Medium</option>
              <option value='Large'>Large</option>
              <option value='X-Large'>X-Large</option>
            </select>
          </label>

        </section>

        {/* Radio buttons for sauce choice */}
        <section className='form-heading'>
          <h3>Choice of Sauce</h3>
          <p>Required</p>
        </section>

        <section className='form-item' >
          <label className='sauce-selection'>Original Red
            <input
              type='radio'
              name='sauce'
              value='Original Red'
              onChange={onChange}
              checked={values.sauce === 'Original Red'}
            />
          </label>

          <label className='sauce-selection'>Garlic Ranch
          <input
              type='radio'
              name='sauce'
              value='Garlic Ranch'
              onChange={onChange}
              checked={values.sauce === 'Garlic Ranch'}
            />
          </label>

          <label className='sauce-selection'>BBQ Sauce
            <input
              type='radio'
              name='sauce'
              value='BBQ Sauce'
              onChange={onChange}
              checked={values.sauce === 'BBQ Sauce'}
            />
          </label>

          <label className='sauce-selection'>Spinach Alfredo
          <input
              type='radio'
              name='sauce'
              value='Spinach Alfredo'
              onChange={onChange}
              checked={values.sauce === 'Spinach Alfredo'}
            />
          </label>
        </section>

        {/* Checkbox section for topping choices */}
        <section className='form-heading'>
          <h3>Add Toppings</h3>
          <p>(Optional) Choose up to 8</p>
        </section>

        <section className='topping-selection'>

          <section className='topping-list'>
            <label>Extra Cheese
              <input
                type='checkbox'
                name='x_cheese'
                onChange={onChange}
                checked={values.x_cheese}
              />
            </label>

            <label>Pepperoni
              <input
                type='checkbox'
                name='pepperoni'
                onChange={onChange}
                checked={values.pepperoni}
              />
            </label>

            <label>Sausage
              <input
                type='checkbox'
                name='sausage'
                onChange={onChange}
                checked={values.sausage}
              />
            </label>

            <label>Ham
              <input
                type='checkbox'
                name='ham'
                onChange={onChange}
                checked={values.ham}
              />
            </label>
          </section>

          <section className='topping-list'>
            <label>Bacon
              <input
                type='checkbox'
                name='bacon'
                onChange={onChange}
                checked={values.bacon}
              />
            </label>

            <label>Pineapple
              <input
                type='checkbox'
                name='pineapple'
                onChange={onChange}
                checked={values.pineapple}
              />
            </label>

            <label>Spinach
              <input
                type='checkbox'
                name='spinach'
                onChange={onChange}
                checked={values.spinach}
              />
            </label>

            <label>Green Peppers
              <input
                type='checkbox'
                name='green_peppers'
                onChange={onChange}
                checked={values.green_peppers}
              />
            </label>
          </section>

        </section>

        {/* Checkbox section for choice of gluten free crust */}
        <section className='form-heading'>
          <h3>Choice of Subsitute</h3>
          <p>(Optional) Choose up to 1</p>
        </section>

        <section className='form-item'>

          <label>Gluten Free Crust (+ $1.00)
            <input
              type='checkbox'
              name='gluten'
              onChange={onChange}
              checked={values.gluten}
            />
          </label>

        </section>

        <section className='form-heading'>
          <h3>Special Instructions</h3>
          <p>(Optional)</p>
        </section>

        <section className='form-item'>
          <input
              value={values.instructions}
              onChange={onChange}
              name='instructions'
              type='text'
          />
        </section>

        <section className='form-submit'>
          <section className='errors-section'>
            <p>{errors.name}</p>
            <p>{errors.size}</p>
            <p>{errors.sauce}</p>
          </section>
          
          <button disabled={disabled} id='submitBtn' >Add to Order</button>

        </section>

      </form>
    </main>
  )
}