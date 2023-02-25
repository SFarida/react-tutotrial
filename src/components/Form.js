import { useState } from 'react';

const Form = () => {
  const [state, setState] = useState({
    fname: '',
    lname: '',
    message: '',
    carBrand: '',
    isChecked: false,
    gender: '',
    price: 0,
  });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setState((state) => ({
      ...state, [e.target.name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const carBrands = [{ name: 'Mercedes', id: 1 }, { name: 'BMW', id: 2 }, { name: 'Maserati', id: 3 }, { name: 'Infinity', id: 4 }, { name: 'Audi', id: 5 }];

  const carBrandOptions = carBrands.map((carBrand) => (
    <option value={carBrand.name} key={carBrand.id}>
      {carBrand.name}
    </option>
  ));

  return (
    <>
      <h1>Controlled Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          First Name:
          {' '}
          <input name="fname" type="text" value={state.fname} onChange={handleChange} />
        </label>
        <br />
        <br />
        <label htmlFor="lname">
          Last Name:
          {' '}
          <input name="lname" type="text" value={state.lname} onChange={handleChange} />
        </label>
        <br />
        <br />
        <label htmlFor="message">
          Your Message:
          <textarea
            name="message"
            value={state.message}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label htmlFor="carBrand">
          Car brand:
          <select
            name="carBrand"
            value={state.carBrand}
            onChange={handleChange}
          >
            <option value="" disabled>
              --Pick a car brand--
            </option>
            {carBrandOptions}
          </select>
        </label>
        <br />
        <br />
        <label htmlFor="isChecked">
          <input
            type="checkbox"
            name="isChecked"
            checked={state.isChecked}
            onChange={handleChange}
          />
          Is Checked?
        </label>
        <br />
        <br />
        <label htmlFor="gender">
          <input
            type="radio"
            name="gender"
            value="male"
            checked={state.gender === 'male'}
            onChange={handleChange}
          />
          {' '}
          Male
        </label>
                &nbsp;
        <label htmlFor="gender">
          <input
            type="radio"
            name="gender"
            value="female"
            checked={state.gender === 'female'}
            onChange={handleChange}
          />
          {' '}
          Female
        </label>
        <br />
        <br />
        <label htmlFor="price">
          Price (between 0 and 50):
          <input
            type="range"
            name="price"
            min="0"
            max="50"
            value={state.price}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <h5>
        Name:
        {state.fname}
        {' '}
        {state.lname}
      </h5>
      <br />
      <p>
        Message:
        {state.message}
      </p>
      <br />
      <h5>
        Favorite car brand:
        {state.carBrand}
      </h5>
      <br />
      <h5>
        Is it checked? :
        {state.isChecked ? 'Yes' : 'No'}
      </h5>
      <br />
      <h5>
        Gender :
        {state.gender}
      </h5>
      <br />
      <h5>
        Price : $
        {state.price}
      </h5>
    </>
  );
};
export default Form;
